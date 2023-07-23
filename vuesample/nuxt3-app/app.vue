<template>
  <div>
    <!-- <h1> {{ message }}</h1> -->
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup>
useHead(
  {
    title: "Nuxt 3 store",
    link: [
      {rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap"}
    ]
  }
)
  // export default {
  //   data: function() {
  //     return {
  //       message: 'Hello world!'
  //     }
  //   }
  // }
</script>

