<template>
    <div id="app">
        <navbar class="sticky top-0 z-10"></navbar>
        <div class="m-20 w1024">
            <vubular-data-browser-example></vubular-data-browser-example>
        </div>
    </div>
</template>

<script>
    import Navbar from './components/Navbar.vue'
    import VubularDataBrowserExample from './components/VubularDataBrowserExample.vue'

    export default {
        name: 'App',
        components: { Navbar, VubularDataBrowserExample }
    }
</script>
<style scoped>
.w1024 { width: 1024px; margin-left: auto; margin-right: auto; }
</style>
