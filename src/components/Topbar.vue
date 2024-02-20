<script>
import { useApp } from "@/stores";

import { MagnifyingGlassIcon } from "@radix-icons/vue";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default {
  components: {
    Input,
    Badge,
    Button,
    MagnifyingGlassIcon,
  },
  data() {
    return {
      app: useApp(),
      search: "",
      results: [],
    };
  },
  methods: {
    onChange() {
      this.app.searchLunsj(this.search);
    },
  },
  mounted() {
    console.log();
  },
};
</script>

<template>
  <div class="relative p-1">
    <div class="relative w-full items-center">
      <div>
        <Input
          id="search"
          type="text"
          placeholder="Søk..."
          v-model="search"
          autocomplete="off"
          class="pl-10"
          @input="onChange($event)"
        />
        <span
          class="absolute start-0 inset-y-0 flex items-center justify-center px-2"
        >
          <MagnifyingGlassIcon class="size-6 text-muted-foreground" />
        </span>
      </div>
    </div>
    <ul>
      <li v-for="(item, i) in this.results" :key="i">{{ item }}</li>
    </ul>
  </div>
</template>

<style></style>
