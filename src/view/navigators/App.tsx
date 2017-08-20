import * as React from 'react'
import { StyleSheet } from 'react-native'
import { connect, MapStateToProps, MapDispatchToProps, Dispatch } from 'react-redux'
import * as users from '../../core/modules/entities/users'
import {
  View,
  Text
} from 'react-native'
import { bindActionCreators } from 'redux'

import createStore from '../../core/create'

type IProps = {
  user: IUser
  getUser: typeof users.get
}

type IOwnProps = {}

type IState = {}

const mapStateToProps = (rootState: any, ownProps: IOwnProps) => {
  console.log(rootState)
  return ({ user: rootState.users })
}

const mapDispatchToProps =
  (dispatch: Dispatch<any>) => bindActionCreators({
    getUser: users.get
  }, dispatch)


class App extends React.Component<IProps, IState> {

  componentDidMount() {
    this.props.getUser(null)
  }

  render () {
    return (<View style={styles.container}>
      <Text>hello {this.props.user.partyName}</Text>
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
