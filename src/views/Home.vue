<script>
import { useApp } from '@/stores'

import Topbar from '@/components/Topbar.vue'
import LunsjList from '@/components/LunsjList.vue'
import OrderList from '@/components/OrderList.vue'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default {
  data() {
    return {
      app: useApp(),
    }
  },
  components: {
    Topbar,
    OrderList,
    LunsjList,
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  },
  methods: {
    onClickTab(tab) {
      this.app.changeActiveTab(tab)
    },
  },
}
</script>

<template>
  <div class="flex-row h-full relative">
    <Tabs default-value="orders" class="w-full">
      <TabsContent value="orders">
        <div class="flex-row">
          <div class="tab-header flex items-center justify-between">
            <span class="text-2xl pl-2"
              >📌 Bestillinger ({{ app.orders.length }})</span
            >
            <span
              class="p-2 underline cursor-pointer"
              @click="app.clearOrderList"
              >tømme listen</span
            >
          </div>
          <OrderList />
        </div>
      </TabsContent>
      <TabsContent value="list">
        <div class="flex-row">
          <Topbar />
          <LunsjList />
        </div>
      </TabsContent>
      <TabsList class="tab-footer grid w-full grid-cols-2">
        <TabsTrigger value="orders" @click="onClickTab('orders')">
          Bestillinger ({{ app.orders.length }})
        </TabsTrigger>
        <TabsTrigger value="list" @click="onClickTab('list')">
          Søk
        </TabsTrigger>
      </TabsList>
    </Tabs>
  </div>
</template>

<style lang="scss" scoped>
.tab {
  &-header {
    height: 56px;
  }
  &-footer {
    margin: 8px 0 8px 0;
  }
}
</style>
