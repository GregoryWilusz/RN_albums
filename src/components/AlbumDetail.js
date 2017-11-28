import React from 'react';
import {Text} from 'react-native';
import Card from './Card'; //because I want to wrap AlbumList within Card component
import CardSection from './CardSection';

const AlbumList = (props) => {

    return (
    <Card>
        <CardSection>
            <Text>{props.album.title}</Text>
        </CardSection>
    </Card>
    );
};

export default AlbumList;