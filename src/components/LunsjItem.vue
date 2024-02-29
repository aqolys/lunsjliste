<script>
import { useApp } from "@/stores";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default {
  components: {
    Button,
    Badge,
  },
  props: {
    id: Number,
    cat: String,
  },
  data() {
    return {
      app: useApp(),
    };
  },
};
</script>

<template>
  <Button
    class="blured w-full relative px-1 flex justify-between items-center"
    variant="outline"
  >
    <Badge variant="outline">
      {{ id }}
    </Badge>
    <p class="font-medium text-ellipsis overflow-hidden ...">
      <slot />
    </p>
    <Badge class="text-md" variant="secondary">
      {{ cat }}
    </Badge>
  </Button>
</template>
