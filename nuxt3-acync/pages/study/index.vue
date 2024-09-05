<script setup lang="ts">
import { ref } from 'vue';
const { data: users, error } = await useFetch('https://jsonplaceholder.typicode.com/users')
  // console.log(error.value)
 if (error.value) {
   throw createError({ statusCode: 404, statusMessage: 'page not found!!!!'})
   }

   // stor
   const titleState = useTitle()
   const { title } = titleState
   const isModalVisible  = ref(false)

   const toggleModal = () => {
    isModalVisible.value = !isModalVisible.value
   }
</script>

<template>
  <div>
    <img src="~/assets/img/カワイクテゴメンネ.jpg" alt="touhou">
    <!-- <p> {{ users[0].id }}, {{ users[0].name }}</p> -->
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.id }}, {{ user.name }}
      </li>
    </ul>
    <div>
      <h1>{{ 'stor' }}: {{ title }}</h1>
      <button @click="titleState.changeTitle('Hello Nuxt3!')">
        changeClick
      </button>
    </div>
    <div>
      <h1>モーダル画面を開くボタン</h1>
      <button @click="toggleModal">
        モーダル画面を開く
      </button>
      <OpenModal :show="isModalVisible" @close="toggleModal"/>
    </div>
  </div>
</template>
