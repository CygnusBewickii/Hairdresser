<template>
    <div v-for="barber in barbers" :key="barber.id" class="mt-4">
        <BarberCard :barber="barber" :active-barber="activeId" @selectActive="selectActive(barber)"
        @showInformation="showInformation"
        />
    </div>
</template>

<script>
import BarberCard from "./BarberCard";
export default {
    name: "BarbersList",
    components: {BarberCard},
    data() {
        return {
            barbers: [

            ],
            activeId: 0,
        }
    },
    methods: {
        selectActive(barber) {
            this.activeId = barber.id;
            this.$emit('selectActive', this.activeId);
        },
        showInformation(barber) {
            this.$emit('showInformation', barber)
        }
    },
    mounted() {
        axios.get('/api/barber/all')
        .then(response => response.data)
        .then(data => this.barbers = data);
    }
}
</script>

<style scoped>

</style>
