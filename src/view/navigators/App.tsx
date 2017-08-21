import * as React from 'react'
import {LayoutAnimation, StyleSheet, TouchableOpacity} from 'react-native'
import { connect, Dispatch } from 'react-redux'
import * as meDuck from '../../core/modules/me'
import * as AppDuck from '../../core/modules/container/App'
import {
  View,
  Text
} from 'react-native'
import { bindActionCreators } from 'redux'

type IProps = {
  me: ServerEntity.IMe
  container: ReduxState.IApp,
  loadMe: typeof meDuck.load,
  changeHello: typeof AppDuck.changeHello
}

type IOwnProps = {}

type IState = {}

const mapStateToProps = (rootState: ReduxState.IRootState, ownProps: IOwnProps) => ({
  me: rootState.me,
  container: rootState.container.App
})

const mapDispatchToProps =
  (dispatch: Dispatch<any>) => bindActionCreators({
    loadMe: meDuck.load,
    changeHello: AppDuck.changeHello
  }, dispatch)

class App extends React.PureComponent<IProps, IState> {
  componentDidMount () {
    this.props.loadMe(null) // fixme need to put null
  }

  changeHello = () => {
    this.props.changeHello({word: new Date() + ''})
  }

  render () {
    const { container, me } = this.props;
    console.log('container', container)
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.changeHello}>
          <Text> Adviser Ids </Text>
          <View>{me && me.advisers && me.advisers.map(a => <Text key={a}>{a}</Text>)}</View>
          <Text>click me?</Text>
          <Text>{container.word}</Text>
        </TouchableOpacity>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
