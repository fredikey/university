<template>
  <div class="item">
    <span class="name">{{ this.user.name }}</span>
    <span class="surname">{{ this.user.surname }}</span>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.name {
  margin-right: 5px;
}
</style>
