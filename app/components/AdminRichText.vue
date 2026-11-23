<script setup lang="ts">
const model = defineModel<string>({ required: true })
const editor = ref<HTMLElement>()
onMounted(() => { if (editor.value) editor.value.innerHTML = model.value })
watch(model, value => { if (editor.value && editor.value.innerHTML !== value) editor.value.innerHTML = value })

function sync() {
  if (editor.value) model.value = editor.value.innerHTML
}

function format(command: string) {
  editor.value?.focus()
  document.execCommand(command)
  sync()
}

function insertLink() {
  const element = editor.value
  if (!element) return
  const selection = window.getSelection()
  const range = selection?.rangeCount ? selection.getRangeAt(0) : null
  const savedRange = range && element.contains(range.commonAncestorContainer) ? range.cloneRange() : null
  const input = window.prompt('URL do link', 'https://')?.trim()
  if (!input) return

  const url = URL.canParse(input) ? new URL(input) : null
  if (!url || !['https:', 'http:', 'mailto:'].includes(url.protocol)) {
    window.alert('Informe uma URL válida começando com https://, http:// ou mailto:.')
    return
  }

  element.focus()
  if (selection && savedRange) {
    selection.removeAllRanges()
    selection.addRange(savedRange)
  }

  if (savedRange && !savedRange.collapsed) {
    document.execCommand('createLink', false, url.href)
  } else {
    const link = document.createElement('a')
    link.href = url.href
    link.textContent = input
    document.execCommand('insertHTML', false, link.outerHTML)
  }

  sync()
}

function paste(event: ClipboardEvent) {
  event.preventDefault()
  document.execCommand('insertText', false, event.clipboardData?.getData('text/plain') ?? '')
  sync()
}
</script>

<template>
  <div class="overflow-hidden rounded-lg border border-default focus-within:ring-2 focus-within:ring-primary">
    <div class="flex flex-wrap gap-1 border-b border-default bg-elevated/60 p-2">
      <UButton type="button" color="neutral" variant="ghost" size="sm" icon="i-lucide-bold" aria-label="Negrito"
        @mousedown.prevent @click="format('bold')" />
      <UButton type="button" color="neutral" variant="ghost" size="sm" icon="i-lucide-italic" aria-label="Itálico"
        @mousedown.prevent @click="format('italic')" />
      <UButton type="button" color="neutral" variant="ghost" size="sm" icon="i-lucide-link" aria-label="Inserir link"
        @mousedown.prevent @click="insertLink" />
      <UButton type="button" color="neutral" variant="ghost" size="sm" icon="i-lucide-list" aria-label="Lista"
        @mousedown.prevent @click="format('insertUnorderedList')" />
      <UButton type="button" color="neutral" variant="ghost" size="sm" icon="i-lucide-list-ordered" aria-label="Lista numerada"
        @mousedown.prevent @click="format('insertOrderedList')" />
    </div>
    <div ref="editor" class="admin-rich-text min-h-32 p-4 text-sm focus-visible:outline-none [&_ol]:list-decimal [&_ul]:list-disc [&_ol]:pl-5 [&_ul]:pl-5 [&_a]:text-primary [&_a]:underline"
      contenteditable="true" role="textbox" aria-multiline="true" aria-label="Texto formatado"
      @input="sync" @paste="paste" @drop.prevent />
  </div>
</template>
