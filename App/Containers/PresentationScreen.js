import React, {PropTypes} from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { Images } from '../Themes'
import { connect } from 'react-redux'
import RoundedButton from '../Components/RoundedButton'
import { Actions as NavigationActions } from 'react-native-router-flux'
import { MapView } from 'react-native';

// Styles
import styles from './Styles/PresentationScreenStyle'

class PresentationScreen extends React.Component {

  static propTypes = {
  }

  constructor (props) {
    super(props)
    this.state = {
      initialPosition: { latitude: 0, longitude: 0 }
    }
    this.markers = [
      {
        latitude: 43.70547,
        longitude: -72.28880,
        title: 'Baker Berry Library',
        subtitle: 'Lorem Ipsum'
      },
      {
        latitude: 43.70639,
        longitude: -72.29202,
        title: 'President\'s Lawn',
        subtitle: 'Lorem Ipsum'
      },
      {
        latitude: 43.70339,
        longitude: -72.28854,
        title: 'The Green',
        subtitle: 'Lorem Ipsum'
      }
    ];
  }

  // before startup, get the user's initial position and set it to state
  componentWillMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        var userInitialPosition = JSON.stringify(position);
        this.setState({initialPosition: {latitude: position.coords.latitude, longitude: position.coords.longitude}});
      });
  }

  render () {
    return (
      <MapView
        style={styles.mainContainer}
        showsUserLocation={true}
        annotations={this.markers}
        region={{ latitude:this.state.initialPosition.latitude,
                  longitude:this.state.initialPosition.longitude,
                  latitudeDelta:0.0152,
                  longitudeDelta:0.0121
                }}
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

export default connect(mapStateToProps, mapDispatchToProps)(PresentationScreen)
