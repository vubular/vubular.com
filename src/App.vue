<template>
    <div id="app">
        <navbar class="sticky top-0 z-10"></navbar>
        <div class="m-20 w1024">
            <vubular-data-browser></vubular-data-browser>
        </div>
    </div>
</template>

<script>
    import Navbar from './components/Navbar.vue'
    import VubularDataBrowser from './components/VubularDataBrowser.vue'

    export default {
        name: 'App',
        components: { Navbar, VubularDataBrowser }
    }
</script>
<style scoped>
.w1024 { width: 1024px; margin-left: auto; margin-right: auto; }
</style>
