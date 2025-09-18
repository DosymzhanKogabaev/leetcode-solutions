type Task = {
    userId: number,
    taskId: number,
    priority: number
}
class TaskManager {
    tasks: Task[];
    constructor(tasks: number[][]) {
        this.tasks = [];
        for(let i = 0; i < tasks.length; i++) {
            this.tasks.push({
                userId: tasks[i][0],
                taskId: tasks[i][1],
                priority: tasks[i][2]
            });
        }
    }

    add(userId: number, taskId: number, priority: number): void {
        this.tasks.push({
            userId: userId,
            taskId: taskId,
            priority: priority
        });
    }

    edit(taskId: number, newPriority: number): void {
        for(let i = 0; i < this.tasks.length; i++) {
            if(this.tasks[i].taskId === taskId) {
                this.tasks[i].priority = newPriority;
            }
        }
    }

    rmv(taskId: number): void {
        for(let i = 0; i < this.tasks.length; i++) {
            if(this.tasks[i].taskId === taskId) {
                this.tasks.splice(i, 1);
            }
        }
    }

    execTop(): number {
        if(this.tasks.length === 0) return -1;
        this.tasks.sort((a, b) => {
            if(a.priority === b.priority) {
                return b.taskId - a.taskId;
            }
            return b.priority - a.priority;
        });
        let userId = this.tasks[0].userId;
        this.rmv(this.tasks[0].taskId);
        return userId;
    }
}

var tasks = [[1, 101, 10], [2, 102, 20], [3, 103, 15]];
var obj = new TaskManager(tasks);
console.log(obj.tasks);
console.log(obj.add(4, 104, 5));
console.log(obj.edit(102, 8));
console.log(obj.execTop());
console.log(obj.rmv(101))
console.log(obj.add(5, 105, 15));
console.log(obj.execTop());

// This gives TLE 658/663 so we need to use a heap