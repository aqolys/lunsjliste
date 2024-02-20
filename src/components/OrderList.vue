<script>
import { useApp } from "@/stores";

import { SewingPinFilledIcon } from "@radix-icons/vue";
import { ChevronUpIcon } from "@radix-icons/vue";

import { Button } from "@/components/ui/button";

export default {
  data() {
    return {
      app: useApp(),
    };
  },
  components: {
    SewingPinFilledIcon,
    ChevronUpIcon,
    Button,
  },
};
</script>

<template>
  <div class="order-list p-2 absolute bottom-0 w-full rounded-t-lg">
    <div class="flex justify-between items-center cursor-pointer select-none">
      <span class="flex items-center text-base pl-1 pb-2">
        <SewingPinFilledIcon />
        <p>ordreliste ({{ this.app.selected.length }})</p>
      </span>
      <ChevronUpIcon />
    </div>
    <ul v-if="this.app.selected">
      <li v-for="(item, i) in this.app.selected" :key="i">
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

<style lang="scss" scoped>
.order-list {
  border-color: hsl(var(--input));
  background-color: hsl(var(--background));
  border-width: 1px;
}
</style>
