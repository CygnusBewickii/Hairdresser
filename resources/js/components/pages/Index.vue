<template>
    <BarbersList @selectActive="(val) => this.id = val"/>
    <router-link :to="{ name: 'services', params: { id: this.id} }">
        <div v-show="id > 0" class="mt-4 w-full text-white text-lg font-bold bg-black rounded-md h-11 text-center py-2 ">
            <span>Выбрать мастера</span>
        </div>
    </router-link>
</template>

<script>
import BarbersList from "../layouts/BarbersList";
import Header from "../layouts/Header";
export default {
    name: "App",
    components: {BarbersList, Header},
    data() {
        return {
            id: 0,
        }
    },
    methods: {

    }
}
</script>

<style scoped>

</style>
