import React from 'react';
import {Text} from 'react-native';
import Card from './Card'; //because I want to wrap AlbumList within Card component

const AlbumList = (props) => {

    return (
    <Card>
        <Text>{props.album.title}</Text>
    </Card>
    );
};

export default AlbumList;