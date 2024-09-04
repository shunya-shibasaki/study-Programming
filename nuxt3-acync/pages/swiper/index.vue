<template>
  <div>
    <SwiperComponent @updateComment="updateComment" />
    <CommentDisplay :comment="currentComment"/>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const currentComment = ref<string>()

const updateComment = (newComment: string) => {
  currentComment.value = newComment
}
</script>