import * as React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import { ActionButton } from 'react-native-material-ui';
import {connect} from "react-redux";
import {bindActionCreators, Dispatch} from "redux";
import { ScaledSheet  } from 'react-native-size-matters';

import { fetchTodo } from '../actions/todoActions';
import Todo from "../models/Todo";
import StoreState from "../types/StoreState";

const styles = ScaledSheet .create({
    container: {
     flex: 1,
     paddingTop: '10@s'
    },
    item: {
        flexDirection: 'row', 
        alignSelf: 'flex-start',
        padding: '15@s'
    },
    image: {
        width: '60@s',
        height: '60@s',
        borderRadius: '30@s'
    },
    text: {
        padding: '10@s',
        marginRight: '10@s',
        fontSize: 18,
        paddingLeft: '20@s'
      },
  })

interface Props {
    navigation
}

class TodoListScreen extends React.Component<Props> {
    
    componentDidMount() {
        this.props.fetchTodo();
    }

    search = () => {
        
    }

    render() {
        const { navigation, todos } = this.props
        
        return (
            <View style={styles.container} > 
                { todos &&
                <View>
                    {todos.forEach(item => item.key = item.id + '')}
                    <FlatList
                        data={todos}
                        renderItem={({item}) => (
                            <View>
                                <View
                                    style={styles.item}
                                    >
                                    <Image 
                                        style={styles.image}
                                        source={require('../../assets/images/avatar.png')}
                                    />
                                    
                                    <Text style={styles.text}>{item.title}</Text>
                                    
                                </View>
                                <View
                                    style={{
                                        borderBottomColor: 'lightgray',
                                        borderBottomWidth: 2,
                                    }}
                                />
                            </View>
                        )}
                    />
                    <View>
                        <ActionButton 
                            onPress={() => navigation.navigate('NewTodo')}
                        /> 
                    </View>
                </View>}
                
            </View>
        );
    }
}

const mapState = (state: StoreState) => ({
    todos: state.todos.todos as Todo[],
});

const mapDispatch = (dispatch: Dispatch) => bindActionCreators({
        fetchTodo
    },
    dispatch
);

export default connect(mapState, mapDispatch)(TodoListScreen)