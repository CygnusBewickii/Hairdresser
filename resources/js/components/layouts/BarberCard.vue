<template>
    <div class="border border rounded-xl h-32 bg-white p-5" @click="chooseActive" :class="this.border">
        <div class="flex justify-between">
            <div class="rounded-full overflow-hidden  w-14 h-14">
                <img :src="barber.image" alt="Здесь должно было быть изображение мастера" style="width: 60px; height: 60px">
            </div>
            <div class="opacity-50  text-sm ml-2 mr-2">
                <p class="mb-2">{{barber.category}}</p>
                <p class="text-lg font-bold">{{barber.name}}</p>
            </div>
            <div class="">
                инфо
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "BarberCard",
    props: {
        barber: Object,
        activeBarber: Number,
    },
    data() {
      return {
          border: '',
      }
    },
    methods: {
        chooseActive() {
            this.$emit('selectActive', this.barber)
        }
    },
    watch: {
        activeBarber() {
            if (this.activeBarber == this.barber.id) {
                this.border = 'border-black';
            }
            else {
                this.border = '';
            }
        }
    }
}
</script>

<style scoped>

</style>
