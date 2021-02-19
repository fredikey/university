<template>
	<div class="inputContainer">
		<input type="text" placeholder="Имя" v-model="name">
		<input type="text" placeholder="Фамилия" v-model="surname">
		<span class="error">Все поля обязательны</span>
		<button class="submit" @click="auth">Готов</button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				name: '',
				surname: '',
				error: false
			}
		},
		methods: {
			auth () {
				if (this.name === '' || this.surname === '') {
					this.error = true
					return;
				}
				this.$store.commit('setUser', {name: this.name, surname: this.surname})
				this.$router.push('/home')
			}
		}
	}
</script>

<style scoped>
	.inputContainer {
		align-items: center;
		justify-content: center;
		display: flex;
		flex: 1;
		flex-direction: column;
		align-self: center;
	}
	.inputContainer input {
		font-size: 20px;
		padding: 5px;
		margin-bottom: 15px;
	}
	.submit {
		width: 150px;
		height: 40px;
		border: 2px solid #333;
		font-size: 18px;
		border-radius: 20px;
	}
	.error {
		color: #e74c3c;
		font-size: 14px;
		margin-bottom: 5px;
	}
</style>
