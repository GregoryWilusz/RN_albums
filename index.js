// import the library to help create a component
import React from 'react';
import {AppRegistry, View} from 'react-native';
import Header from './src/components/Header'
import AlbumList from './src/components/AlbumList'

// create a component
// whenever we use ScrollView we need to add a style property of flex:1 to a root element!!!
// It says, please expand this component to fill the entire content area of the device
const App = () => {
    return (
        <View style={ { flex:1 } }>
            <Header headerText={'Albums'}/>
            <AlbumList/>
        </View>
    );
};

// render it to the devide
AppRegistry.registerComponent('albums', () => App);