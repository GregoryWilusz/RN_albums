import React from 'react';
import {Text, View} from 'react-native';

const AlbumList = (props) => {

    return (
    <View>
        <Text>{props.album.title}</Text>
    </View>
    );
};

export default AlbumList;