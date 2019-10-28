import typeToReducer from 'type-to-reducer';
import TodoState from "../types/TodoState";
import {TodoAction, TodoActionsTypes} from "../actions/todoActions";
import Todo from '../models/Todo';

export const todoReducer = typeToReducer({
    [TodoActionsTypes.FETCH_TODO]: {
        PENDING: (state: TodoState, action: ReturnType<TodoAction>): TodoState => ({
            isFulfilled: false,
            loading: true,
            todos: undefined,
            isRejected: false
        }),
        REJECTED: (state: TodoState, action: ReturnType<TodoAction>): TodoState => ({
            todos: undefined,
            loading: false,
            isFulfilled: false,
            isRejected: true,
        }),
        FULFILLED: (state: TodoState, action: ReturnType<TodoAction>): TodoState => ({
            todos: action.payload,
            loading: false,
            isFulfilled: true,
            isRejected: false,
        }),
    
    },
    [TodoActionsTypes.POST_TODO]: {
        PENDING: (state: TodoState, action: ReturnType<TodoAction>): TodoState => ({
            isFulfilled: false,
            loading: true,
            todos: state.todos,
            isRejected: false
        }),
        REJECTED: (state: TodoState, action: ReturnType<TodoAction>): TodoState => ({
            todos: state.todos,
            loading: false,
            isFulfilled: false,
            isRejected: true,
        }),
        FULFILLED: (state: TodoState, action: any): TodoState => ({
            todos: [
                ...state.todos as Todo[],
                action.payload
            ],
            loading: false,
            isFulfilled: true,
            isRejected: false,
        }),
    }
}, {counterValue: 0});