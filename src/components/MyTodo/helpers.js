
export const STORAGE_KEY = "todos-vuejs-2.0";

export const todoStorage = {
    fetch: function () {
        console.log(localStorage.getItem(STORAGE_KEY))
        var todos = localStorage.getItem(STORAGE_KEY)
        if (!todos || todos === 'undefined') {
            todos = '[]'
        }
        todos = JSON.parse(todos);
        todos.forEach(function (todo, index) {
            todo.id = index;
        });
        todoStorage.uid = todos.length;
        return todos;
    },
    save: function (todos) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    },
};

export const filters = {
    all: function (todos) {
        return todos;
    },
    active: function (todos) {
        return todos.filter(function (todo) {
            return !todo.completed;
        });
    },
    completed: function (todos) {
        return todos.filter(function (todo) {
            return todo.completed;
        });
    },
};
