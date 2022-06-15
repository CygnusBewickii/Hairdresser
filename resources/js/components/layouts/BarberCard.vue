<template>
    <div class="border border rounded-xl h-32 bg-white p-5" @click="chooseActive" :class="this.border">
        <div class="flex">
            <div class="rounded-full overflow-hidden  w-14 h-14 relative right-1 top-1">
                <img :src="barber.picturePath" alt="Здесь должно было быть изображение мастера" style="width: 60px; height: 60px">
            </div>
            <div class="opacity-50 align-self-left text-sm ml-4 mr-2 grow">
                <p class="mb-2">{{barber.position}}</p>
                <p class="text-lg font-bold">{{barber.name}}</p>
            </div>
            <div class="mr-3 mt-4 relative right-1 top-1" style="height: 50px; width: 50px" @click.stop="showInformation">
                <img :src="'/storage/images/logo/info.png'" style="height: 50px; width: 50px">
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
        },
        showInformation() {
            this.$emit('showInformation', this.barber)
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
