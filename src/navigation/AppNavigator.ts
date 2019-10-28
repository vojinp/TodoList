import {createStackNavigator, createAppContainer} from 'react-navigation';

import TodoListScreen from '../screens/TodoListScreen';
import NewTodoScreen from '../screens/NewTodoScreen';



export default createAppContainer(createStackNavigator({
	Todos: {
		screen: TodoListScreen,
		navigationOptions: () => ({
			headerTintColor: 'white',
			title: 'Todos',
			headerStyle: {
				backgroundColor: 'rgba(254,75,55,1)',
			},
			
		}),
		
	},
	NewTodo: {
		screen: NewTodoScreen,
		navigationOptions: () => ({
			headerTintColor: 'white',
			title: 'New Todo',
			headerStyle: {
				backgroundColor: 'rgba(254,75,55,1)',
			},
	  }),
	},
	
}))