<template>
    <div class="w-2/5 mx-auto">
        <Header/>
        <router-view></router-view>
    </div>
</template>

<script>
import Header from "./layouts/Header";
export default {
    name: "App",
    components: {
        Header,
    },
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>

<style scoped>

</style>
