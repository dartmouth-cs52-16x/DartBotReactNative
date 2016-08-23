import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'
import Styles from './Styles/NavigationContainerStyle'
import NavigationDrawer from './NavigationDrawer'
import NavItems from './NavItems'

// screens identified by the router
import PresentationScreen from '../Containers/PresentationScreen'
import BioScreen from '../Containers/BioScreen'
import BotScreen from '../Containers/BotScreen'
import AdminScreen from '../Containers/AdminScreen'

/* **************************
* Documentation: https://github.com/aksonov/react-native-router-flux
***************************/

class NavigationRouter extends Component {
  render () {
    return (
      <Router>
        <Scene key='drawer' component={NavigationDrawer}>
          <Scene key='drawerChildrenWrapper' navigationBarStyle={Styles.navBar} titleStyle={Styles.title} leftButtonIconStyle={Styles.leftButton} rightButtonTextStyle={Styles.rightButton}>
            <Scene initial key='presentationScreen' component={PresentationScreen} title='DartBot' renderLeftButton={NavItems.hamburgerButton} />
            <Scene key='bioScreen' component={BioScreen} title='Bios' />
            <Scene key='botScreen' component={BotScreen} title='Bot' />
            <Scene key='adminScreen' component={AdminScreen} title='About' />
          </Scene>
        </Scene>
      </Router>
    )
  }
}

export default NavigationRouter
