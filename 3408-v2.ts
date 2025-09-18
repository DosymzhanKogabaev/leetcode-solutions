export type Task = {
    userId: number,
    taskId: number,
    priority: number
}

class MaxHeapClass {
    heap: Task[];

    constructor() {
        this.heap = [];
    }

    private parent(i: number) { return Math.floor((i - 1) / 2); }
    private left(i: number) { return 2 * i + 1; }
    private right(i: number) { return 2 * i + 2; }

    private compare(a: Task, b: Task): boolean {
        if (a.priority === b.priority) return a.taskId > b.taskId;
        return a.priority > b.priority;
    }

    push(val: Task) {
        this.heap.push(val);
        this.bubbleUp(this.heap.length - 1);
    }

    pop(): Task | null {
        if (this.heap.length === 0) return null;
        const max = this.heap[0];
        const end = this.heap.pop()!;
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.bubbleDown(0);
        }
        return max;
    }

    private bubbleUp(i: number) {
        while (i > 0 && this.compare(this.heap[i], this.heap[this.parent(i)])) {
            [this.heap[i], this.heap[this.parent(i)]] = [this.heap[this.parent(i)], this.heap[i]];
            i = this.parent(i);
        }
    }

    private bubbleDown(i: number) {
        while (true) {
            let largest = i;
            const left = this.left(i);
            const right = this.right(i);

            if (left < this.heap.length && this.compare(this.heap[left], this.heap[largest])) largest = left;
            if (right < this.heap.length && this.compare(this.heap[right], this.heap[largest])) largest = right;

            if (largest === i) break;
            [this.heap[i], this.heap[largest]] = [this.heap[largest], this.heap[i]];
            i = largest;
        }
    }
}

class TaskManager {
    heap: MaxHeapClass;
    map: Map<number, Task>; // taskId -> latest Task object

    constructor(tasks: number[][]) {
        this.heap = new MaxHeapClass();
        this.map = new Map();

        for (let t of tasks) {
            // создаём свежий объект и кладём и в map, и в heap
            const task: Task = { userId: t[0], taskId: t[1], priority: t[2] };
            this.map.set(task.taskId, task);
            this.heap.push(task);
        }
    }

    add(userId: number, taskId: number, priority: number): void {
        const task: Task = { userId, taskId, priority };
        this.map.set(taskId, task);
        this.heap.push(task);
    }

    edit(taskId: number, newPriority: number): void {
        const old = this.map.get(taskId);
        if (!old) return; // гарантии входа говорят, что taskId существует, но на всякий случай
        // не мутируем old, создаём новый объект
        const updated: Task = { userId: old.userId, taskId: old.taskId, priority: newPriority };
        this.map.set(taskId, updated);
        this.heap.push(updated); // пушим новую версию, старая останется в куче как "мусор"
    }

    rmv(taskId: number): void {
        this.map.delete(taskId); // ленивое удаление — старые записи в куче будут игнорированы
    }

    execTop(): number {
        while (this.heap.heap.length > 0) {
            const task = this.heap.pop()!;
            const cur = this.map.get(task.taskId);
            // если в map есть задача и приоритет совпадает с извлечённой записью,
            // значит это актуальная запись — выполняем
            if (cur && cur.priority === task.priority) {
                this.map.delete(task.taskId);
                return task.userId;
            }
            // иначе старый/устаревший элемент — пропускаем
        }
        return -1;
    }
}
