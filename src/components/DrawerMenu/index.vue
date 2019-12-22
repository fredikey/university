<template>
  <div class="nav">
    <ProfileInfo />
    <SearchBar />
    <Link
      v-for="(item, index) in this.menuItems"
      :title="item.title"
      :path="item.path"
      :key="index"
    />
  </div>
</template>

<script>
import MenuItem from './MenuItem'
import SearchBar from './SearchBar'
import ProfileInfo from './ProfileInfo'

const menuItems = [
  {
    path: '/',
    title: 'Мой день'
  },
  {
    path: '/important',
    title: 'Важное'
  },
  {
    path: '/tasks',
    title: 'Задачи'
  },
  {
    path: '/statistics',
    title: 'Статистика'
  }
]

export default {
  data() {
    return {}
  },
  computed: {
    menuItems() {
      return menuItems
    }
  },
  components: {
    ProfileInfo,
    SearchBar,
    Link: MenuItem
  }
}
</script>

<style scoped>
.nav {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #f1c40f;
  height: 100%;
  padding-top: 50px;
  padding-left: 50px;
  padding-right: 50px;
  font-size: 18px;
  width: 300px;
}
</style>
