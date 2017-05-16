import React, { Component } from 'react';
import {
  StyleSheet,
  ListView,
  TouchableOpacity,
} from 'react-native';

import ArtistBox from './ArtistBox';
import { Actions } from 'react-native-router-flux';

export default class ArtistList extends Component {
  
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => {
      r1 !== r2
    }})
    this.state = {
      dataSource: ds
    }
  }

  componentDidMount() {
    this.updateDataSource(this.props.artists)
  }

  componentWillReceiveProps(newProps) {
    if (newProps.artists !== this.props.artists) {
      // console.warn('cambió la lista'); esto se ejecuta al cambiar las props
      this.updateDataSource(newProps.artists)   
    }
  }

  updateDataSource = data => {
    this.setState({
        dataSource: this.state.dataSource.cloneWithRows(data)
      })
  }

  handlePress(artist) { 
     {/* console.warn('artist', artist); si no se añade el arrow function se ejecutará al hacer render de la vista en lugar de al ser presionada*/}
    Actions.artistDetail({ artist });
}

  render() {
    return (
      <ListView 
        enableEmptySections= { true }// cambios en la api de react-native mejor añadirla
        dataSource={this.state.dataSource}
        renderRow={(artist) => {
          return(
            <TouchableOpacity 
              onPress={()=> this.handlePress(artist)}> 
              <ArtistBox artist={artist} />
            </TouchableOpacity>
          )
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop: 50,
  },
});