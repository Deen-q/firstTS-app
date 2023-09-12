import { v4 as uuidV4 } from "uuid"
console.log(uuidV4()) // Works ✅

type Task = {
    id: string
    title: string
}

// 1) make a reference to HTML elements
const taskName = document.querySelector("#new-task-title") as HTMLInputElement
const form = document.getElementById("new-task-form") as HTMLFormElement
const list = document.querySelector('#list') as HTMLUListElement

// const storedTasks: Task[] = []

