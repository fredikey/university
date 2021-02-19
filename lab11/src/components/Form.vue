<template>
  <div class="form">
    <h2 class="form-title">Учет посещаемости студентов</h2>
    <p class="descr">Для того, чтобы отметить студента, заполните форму ниже</p>
    <label class="form-input-container">
      <span>Имя</span>
      <input required type="text" v-model="name" placeholder="Введите имя" />
    </label>
    <label class="form-input-container">
      <span>Фамилия</span>
      <input
        required
        type="text"
        v-model="surname"
        placeholder="Введите фамилию"
      />
    </label>
    <button class="form-submit" @click="submit">
      Добавить
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      surname: "",
      name: ""
    };
  },
  methods: {
    submit() {
      if (this.surname !== "" && this.name !== "") {
        this.$emit("submit", { name: this.name, surname: this.surname });
        this.clear();
      }
    },
    clear() {
      this.surname = "";
      this.name = "";
    }
  }
};
</script>

<style scoped>
.form {
  width: 450px;
  background-color: #2c3e50;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.form-title {
  margin-bottom: 0;
}
.descr {
  margin-top: 5px;
  font-size: 14px;
  margin-bottom: 20px;
}
.form-input-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  position: relative;
}
.form-input-container:last-of-type {
  margin-bottom: 0;
}

.form-input-container label {
  font-size: 14px;
  margin-left: 10px;
  font-weight: 400;
  color: #ffffff;
}

.form-input-container input {
  background-color: transparent;
  border: none;
  color: #fff;
  padding-left: 20px;
  padding-bottom: 5px;
  outline: none;
  border-bottom: 2px solid #fff;
  font-size: 16px;
  width: 250px;
  font-style: italic;
}

.form-input-container input::placeholder {
  color: rgba(255, 255, 255, 0.78);
}

.form-submit {
  width: 175px;
  height: 40px;
  margin-top: 15px;
  margin-bottom: 10px;
  border-radius: 15px;
  background-color: #fff;
  border: none;
  color: rgba(51, 51, 51, 1);
  letter-spacing: 1px;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  transition: 0.3s opacity;
}
.form-submit:hover {
  opacity: 0.7;
}
</style>
