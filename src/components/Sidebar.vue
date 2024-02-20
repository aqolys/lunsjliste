<script>
import { useApp } from '@/stores'

import { MagnifyingGlassIcon } from '@radix-icons/vue'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export default {
  components: {
    Input,
    Badge,
    Select,
    Button,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
    MagnifyingGlassIcon,
  },
  data() {
    return {
      app: useApp(),
      search: '',
      results: [],
    }
  },
  methods: {
    filterResults() {
      // this.results = this.app.lunsj.filter((item) => item.name.toLowerCase())
    },
    onChange() {
      this.filterResults()
    },
  },
  mounted() {
    console.log(this.app.lunsj[0]['name'])
  },
}
</script>

<template>
  <div class="w-3/12 h-screen relative p-1">
    <div class="flex relative w-full max-w-sm items-center">
      <div>
        <Input
          id="search"
          type="text"
          placeholder="Søk..."
          v-model="search"
          class="pl-10"
          @input="onChange($event)"
        />
        <span
          class="absolute start-0 inset-y-0 flex items-center justify-center px-2"
        >
          <MagnifyingGlassIcon class="size-6 text-muted-foreground" />
        </span>
      </div>
      <div>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem v-for="(item, i) in app.cat" :value="item" :key="i">
                {{ item }}
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
    <div>
      <ul v-for="(item, i) in app.getLunsjList" :key="i">
        <!-- <p>{{ item }}</p> -->
        <li class="pt-2">
          <Button
            class="w-full flex justify-between items-center"
            variant="outline"
          >
            <p>{{ item.name }}</p>
            <Badge variant="secondary">{{ item.cat }}</Badge>
          </Button>
        </li>
      </ul>
    </div>
    <!-- <ul>
      <li v-for="(item, i) in app.lunsj" :key="i">{{ item.name }}</li>
    </ul> -->
    <!-- {{ results }} -->
  </div>
</template>

<style></style>
