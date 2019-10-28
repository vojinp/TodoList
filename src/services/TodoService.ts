import axios, {AxiosResponse} from 'axios';
import Todo from "../models/Todo";

class TodoService {
    public static fetchTodo(): Promise<Todo[]> {
        return axios
            .get(`https://jsonplaceholder.typicode.com/todos`)
            .then((res: AxiosResponse) => {
                let newData: Todo[];
                newData = res.data.slice(0, 6) as Todo[]
                return newData
            })
    }

    public static postTodo(data: Todo): Promise<Todo> {
        return axios.post(`https://jsonplaceholder.typicode.com/todos`, data)
            .then(function (response) {
                return response.data as Todo
            });
    }

}

export default TodoService;