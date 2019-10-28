import Todo from "../models/Todo";

export default interface TodoState {
    todos?: Todo[] | Promise<Todo[]>;
    loading: boolean;
    isFulfilled: boolean;
    isRejected: boolean;
}