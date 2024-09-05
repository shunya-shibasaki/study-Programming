<script setup lang="ts">
import { useForm } from 'vee-validate'
import { mixed, object, string } from 'yup'
import type { InferType } from 'yup'
  type ScoreType = 1 | 2 | 3 | 4 | 5;
  type Props = {
    show: boolean
  }

  const props = defineProps<Props>();

  const rating = ref<number>()
  const comment = ref<string>()
  const emit = defineEmits(['close'])

  const validationSchema = object({
    rating: mixed<ScoreType>().required('評価は必須です。')
  })

  const { values } = useForm<InferType<typeof validationSchema>>({
    validationSchema,
  })

  const closeModal = () => {
    emit('close')
  }

  const submitReview = () => {
  alert(`Thank you for your review!\nRating: ${rating.value} stars\nComment: ${comment.value}`)
  closeModal()
}
</script>

<template>
  <div v-if="show" class="modal-overlay" @click="closeModal">
    <div class="modal-content" @click.stop>
      <h2>Review this product</h2>
      <p>Please give your rating:</p>

      <!-- 星評価コンポーネント -->
      <StarRating v-model="rating" name="rating" :value="values.rating"/>

      <!-- テキストフォームの追加 -->
      <textarea v-model="comment" placeholder="Leave your comment here" class="comment-box"></textarea>
      <p>Your comment: {{ comment }}</p>

      <!-- ボタンの追加 -->
      <div class="button-group">
        <button @click="closeModal">Cancel</button>
        <button @click="submitReview">Confirm</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 5px;
  max-width: 500px;
  width: 100%;
}

.comment-box {
  width: 100%;
  height: 100px;
  margin-top: 10px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.button-group {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}

button {
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}

button:first-child {
  background-color: #28a745; /* 確認ボタンの色 (緑) */
  color: white;
}

button:last-child {
  background-color: #dc3545; /* キャンセルボタンの色 (赤) */
  color: white;
}
</style>