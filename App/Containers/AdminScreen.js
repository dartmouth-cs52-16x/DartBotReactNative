import React from 'react'
import { ScrollView, Text } from 'react-native'
import { connect } from 'react-redux'
import Actions from '../Actions/Creators'
import { Actions as NavigationActions } from 'react-native-router-flux'

// Styles
import styles from './Styles/AdminScreenStyle'

class AdminScreen extends React.Component {

  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

  /*
  <ScrollView style={styles.container}>
    <Text>AdminScreen Container</Text>
  </ScrollView>
  */

  render () {
    return (
      <ScrollView style={styles.container}>
        <Text>AdminScreen Container</Text>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminScreen)
