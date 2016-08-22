import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  logo: {
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain'
  },
  logoText: {
    paddingTop: 30,
    fontSize: 80,
    alignItems: 'center',
  },
  logoSubText: {
    fontSize: 20,
    fontStyle: 'italic',
    alignItems: 'center',
    paddingTop: 15,
  },
  centered: {
    alignItems: 'center'
  }
})
