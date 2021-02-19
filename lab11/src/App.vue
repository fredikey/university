<template>
  <div id="app">
    <Form @submit="addUser" />
    <div class="list">
      <h2>Список тех, кого отметили</h2>
      <div v-if="this.list.length !== 0" class="users">
        <ListItem
          v-for="(user, index) in this.list"
          :key="index"
          :user="user"
        />
      </div>
      <p v-else class="empty">Тут пока пусто</p>
    </div>
  </div>
</template>

<script>
import { Form, ListItem } from "./components";

export default {
  name: "app",
  data: () => {
    return {
      list: []
    };
  },
  methods: {
    addUser(user) {
      this.list.push(user);
    }
  },
  components: {
    Form,
    ListItem
  }
};
</script>

<style>
body {
  margin: 0;
  background-color: #2c3e50;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  height: 100vh;
}
#app {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 100%;
  margin-top: 100px;
}
.list {
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #fff;
}
.empty {
  font-size: 16px;
}
.users {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
