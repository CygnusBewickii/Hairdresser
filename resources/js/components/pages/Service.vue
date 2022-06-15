<template>
    <ServicesList :services="this.services" @showDialog="showDialog" @chooseService="addService"
    @deleteService="deleteService"
    />
    <router-link :to="{ name: 'time', params: { id: this.$route.params.id, services: JSONServices } }">
        <div v-show="selectedServices.length > 0" class="mt-4 w-full text-white text-lg font-bold bg-black rounded-md h-11 text-center py-2 ">
            <span>Выбрать услуги</span>
        </div>
    </router-link>
    <DialogWindow v-model:is-shown="isDialogShown" v-model:info="dialogInfo" v-model:title="dialogTitle"/>
</template>

<script>
import ServicesList from "../layouts/ServicesList";
import DialogWindow from "../layouts/DialogWindow";
export default {
    name: "Services",
    components: {DialogWindow, ServicesList},
    data() {
        return {
            services: [],
            selectedServices: [],
            JSONServices: [],
            isDialogShown: false,
            dialogTitle: "",
            dialogInfo: "",
        }
    },
    methods: {
        showDialog(serv) {
            this.isDialogShown = true;
            this.dialogTitle = serv.type;
            this.dialogInfo = serv.description;
        },
        addService(serv) {
            this.selectedServices.push(serv);
        },
        deleteService(serv) {
            this.selectedServices = this.selectedServices.filter(item => JSON.stringify(item) != JSON.stringify(serv));
        },

    },
    computed: {
    },
    watch: {
        selectedServices: {
            handler() {
                this.JSONServices = [];
                this.selectedServices.forEach(item => this.JSONServices.push(JSON.stringify(item)));
            },
            deep: true
        }
    },
    mounted() {
        axios.get(`/api/barber/${this.$route.params.id}/services`)
        .then(response => response.data)
        .then(data => this.services = data)
    }
}
</script>

<style scoped>

</style>
