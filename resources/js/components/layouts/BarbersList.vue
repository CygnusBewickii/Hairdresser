<template>
    <div v-for="barber in barbers" :key="barber.id" class="mt-4">
        <BarberCard :barber="barber" :active-barber="activeId" @selectActive="selectActive(barber)"></BarberCard>
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
                { id: 1, name: 'Alex', description: 'Хуй с горы',
                    image: 'storage/images/specialists/Billy.jpg',
                    category: 'говноед, колорист, дантист, онанист, похуист, ебанист вввввв ыыыыыыыыыы'},
                { id: 2, name: 'Chmo', description: 'Хуй с горы', image: 'storage/images/specialists/Billy.jpg',
                    category: 'говноед, колорист, дантист, онанист, похуист, ебанист вввввв ыыыыыыыыыы'}
            ],
            activeId: 0,
        }
    },
    methods: {
        selectActive(barber) {
            this.activeId = barber.id;
            this.$emit('selectActive', this.activeId);
        }
    }
}
</script>

<style scoped>

</style>
