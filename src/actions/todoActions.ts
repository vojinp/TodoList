import TodoService from "../services/TodoService";
import Todo from "../models/Todo";

export enum TodoActionsTypes {
    FETCH_TODO = 'FETCH_TODO',
    POST_TODO = 'POST_TODO'
}

export const fetchTodo = () => ({
    type: TodoActionsTypes.FETCH_TODO,
    payload: TodoService.fetchTodo(),
});

export const postTodo = (data: Todo) => ({
    type: TodoActionsTypes.POST_TODO,
    payload: TodoService.postTodo(data),
});


export type FetchTodoAction = typeof fetchTodo;
export type TodoAction = FetchTodoAction;