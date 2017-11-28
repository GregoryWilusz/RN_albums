import React from 'react';
import {Text, View, Image, Linking} from 'react-native';
import Card from './Card'; //because I want to wrap AlbumList within Card component
import CardSection from './CardSection';
import Button from './Button';
// Because we used props more than once, it's a good practise to destructure props (property) out of our arguments of props, e.g. {album}.
// On top of that we are referencing the album object 3 times as well so we can also destructue it out thumnail_image, title and artist. We can
// to this on two ways: (1) from the argument itself: "const AlbumList = ( {album: {thumbnail_image, title, artist} ) => {"
// or (2) like in our program - inside of of the function body.
const AlbumList = ( {album} ) => {
// Along with image we need to provide a prop called source. To the source reference we have to provide an OBJECT {} with a
// URI property, which is a LINK to actual image that RN can reach
    const {thumbnail_image, title, artist, image, url} = album; // props object destructured out of PROPS > ALBUM object
    const {
            thumbnailStyle,
            headerContentStyle,
            thumbnailContainerStyle,
            headerTextStyle,
            imageStyle,
    } = styles; // descructured styles object

    return (
    <Card>
        <CardSection>
            <View style={thumbnailContainerStyle}>
                <Image
                    style={thumbnailStyle}
                    source={ {uri : thumbnail_image} }
                />
            </View>
            <View style={headerContentStyle}>
                <Text style={headerTextStyle}>{title}</Text>
                <Text>{artist}</Text>
            </View>
        </CardSection>

        <CardSection>
            <Image
                style={imageStyle}
                source={ {uri: image}}
            />
        </CardSection>

        {/*We can also add property, ex.: text='button text'*/}
        <CardSection>
            <Button whenPressed={() => Linking.openURL(url)}>
                Buy Now
            </Button>
        </CardSection>
    </Card>
    );
};

const styles = {
    headerContentStyle: {
        justifyContent: 'space-around',
        flexDirection: 'column'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {        // Until we don't specify a style, images in RN won't print out on the app screen even though is rendered!
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,            // We now know that image will take a full width available to container
        width: null
    },
};

export default AlbumList;