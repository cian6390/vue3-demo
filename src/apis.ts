
import { Todo } from './components/MyTodo/types'

function sleep(ms: number = 1000) {
    return new Promise(resolve => {
        setTimeout(() => resolve(true), ms)
    })
}

let todos: Todo[] = [
    {
        id: '1',
        content: '買牙刷'
    }, {
        id: '2',
        content: '買衛生紙'
    }, {
        id: '3',
        content: '買洗面乳'
    }
]

export default {

    async queryTodos(q: string): Promise<Todo[]> {
        await sleep(900)

        if (!q) {
            return todos
        }

        return todos.filter(todo => todo.content.includes(q))
    },

    async saveTodo(todo: Todo) {
        await sleep(600)
        todos.push(todo)
        return true
    },

    async removeTodo(todo: Todo) {
        await sleep(600)
        todos = todos.filter(td => td.id !== todo.id)
        return true
    },

    async updateTodo(todo: Todo): Promise<Todo> {
        const target = todos.find(td => td.id === todo.id)
        if (target) {
            target.content = todo.content
        }
        return target
    }
}