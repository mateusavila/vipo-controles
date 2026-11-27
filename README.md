# Vipo Eletrônica

Catálogo em Nuxt 4.6.4, Nitro, Nuxt UI 4.13.1, Drizzle e Turso.

## Rodar localmente

Use Node.js 24 ou instale as dependências com Bun. Copie `.env.example` para `.env` e preencha:

- `NUXT_SESSION_PASSWORD` com um segredo aleatório de pelo menos 32 caracteres.
- `NUXT_IDENTITY_DATABASE_URL` e `NUXT_IDENTITY_DATABASE_TOKEN` com os dados do Turso. Para desenvolvimento, também é possível usar `file:./vipo.db` sem token.
- `SEED_ADMIN_EMAIL`, `SEED_ADMIN_NAME` e `SEED_ADMIN_PASSWORD` para criar a conta inicial. A senha requer pelo menos 12 caracteres.

```sh
npm ci
npm run db:migrate
npm run admin:create
npm run dev
```

Remova a senha de seed do ambiente após criar as contas. Acesse `/login` para entrar no painel. O cadastro e a edição de controles são feitos em `/admin/controles`. Gerencie as marcas em `/admin/marcas`. Em bancos existentes, `db:migrate` separa os pares antigos em listas independentes de marcas e modelos de cada controle.

## APIs

| Método | Rota | Finalidade |
| --- | --- | --- |
| GET | `/api/controls` | Lista pública de controles ativos |
| GET | `/api/admin/controls` | Lista administrativa |
| GET | `/api/admin/controls/:id` | Detalhe para edição |
| POST | `/api/admin/controls` | Criar |
| PUT | `/api/admin/controls/:id` | Editar |
| DELETE | `/api/admin/controls/:id` | Apagar o controle, sua foto, compatibilidades e vínculos com buscas |
| GET | `/api/controls/:id/photo` | Servir a foto. A de controle inativo exige sessão administrativa |
| GET | `/api/brands` | Todas as marcas cadastradas, em ordem alfabética |
| GET, POST | `/api/admin/brands` | Listar e cadastrar marcas |
| PUT, DELETE | `/api/admin/brands/:id` | Renomear ou apagar marca sem vínculos |
| GET | `/api/admin/dashboard` | Rankings por controle e por termo |

As listagens aceitam `page`, `pageSize`, `name`, `brand`, `brandId`, `model`, `vipoCode` e `q`. O código Vipo é um filtro exato. O parâmetro `q` procura por nome, código Vipo, código original, marca, modelo, categoria e observações. Para listar os controles de uma marca pelo ID, use `/api/controls?brandId=<id>`. Cada controle retorna `brands: { id, name }[]` e `models: string[]`. Envie `brandIds: string[]` e `models: string[]` ao cadastrar ou editar. As listas são independentes e podem estar vazias. A API retorna `{ items, total, page, pageSize }`. As escritas recebem os campos do controle, as duas listas completas e, opcionalmente, `photo` em Base64 puro. Omitir `photo` mantém a imagem atual. Enviar `photo: null` remove a foto. Os bytes e o MIME ficam no próprio registro do controle.

Quando o visitante confirmar uma busca, envie `GET /api/controls?q=Sony%20Bravia&track=1`. Use `track=1` só no envio confirmado. Paginação, carregamento inicial, autocomplete e requisições repetidas devem omitir o parâmetro. Somente a primeira página registra buscas com termo ou filtros. O ranking conta uma ocorrência por busca para cada controle correspondente, incluindo os das demais páginas. Os termos são consolidados por caixa e espaços. Termos sem retorno entram no ranking de termos e no contador de buscas sem resultado.

A primeira página pública sem filtros usa cache do Nitro por 60 segundos. Buscas, filtros e outras páginas consultam o banco. A home registra uma busca ao enviar o campo de texto ou selecionar uma marca. A paginação e a limpeza dos filtros não incrementam o ranking.

## Sugerir modelos pela foto

1. No [painel da OpenAI](https://platform.openai.com/settings/organization/projects), seleciona ou cria o projeto Vipo. Dentro dele, abre **API Keys → Create new secret key** e copia a chave.
2. Define `NUXT_OPENAI_API_KEY` no `.env` local e nas variáveis privadas do ambiente de produção. Reinicia o servidor após configurar.
3. Roda `bun run db:migrate`. No admin, salva o controle com uma foto JPG, PNG ou WebP, reabre a edição e clica em **Sugerir modelos pela foto**. Revisa as fontes, adiciona as sugestões e salva o formulário.

A integração usa GPT-6 Luna e permite até uma chamada de ferramenta de busca por análise. Cada controle tem uma análise concluída, inclusive sem sugestões. Em caso de falha no serviço, é possível tentar de novo. O teto é de 50 tentativas por mês (UTC), incluindo falhas. Esse é um limite de chamadas no aplicativo. Uma tentativa que falha ou atinge o timeout pode ter sido processada e cobrada pela OpenAI. A exclusão de um controle não devolve tentativas à cota mensal.

## Upload de fotos

O servidor converte novos PNGs em WebP antes de gravar, mantendo dimensões e transparência. O PNG de entrada pode ter até 3 MiB e 16 megapixels. O arquivo salvo pode ter até 750 KiB. JPG, WebP e AVIF seguem com o limite de 750 KiB no upload. O processamento usa Sharp no runtime Node.js.

### Criação pela foto

Em **Novo controle**, seleciona a imagem. O upload salva um rascunho privado e libera os campos na mesma janela. Para arquivos como `Semp Toshiba 39277.png`, o formulário sugere o código e a marca cadastrada. Podes revisar as sugestões de modelos e finalizar com **Salvar**. Rascunhos interrompidos ficam disponíveis no admin.

Roda `bun run db:migrate` antes de usar esta versão. A análise é limitada por controle e pelo hash dos bytes da foto salva. Reenviar uma foto idêntica reaproveita o resultado. Uma foto diferente libera uma análise após salvar a troca. Na migração, análises anteriores são associadas à foto disponível no momento, pois o formato anterior não guardava seu hash.

## Duração da sessão administrativa

O login dura até 30 dias a partir da autenticação. Mantém o mesmo
`NUXT_SESSION_PASSWORD` no ambiente de produção entre deploys. Alterar esse
segredo invalida as sessões emitidas anteriormente. Depois de publicar esta
alteração, entra novamente para receber o cookie com a nova expiração.

## Convites e troca de senha

Execute `bun run db:migrate` com a conexão do banco de identidade antes de publicar
a versão que usa os tokens. Configure as variáveis abaixo no ambiente do Nuxt.

```dotenv
NUXT_IDENTITY_WEBHOOK_URL=https://seu-n8n.exemplo/webhook/vipo-identidade
NUXT_IDENTITY_WEBHOOK_SECRET=preencha-com-o-mesmo-segredo-do-n8n
NUXT_IDENTITY_APP_URL=https://vipo-controles.vercel.app
```

1. No n8n, crie um Webhook **POST** com autenticação Header Auth.
   Use o header `X-Vipo-Webhook-Secret` e o valor de `NUXT_IDENTITY_WEBHOOK_SECRET`.
2. Ligue o Webhook diretamente ao nó que envia o e-mail. Use
   `{{ $json.body.email }}` como destinatário e `{{ $json.body.subject }}` como assunto.
   No campo HTML em modo **Expression**, cole o conteúdo de `vipo-email-n8n.html`.
3. Configure a resposta do webhook para aguardar o resultado do envio.
   Retorne HTTP 2xx após o envio e um status de erro se o nó de e-mail falhar.
   No Nuxt, use a URL de produção do webhook ativo.
4. Entre como superadministrador e acesse **Usuários** e clique em **Convidar usuário**. Para testar a
   recuperação, use **Trocar senha** no login. Convite e recuperação compartilham
   o template, com título e texto adequados ao fluxo.

O envio tem um intervalo de um minuto por conta. Para reenviar um convite
pendente, use o mesmo nome e e-mail. Os links não têm prazo de validade e
permanecem utilizáveis até que a senha seja salva. Ao salvar, os links pendentes
da conta são invalidados e as sessões anteriores perdem acesso ao painel.
O webhook recebe o token em texto para montar o e-mail. Restrinja o acesso ao
histórico de execuções no n8n ou desative o armazenamento dessas execuções.

## Cache do catálogo e carrossel

A API pública carrega os controles ativos e suas marcas em um snapshot no cache padrão do Nitro por 60 segundos. Busca, filtros e paginação são aplicados nesse snapshot. O registro de estatísticas ainda faz escritas no Turso quando uma busca é confirmada. Fotos continuam sendo servidas pela rota de imagens.

Após escritas administrativas em controles e marcas, o snapshot é reconstruído. Na Vercel, o cache padrão em memória é por instância. Outras instâncias podem refletir alterações em até 60 segundos e cold starts recarregam o catálogo. Para invalidação imediata entre instâncias, é necessário armazenamento de cache compartilhado.

O carrossel mantém uma fila independente, em lotes de seis controles, e antecipa o próximo lote ao se aproximar do fim. A grade conserva a paginação existente.
