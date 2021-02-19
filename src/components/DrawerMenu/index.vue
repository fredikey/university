<template>
  <div :class="`nav ${this.themeClassName}`">
    <ProfileInfo :themeClassName="this.themeClassName" />
    <Link
      v-for="(item, index) in this.menuItems"
      :title="item.title"
      :path="item.path"
      :menuThemeClassName="item.menuThemeClassName"
      :key="index"
      @onClickLink="onClickLink"
    />
  </div>
</template>

<script>
import MenuItem from './MenuItem'
import ProfileInfo from './ProfileInfo'

const menuItems = [
  {
    path: '/',
    title: 'Мой день',
    menuThemeClassName: 'purple'
  },
  {
    path: '/important',
    title: 'Важное',
    menuThemeClassName: 'yellow'
  },
  {
    path: '/tasks',
    title: 'Все задания',
    menuThemeClassName: 'blue'
  },
  {
    path: '/statistics',
    title: 'Статистика',
    menuThemeClassName: 'peach'
  }
]

export default {
  data() {
    return {
      themeClassName: 'purple'
    }
  },
  computed: {
    menuItems() {
      return menuItems
    }
  },
  methods: {
    onClickLink(className) {
      if (this.themeClassName !== className) {
        this.themeClassName = className
      }
    }
  },
  components: {
    ProfileInfo,
    Link: MenuItem
  }
}
</script>

<style scoped>
.nav {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
	min-height: 100vh;
  padding-top: 50px;
  padding-left: 60px;
  width: 355px;
}

.purple {
  background-color: #e4aaff;
}
.purple .menuItemContainer {
  border-bottom-color: #d987ff;
}
.yellow {
  background-color: #ffdf34;
}
.yellow .menuItemContainer {
  border-bottom-color: #f1c40f;
}
.blue {
  background-color: #b4bbff;
}
.blue .menuItemContainer {
  border-bottom-color: #7d8aff;
}
.peach {
	background-color: #FFD3BA;
}
.peach .menuItemContainer {
	 border-bottom-color: #FFB8A2;
 }
</style>
