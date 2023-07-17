<template>
    <div class="d-flex">
    <sidebar />
    <Mainview />
    </div>
</template>

<script>
import Sidebar from './Sidebar.vue'
import Mainview from './Mainview.vue'
    export default {
  components: { Sidebar, Mainview },
        
    }
</script>

<style lang="scss" scoped>

</style>