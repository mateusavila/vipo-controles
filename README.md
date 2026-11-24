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
