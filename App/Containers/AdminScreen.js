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
        <Text style={styles.bigIntro}>
          Looking to learn more about Dartmouth College? Welcome to <Text style={styles.name}>DartBot</Text>.
        </Text>
        <Text style={styles.para}>
          DartBot, the virtual tour guide, is a revolutionary new way to tour a school. Send your location on campus to DartBot and DartBot
          will tell you about the closest landmark on the Dartmouth College tour. Wander around Dartmouth and enjoy the freedom
          of a DartBot tour!
        </Text>
        <Text style={styles.para}>
          Have a question about Dartmouth? DartBot can help! Ask DartBot a question and it will send you back a college-approved response.
          The ultra intelligent DartBot will be able to recognize your questions and help you out!
          Just went on a tour? Planning to go on a tour? Just want to learn more about some of Dartmouths incredible tour guides? Click
          around this website to learn more!
        </Text>
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
