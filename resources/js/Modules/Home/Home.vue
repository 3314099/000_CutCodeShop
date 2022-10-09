<template>
   <div class="space-y-2">
       <div class="bg-gray-200 text-lg font-bold text-green">
           <h1 >{{title}}</h1>
       </div>
       <div class="border-green-700 border-2 rounded-lg text-center mx-12">
           I'm home/vue content
       </div>
       <div class="grid grid-cols-2 place-items-center">
           <div class="w-48 border-green-700 border-2 rounded-lg text-center">
               Col-1
           </div>
           <div class="w-48 border-green-700 border-2 rounded-lg text-center">
               Col-2
           </div>
       </div>
   </div>
</template>

<script>

export default {
    name: "Home",
    components: {
    },
    props: {
        title: {type: String}
    }
}
</script>

<style scoped>

</style>
