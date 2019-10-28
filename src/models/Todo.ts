interface Todo {
    userId: number;
    id?: number;
    title: string;
    completed: boolean;
    key? : string;
}

export default Todo;