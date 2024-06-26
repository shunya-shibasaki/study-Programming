<template>
  <div>
    <img src="~/assets/カワイクテゴメンネ.jpg" alt="touhou">
    <!-- <p> {{ users[0].id }}, {{ users[0].name }}</p> -->
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.id }}, {{ user.name }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  const { data: users, error } = await useFetch('https://jsonplaceholder.typicode.com/users')
  // console.log(error.value)
 if (error.value) {
   throw createError({ statusCode: 404, statusMessage: 'page not found!!!!'})
   }
</script>
