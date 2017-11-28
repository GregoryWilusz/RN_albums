// import the library to help create a component
import React from 'react';
import {AppRegistry, View} from 'react-native';
import Header from './src/components/Header'
import AlbumList from './src/components/AlbumList'

// create a component
const App = () => {
    return (
        <View>
            <Header headerText={'Albums'}/>
            <AlbumList/>
        </View>
    );
};

// render it to the devide
AppRegistry.registerComponent('albums', () => App);