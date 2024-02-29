<script>
import { LunsjList, LunsjListHeader } from '.';

export default {
  components: {
    LunsjList, 
    LunsjListHeader
  }
}
</script>

<template>
  <div class="flex-row">
    <LunsjListHeader />
    <LunsjList />
  </div>
</template>