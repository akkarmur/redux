/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @ajeet
 * @tiger strict-local
 */

import React from 'react';
import { View } from 'react-native';
import{ Provider } from 'react-redux';
import Counter from './src/Counter'
import { store } from './src/store/store'
class App extends React.Component {



  render() {
    return (
      <Provider store={store}>
        <Counter />
      </Provider>
    )
}
}

export default App;
