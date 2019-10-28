import * as React from 'react';
import {Provider} from "react-redux";

import store from "./config/store";
import AppNavigator from './navigation/AppNavigator';

export default class App extends React.Component<{}> {
    render() {
        return (
            <Provider store={store}>
                <AppNavigator />
            </Provider>
        );
    }
}