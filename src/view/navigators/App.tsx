import * as React from 'react'
import { StyleSheet } from 'react-native'
import { connect, MapStateToProps, MapDispatchToProps, Dispatch } from 'react-redux'
import * as meDuck from '../../core/modules/me'
import {
  View,
  Text
} from 'react-native'
import { bindActionCreators } from 'redux'

type IProps = {
  me: IMe
  loadMe: typeof meDuck.load
}

type IOwnProps = {}

type IState = {}

const mapStateToProps = (rootState: any, ownProps: IOwnProps) => ({
  me: rootState.me
})

const mapDispatchToProps =
  (dispatch: Dispatch<any>) => bindActionCreators({
    loadMe: meDuck.load
  }, dispatch)

class App extends React.PureComponent<IProps, IState> {
  componentDidMount () {
    this.props.loadMe(null) // fixme need to put null
  }

  render () {
    return (<View style={styles.container}>
      <Text>hello 123?</Text>
    </View>)
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
