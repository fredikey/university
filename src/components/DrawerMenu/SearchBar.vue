<template>
  <div class="searchBarContainer">
    <svg
      class="icon"
      width="27"
      height="23"
      viewBox="0 0 27 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="9.7426"
        cy="10.4378"
        r="7.21356"
        transform="rotate(18.2665 9.7426 10.4378)"
        stroke="#A09F9F"
      />
      <line
        x1="21.0049"
        y1="22.4072"
        x2="14.8505"
        y2="16.176"
        stroke="#A09F9F"
      />
    </svg>
    <input class="input" type="text" placeholder="Поиск..." />
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style scoped>
.searchBarContainer {
  display: flex;
  align-items: center;
  width: 228px;
  height: 40px;
  background: #ffffff;
  border-radius: 20px;
  margin-bottom: 110px;
}
.input {
  display: flex;
  font-style: normal;
  width: 150px;
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  color: #333;
  border: none;
}
.input::placeholder {
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  color: #a09f9f;
}
.icon {
  margin-right: 10px;
  width: 27px;
  margin-left: 18px;
}
</style>
