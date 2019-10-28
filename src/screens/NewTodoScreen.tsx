import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import { Button } from 'react-native-material-ui';
import {connect} from "react-redux";
import {bindActionCreators, Dispatch} from "redux";
import { scale, verticalScale } from 'react-native-size-matters';

import {postTodo} from "../actions/todoActions";
import StoreState from "../types/StoreState";
import Todo from '../models/Todo';

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: verticalScale(10)
    },
    item: {
        margin: scale(20)
    },
  })


interface Props {
    navigation
}

class NewTodoScreen extends React.Component<Props> {

    state = {
        todoText: ''
    }

    componentDidMount() {
    }

    addNewTodo = () => {
        const { postTodo, navigation } = this.props

        const newTodo = {
            userId: 1,
            title: this.state.todoText,
            completed: false
        } as Todo

        postTodo(newTodo)
        navigation.navigate('Todos')
    }

    render() {
        const { todoText } = this.state
        return (
            <View style={styles.container}>
                <View style={styles.item}>
                    <TextField 
                        value={todoText}
                        label='New Todo'
                        onChangeText={ (todoText) => this.setState({ todoText }) }
                    />
                </View>
                <View style={styles.item}>
                    <Button 
                        raised
                        accent 
                        text="SUBMIT"
                        onPress={this.addNewTodo}
                    />
                </View>
                
            </View>
        );
    }
}

const mapState = (state: StoreState) => ({
});

const mapDispatch = (dispatch: Dispatch) => bindActionCreators({
        postTodo
    },
    dispatch
);

export default connect(mapState, mapDispatch)(NewTodoScreen)