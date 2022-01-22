const taskManager = {
    data() {
        return {
            tasks: [],
            newTask: {
                active: true
            }
        }
    },
    methods: {
        addTask: function () {
            if (this.newTask.name) {
                this.tasks.push(this.newTask);
                this.newTask = {
                    active: true
                };

                localStorage.setItem("tasks", JSON.stringify(this.tasks));
            } else {
                alert("A tarefa deve ter um nome");
            }
        },
        clearAll: function () {
            this.tasks = [];
        }
    },
    created() {
        this.tasks = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : this.tasks;
    },
    updated() {
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
    }
};

Vue.createApp(taskManager).mount('#app');