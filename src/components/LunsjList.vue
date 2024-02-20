<script>
import { useApp } from "@/stores";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default {
  data() {
    return {
      app: useApp(),
    };
  },
  components: {
    Button,
    Badge,
  },
  methods: {
    onLunsj(lunsj) {
      this.app.addLunsj(lunsj);
    },
  },
};
</script>

<template>
  <div>
    <ul>
      <li class="pt-2" v-for="(item, i) in this.app.searchResults" :key="i">
        <Button
          class="w-full relative flex justify-between items-center"
          variant="outline"
          @click="onLunsj(item)"
        >
          <Badge variant="secondary"> {{ item.id }}</Badge>
          <p>{{ item.name }}</p>
          <Badge variant="secondary">{{ item.cat }}</Badge>
        </Button>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped></style>
