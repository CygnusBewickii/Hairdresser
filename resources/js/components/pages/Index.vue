<template>
    <BarbersList @selectActive="(val) => this.id = val" @showInformation="showDialog"/>
    <router-link :to="{ name: 'services', params: { id: this.id} }">
        <div v-show="id > 0" class="mt-4 w-full text-white text-lg font-bold bg-black rounded-md h-11 text-center py-2 ">
            <span>Выбрать мастера</span>
        </div>
    </router-link>
    <DialogWindow v-model:is-shown="isDialogShown" v-model:info="dialogInfo" v-model:title="dialogTitle"/>
</template>

<script>
import BarbersList from "../layouts/BarbersList";
import Header from "../layouts/Header";
import DialogWindow from "../layouts/DialogWindow";
export default {
    name: "App",
    components: {DialogWindow, BarbersList, Header},
    data() {
        return {
            id: 0,
            isDialogShown: false,
            dialogTitle: "",
            dialogInfo: "",
        }
    },
    methods: {
        showDialog(barber) {
            this.isDialogShown = true;
            this.dialogTitle = barber.name;
            this.dialogInfo = barber.description;
        },
    }
}
</script>

<style scoped>

</style>
