<template>
  <VkSimpleCell :getClass="['CellButton', 'CellButton--' + VkPlatform,
   'CellButton--' + mode,
   centered === true ? 'CellButton--centered' : '',
   'CellButton--aln-left'
   ]">
    <div class="CellButton__in">
      <div class="CellButton__content"><slot /></div>
    </div>
  </VkSimpleCell>
</template>

<script>
import VkSimpleCell from '@/components/SimpleCell/SimpleCell'

export default {
  components: { VkSimpleCell },
  props: {
    mode: {
      type: String,
      default: 'primary'
    },
    centered: {
      type: Boolean,
      default: false
    },
    stopPropagation: {
      type: Boolean,
      default: true
    }
  }
}
</script>
