<template>
	<div aria-labelledby="editTask" aria-describedby="editTask" class="modal-overlay" @click.self="closeModal">
		<div  role="dialog" class="modal">
			<h3 id="dialogTitle" class="modal-title">Edit task</h3>
			<ui-input
				aria-required="true"
				label="Description"
				placeholder="Enter..."
				v-model="data.description"
				class="modal-element"
				tabindex="1"
			/>
			<ui-select
				label="Status"
				placeholder="Select..."
				aria-required="true"
				:defaultValue="data.status"
				:items="['backlog', 'process', 'ready']"
				@change="onChangeSelect"
				class="modal-element"
			/>
			<ui-input
				v-if="isProcess || isReady"
				aria-required="true"
				:aria-hidden="!isProcess || !isReady"
				label="Person"
				placeholder="Enter..."
				v-model="data.user"
				class="modal-element"
			/>
			<ui-datepicker
				v-if="isProcess || isReady"
				aria-required="true"
				:aria-hidden="!isProcess || !isReady"
				v-model="data.createdAt"
				label="Created at"
				placeholder="Choose..."
				class="modal-element"
			/>
			<ui-datepicker
				v-if="isReady"
				aria-required="true"
				v-model="data.finishedAt"
				:aria-hidden="!isReady"
				label="Finished at"
				placeholder="Choose..."
				class="modal-element"
			/>
			
			<ui-button
				@click="submit"
				primary
				class="btn__submit"
				title="Submit"
			/>
			<span role="alert" aria-relevant="all" v-if="error" class="error">Form is incorrect</span>
		</div>
	</div>
</template>

<script lang="ts">
	import Vue from "vue";
	import {ITask, TaskStatus} from '@/lib/types'
	import {CLOSE_EDIT_MODAL, EDIT_TASK} from '@/store/constants'
	
	export default Vue.extend({
		name: "EditModal",
		data (): {data: ITask} {
			return {
				data: Object.assign({}, this.$store.state.editModalData),
				error: false
			}
		},
		computed: {
			isReady () {
				return this.data.status === 'ready'
			},
			isProcess () {
				return this.data.status === 'process'
			}
		},
		methods: {
			submit () {
				// @todo refactor
				if (this.data.description.trim() === '') {
					this.error = true
					return
				}
				
				if (this.isReady || this.isProcess) {
					if (this.data.user === undefined || this.data.user.trim() === '' || this.data.createdAt === undefined) {
						this.error = true
						return
					}
				}
				
				if (this.isReady) {
					if (this.data.finishedAt === undefined) {
						this.error = true
						return
					} else if (this.data.finishedAt <= this.data.createdAt) {
						this.error = true
						return
					}
				}
				
				this.$store.dispatch(EDIT_TASK, this.data)
				this.closeModal()
			},
			onChangeSelect (val: TaskStatus) {
				this.data.status = val
			},
			closeModal () {
				this.$store.dispatch(CLOSE_EDIT_MODAL)
			},
			onKeyDown (evt: KeyboardEvent) {
				if (evt.key === 'Enter') {
					this.submit()
				} else if (evt.key === 'Escape') {
					this.closeModal()
				}
			}
		},
		mounted () {
			document.addEventListener('keydown', this.onKeyDown)
		},
		destroyed () {
			document.removeEventListener('keydown', this.onKeyDown)
		}
	});
</script>

<style scoped lang="scss">
	.modal-overlay {
		top: 0;
		left: 0;
		position: absolute;
		background-color: rgba(0,0,0,.4);
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		z-index: 5;
	}
	.modal {
		border-radius: 10px;
		width: 350px;
		background-color: $color-primary;
		@include spacing(green, left, padding);
		@include spacing(green, right, padding);
		@include spacing(pink, top, padding);
		@include spacing(cyan, bottom, padding);
		display: flex;
		flex-direction: column;
	}
	.modal-title {
		@include text(h3);
		@include spacing(orange, bottom);
	}
	.modal-element {
		@include spacing(yellow, bottom)
	}
	.btn__submit {
		@include spacing(orange, top);
		@include spacing(orange, bottom);
	}
	.error {
		@include text(medium);
		color: $color-red;
	}
</style>
