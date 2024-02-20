<script>
import Topbar from "@/components/Topbar.vue";
import LunsjList from "@/components/LunsjList.vue";
import OrderList from "@/components/OrderList.vue";

export default {
  components: { Topbar, OrderList, LunsjList },
};
</script>

<template>
  <div class="flex-row h-full relative">
    <Topbar />
    <LunsjList />
    <OrderList />
  </div>
</template>

<style lang="scss" scoped></style>
