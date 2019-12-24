<template>
  <div :class="`profileInfoContainer ${this.themeClassName}`">
    <div class="avatar">
      <span class="initials">АВ</span>
    </div>
    <div class="textContainer">
      <span class="name">Анатолий</span>
      <span class="surname">Вассерман</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['themeClassName'],
  data() {
    return {}
  }
}
</script>

<style scoped>
.profileInfoContainer {
  display: flex;
  align-items: center;
  margin-bottom: 60px;
}
.avatar {
  width: 75px;
  height: 75px;
  background-color: #872789;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  margin-right: 17px;
}
.initials {
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 30px;
  color: #ffffff;
}
.textContainer {
  display: flex;
  flex-direction: column;
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 30px;

  color: #ffffff;
}
.name {
  display: block;
}
.purple .avatar {
  background-color: #872789;
}
.yellow .avatar {
  background-color: #ffb800;
}
.blue .avatar {
  background-color: #5562d8;
}
</style>
