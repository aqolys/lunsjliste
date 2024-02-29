<script>
import { useApp } from '@/stores'

import { OrdersTab } from '@/components/order-list'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { LunsjTab } from '@/components/lunsj-list'

export default {
  data() {
    return {
      app: useApp(),
    }
  },
  components: {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
    LunsjTab,
    OrdersTab
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
    <Tabs default-value="orders" class="w-full h-[100dvh]">
      <TabsContent value="orders">
        <OrdersTab />
      </TabsContent>
      <TabsContent value="list">
        <LunsjTab />
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
