export type TaskStatus = 'backlog' | 'process' | 'ready'

export interface IBackLogTask {
	status: 'backlog'
	id: number
	description: string
}

export interface IProcessTask {
	id: number
	status: 'process'
	description: string
	user: string
	createdAt: number
}

export interface IReadyTask {
	id: number
	status: 'ready'
	description: string
	user: string
	createdAt: number
	finishedAt: number
}
export type ITask = IBackLogTask | IProcessTask | IReadyTask
//
// export interface ITask {
// 	id: number
// 	status: TaskStatus
// 	description: string
// 	// user name who do / did a task
// 	user: string
// 	// timestamp in ms when task started
// 	createdAt: number
// 	// timestamp in ms when task finished
// 	finishedAt: number
// }

