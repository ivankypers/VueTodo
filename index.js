let app = new Vue({
    el: '#app',
    data: {
        message: 'Add something new?',
        tasks: [
            {text: 'Learn JavaScript', done: true},
            {text: 'Learn Vue', done: false},
            {text: 'Make something cool', done: false},
        ],
    },
    methods: {
        addTask() {
            this.tasks.push({text: this.message, done: false});
            this.message = '';
        },
        count() {
            return this.tasks.filter(task => !task.done).length
        }
    }
})
