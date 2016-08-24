import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Metrics.navBarHeight,
    backgroundColor: '#00693E'
  },
  intro: {
    fontFamily: 'Chalkduster',
    fontSize: 20,
    color: 'white',
    paddingTop: 20,
    marginLeft: 10,
    marginRight: 8
  },
  nameAndImage: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  image: {
    height: 75,
    width: 75
  },
  itemContainer: {
    marginTop: 20,
    marginLeft: 14,
    marginRight: 14,
    padding: 10,
    paddingLeft: 14,
    paddingRight: 14,
    backgroundColor: 'white',
  },
  name: {
    color: 'black',
    fontSize: 20,
    paddingBottom: 10
  },
  major: {
    color: 'black',
    paddingBottom: 8
  },
  content: {
    color: 'black'
  }
})
