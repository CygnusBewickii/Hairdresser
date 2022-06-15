<template>
    <div>
        {{services}}
    </div>
</template>

<script>
export default {
    name: "Time",
    props: {
        services: Array,
    },
    data() {
        return {
            selectedServices: [],
        }
    },
    mounted() {
        this.services.forEach(item => this.selectedServices.push(JSON.parse(item)));
    }
}
</script>

<style scoped>

</style>
