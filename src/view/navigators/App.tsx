import * as React from 'react'
import {
  View,
  Text
} from 'react-native'

interface IProps {
  test?: boolean;
}

interface IState {
  testState: boolean;
}

class App extends React.PureComponent<IProps, IState> {
  render () {
    return (<View style={{margin: 100}}>
      <Text>hello?</Text>
    </View>)
  }
}

export default App
