<template>
  <div class="sidebarContainer" v-if="isVisible">
	  <div
		  class="taskContainer"
	  >
		  <div class="checked" @click="toggleCompleted">
			  <svg
				  v-show="this.data.isCompleted"
				  style="transform: scale(1.2)"
				  width="13"
				  height="12"
				  viewBox="0 0 13 12"
				  fill="none"
				  xmlns="http://www.w3.org/2000/svg"
			  >
				  <path d="M11.708 1L5.15401 10.515L1.20803 5" stroke="black" />
			  </svg>
		  </div>
      <input class="taskTitle" type="text" v-model="data.title"/>
	  </div>
	  <div class="dateContainer">
		  <div class="dateInputContainer">
			  <span>День</span>
			  <input type="text" v-model="dateDay">
		  </div>
		  <div class="dateInputContainer">
			  <span>Месяц</span>
			  <input type="text" v-model="dateMonth">
		  </div>
		  <div class="dateInputContainer">
			  <span>Год</span>
			  <input type="text" v-model="dateYear">
		  </div>
	  </div>
	  <span class="dateError" v-if="invalideData">Дата неккоректна</span>
	  <div class="drawerItem">
		  <span class="drawerItemTitle" @click="addDate">{{ this.data.date ? 'Изменить дату выполнения' : 'Добавить дату выполнения' }}</span>
	  </div>
	  <div class="drawerItem" v-if="this.data.date">
		  <span class="drawerItemTitle" @click="removeDate">Удалить дату выполнения</span>
	  </div>
	  <div class="drawerItem" @click="toggleImportant">
		  <span v-if="!this.data.isImportant" class="drawerItemTitle">Добавить в важное</span>
		  <span v-else class="drawerItemTitle">Убрать из важного</span>
	  </div>
	  <div class="drawerItem" @click="addToMyDay">
		  <span class="drawerItemTitle">Добавить в мой день</span>
	  </div>
	  <div class="drawerItem" @click="remove">
		  <span class="drawerItemTitle">Удалить</span>
	  </div>
	  <div class="drawerItem" @click="close">
		  <span class="drawerItemTitle">Закрыть сайдбар</span>
	  </div>
  </div>
	
</template>

<script>
export default {
  data() {
    return {
    	dateMonth: 12,
	    dateDay: 1,
	    dateYear: 2020
    }
  },
  computed: {
    isVisible() {
      return this.$store.state.editingMode
    },
	  data () {
    	return this.$store.state.editTask
	  },
	  invalideData () {
    	if (!Number(this.dateMonth) || !Number(this.dateYear) || !Number(this.dateDay) || this.dateMonth < 1 || this.dateMonth > 12 || this.dateDay < 1 || this.dateDay > 31 || this.dateYear < 2019 || this.dateYear > 2050) {
    		return true
	    }return false
	  }
  },
	methods: {
  	toggleImportant () {
  		this.data.isImportant = !this.data.isImportant
	  },
		toggleCompleted () {
  		this.data.isCompleted = !this.data.isCompleted
		},
		addDate () {
  		if (!this.invalideData) {
  			this.data.date = new Date(this.dateYear, this.dateMonth - 1, this.dateDay)
		  }
		},
		addToMyDay () {
  		this.data.date = new Date()
			this.dateMonth = 12
			this.dateYear = 2019
			this.dateDay = 27
		},
		removeDate () {
  		this.data.date = null
		},
		remove () {
  		this.$store.commit('removeTask', {id: this.data.id})
			this.close()
		},
		close () {
			this.$store.commit('closeEditSidebar')
		}
	},
	updated() {
  	console.log('update')
	},
	mounted() {
  	console.log('mount')
	}
}
</script>

<style scoped>
.sidebarContainer {
  background-color: #FFD3BA;
  min-height: 100vh;
  width: 300px;
  display: flex;
	flex-direction: column;
	padding-left: 30px;
	padding-right: 30px;
}
.taskContainer {
	display: flex;
	width: 100%;
	align-items: center;
	margin-top: 40px;
	margin-bottom: 20px;
	position: relative;
}
.taskTitle {
	font-style: normal;
	display: flex;
	font-weight: normal;
	font-size: 18px;
	padding: 0;
	margin: 0;
	background-color: transparent;
	border: none;
	width: 190px;
	font-family: 'Montserrat',sans-serif;
	color: #000000;
}
.checked {
	width: 30px;
	height: 30px;
	border-radius: 100%;
	margin-right: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	border: 2px solid #333;
}
.drawerItem {
	display: flex;
	align-items: center;
	flex-direction: row;
	cursor: pointer;
	margin-bottom: 20px;
	height: 35px;
}
.drawerItemTitle {
	position: relative;
}
.drawerItemTitle::after {
	content: '';
	display: flex;
	width: 100%;
	height: 1px;
	background-color: #333;
	position: absolute;
	bottom: -3px;
}
	.dateContainer {
		flex-direction: row;
		display: flex;
		align-items: center;
	}
	.dateInputContainer {
		flex-direction: column;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-right: 10px;
	}
	.dateInputContainer:last-child {
		margin-right: 0;
	}
	.dateInputContainer span {
		margin-bottom: 5px;
	}
	.dateInputContainer input {
		display: flex;
		text-align: center;
		width: 70px;
		font-size: 16px;
		font-family: Montserrat, sans-serif;
	}
	.dateError {
		color: #e74c3c;
		font-size: 14px;
	}
</style>
