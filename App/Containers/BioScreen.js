import React from 'react'
import { ScrollView, View, Text, Image } from 'react-native'
import { connect } from 'react-redux'
import Actions from '../Actions/Creators'
import { Actions as NavigationActions } from 'react-native-router-flux'
import axios from 'axios';

// Styles
import styles from './Styles/BioScreenStyle'

class BioScreen extends React.Component {

  constructor (props) {
    super(props)
    this.state = { bioItems: [] }
  }

  componentWillMount() {
    axios.get('http://dartmouthbot.herokuapp.com/api/bios')
    .then(response => {
      this.setState({bioItems: response.data });
    }).catch(error => {
      console.log(error);
    });
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.intro}>Meet some of our wonderful tour guides!</Text>
         {this.state.bioItems.map((result) => {
           return (
             <View style={styles.itemContainer} key={result.id}>
              <Text style={styles.name}>{result.name} - {result.year}</Text>
              <Text style={styles.major}>Major: {result.major}</Text>
              <Text style={styles.content}>{result.content}</Text>
             </View>
           );
         })}
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

export default connect(mapStateToProps, mapDispatchToProps)(BioScreen)
