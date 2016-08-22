import React from 'react'
import { WebView } from 'react-native';
import { ScrollView, Text, Dimensions } from 'react-native'
import { connect } from 'react-redux'
import Actions from '../Actions/Creators'
import { Actions as NavigationActions } from 'react-native-router-flux'

// Styles
import styles from './Styles/BotScreenStyle'

class BotScreen extends React.Component {

  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

  render () {
    return (
      <WebView
        source={{uri: 'https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fdartbot&tabs=messages&width=300&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1780533645501545'}}
        style={{ marginTop: 75, marginLeft: 40, height: Dimensions.get('window').height, width: Dimensions.get('window').width  }}
      />
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

export default connect(mapStateToProps, mapDispatchToProps)(BotScreen)
