Vue.component('like-button', {
    props: ['counter'],
    template: `<div><button type="button" @click="increment">&#9829; {{ counter }}</button></div>`,
    methods: {
        increment() {
            this.$emit('update:counter', this.counter + 1);
        },
        alert(msg) {
            alert(msg)
        },
    },
})

Vue.component('task-list', {
    props: ['tasks'],
    template:
        `<div class="list">
      {{ title }}
      <div class="item" :class="{done: task.done}" v-for="task in tasks" :key="task.text">
        <input type="checkbox" v-model="task.done">
        {{ task.text }}
        <like-button :counter.sync='task.likes'></like-button>
      </div>
    </div>`,
})

let app = new Vue({
    el: '#app',
    data: {
        headerLikes: 3,
        formLikes: 5,
        message: 'Add something new?',
        tasks: [
            {text: 'Learn JavaScript', done: true, likes: 3},
            {text: 'Learn Vue', done: false, likes: 5},
            {text: 'Make something cool', done: false, likes: 0},
        ],
    },
    methods: {

        addTask() {
            this.tasks.push({text: this.message, done: false, likes: 0});
            this.message = '';
        },

    },
    computed: {
        count() {
            return this.tasks.filter(task => !task.done).length
        },
        completedTasks() {
            return this.tasks.filter(task => task.done)
        },
        unCompletedTasks() {
            return this.tasks.filter(task => !task.done)
        },
        countLikes() {
            return this.headerLikes + this.formLikes + this.tasks.reduce((value, task) => value + task.likes, 0)
        }
    }
})
