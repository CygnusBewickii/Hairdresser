<template>
    <div v-for="service in services">
        <ServiceCard :service="service" @showDialog="showDialog" @chooseService="(serv)=>$emit('chooseService', serv)"
        @deleteService="(serv)=>$emit('deleteService', serv)"
        />
    </div>
</template>

<script>
import ServiceCard from "./ServiceCard";
import DialogWindow from "./DialogWindow";
export default {
    name: "ServicesList",
    components: {ServiceCard, DialogWindow},
    props: {
        services: Array,
    },
    data() {
        return {
        }
    },
    methods: {
        showDialog(serv) {
            this.$emit('showDialog', serv)
        }
    }
}
</script>

<style scoped>

</style>
