export class Todo {
    constructor(userId, id, title, completed) {
        this.userId = userId;
        this.id = id;
        this.title = title;
        this.completed = completed;
    }

    toggle() {
        this.completed = !this.completed;
    }

    static create(title) {
        return new Todo(1, new Date().getMilliseconds(), title, false);
    }
}
