import * as React from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native'

import createStore from './core/create'
import { Provider } from 'react-redux'
import App from './view/navigators/App'

export const store = createStore();

(console as any).disableYellowBox = true // any is a hack

export default class OneViewMobile extends React.Component {
  render () {
    return (
      <Provider store={store} key='provider'>
        <App />
      </Provider>
    )
  }
}

/* leave for example
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
*/

AppRegistry.registerComponent('OneViewMobile', () => OneViewMobile)
