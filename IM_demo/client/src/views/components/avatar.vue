<template>
  <div class="avatar">
    <img :src="imageUrl" alt="">
  </div>
</template>

<script>
import defaultAvatar from '@/assets/images/default.jpg'

export default {
  props: {
    imageUrl: {
      type: String,
      default: defaultAvatar
    }
  },
}
</script>

<style lang="scss" scoped>
.avatar {
  display: inline-block;
  width: 36px;
  height: 36px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
}
</style>