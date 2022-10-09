<template>
    <div>I'm Main Vue Component</div>
    <div>Props from blade: {{title}}</div>
</template>

<script>
export default {
    name: "Main",
    props: {
        title: {type: String}
    },
    setup() {

        return {
        }
    }
}
</script>

<style scoped>

</style>
