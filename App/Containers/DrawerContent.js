import React, { Component } from 'react'
import { ScrollView, Image, Text } from 'react-native'
import styles from './Styles/DrawerContentStyle'
import DrawerButton from '../Components/DrawerButton'
import { Actions as NavigationActions } from 'react-native-router-flux'

class DrawerContent extends Component {

  toggleDrawer () {
    this.context.drawer.toggle()
  }

  handlePressBios = () => {
    this.toggleDrawer()
    NavigationActions.bioScreen()
  }

  handlePressBot = () => {
    this.toggleDrawer()
    NavigationActions.botScreen()
  }

  handlePressAdmin = () => {
    this.toggleDrawer()
    NavigationActions.adminScreen()
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.logo}>DartBot</Text>
        <DrawerButton style={styles.text} text='Bios' onPress={this.handlePressBios} />
        <DrawerButton style={styles.text} text='Bot' onPress={this.handlePressBot} />
        <DrawerButton style={styles.text} text='Admin' onPress={this.handlePressAdmin} />
      </ScrollView>
    )
  }

}

DrawerContent.contextTypes = {
  drawer: React.PropTypes.object
}

export default DrawerContent
