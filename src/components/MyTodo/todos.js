/* eslint-disable */
import { todoStorage, filters } from "./helpers";

import {
    ref,
    reactive,
    watch,
    computed,
    toRefs,
} from "vue";

export function useTodo() {

    const state = reactive({
        todos: todoStorage.fetch(),
    });

    const { todos } = toRefs(state);
    const newTodo = ref("");
    const editedTodo = ref(null);
    const visibility = ref("all");
    const beforeEditCache = ref("");

    const filteredTodos = computed(() => {
        return filters[visibility.value](todos.value);
    });
    const remaining = computed(() => {
        return filters.active(todos.value).length;
    });
    const allDone = computed({
        get: function () {
            return remaining.value === 0;
        },
        set: function (value) {
            todos.value.forEach(function (todo) {
                completed.value = value;
            });
        },
    });

    watch(
        todos,
        (todos) => {
            todoStorage.save(todos.value);
        },
        { deep: true }
    );

    function pluralize(n) {
        return n === 1 ? "item" : "items";
    }

    function addTodo() {
        var value = newTodo.value && newTodo.value.trim();
        if (!value) {
            return;
        }
        todos.value.push({
            id: todoStorage.uid++,
            title: value,
            completed: false,
        });
        newTodo.value = "";
    }

    function removeTodo(todo) {
        todos.value.splice(todos.value.indexOf(todo), 1);
    }

    function editTodo(todo) {
        beforeEditCache = todo.title;
        editedTodo.value = todo;
    }

    function doneEdit(todo) {
        if (!editedTodo.value) {
            return;
        }
        editedTodo.value = null;
        todo.title = todo.title.trim();
        if (!todo.title) {
            removeTodo(todo);
        }
    }

    function cancelEdit(todo) {
        editedTodo.value = null;
        todo.title = beforeEditCache.value;
    }

    function removeCompleted() {
        todos.value = filters.active(todos.value);
    }

    function setVisibility(v) {
        visibility.value = v;
    }

    return {
        // state
        todos,
        newTodo,
        editedTodo,
        visibility,
        beforeEditCache,
        // computed
        filteredTodos,
        remaining,
        allDone,
        // methods
        pluralize,
        addTodo,
        removeTodo,
        editTodo,
        doneEdit,
        cancelEdit,
        removeCompleted,
        setVisibility,
    };
}