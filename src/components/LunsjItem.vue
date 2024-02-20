<script>
import { useApp } from '@/stores'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export default {
  data() {
    return {
      app: useApp(),
    }
  },
  components: {
    Button,
    Badge,
  },
  props: {
    id: Number,
    cat: String,
  },
}
</script>

<template>
  <Button
    class="blured w-full relative flex justify-between items-center"
    variant="outline"
  >
    <Badge variant="outline">{{ id }}</Badge>
    <p class="font-medium"><slot /></p>
    <Badge class="text-md" variant="outline">{{ cat }}</Badge>
  </Button>
</template>

<style lang="scss" scoped></style>
