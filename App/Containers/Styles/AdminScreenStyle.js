import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Metrics.navBarHeight,
    backgroundColor: '#00693E'
  },
  bigIntro: {
    padding: 30,
    fontSize: 30,
    color: 'white'
  },
  para: {
    paddingTop: 10,
    marginLeft: 20,
    marginRight: 20,
    fontSize: 15,
    color: 'white'
  }
})
