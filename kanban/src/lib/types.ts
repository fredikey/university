export type TaskStatus = 'backlog' | 'process' | 'ready'

export interface ITask {
	id: number
	status: TaskStatus
	description: string
	// user name who do / did a task
	user: string
	// timestamp in ms when task started
	createdAt: number
	// timestamp in ms when task finished
	finishedAt: number
}

