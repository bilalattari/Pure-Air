import React from 'react';
import {StyleSheet} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {View, Text, Image} from 'react-native';
import VideoPlayer from 'react-native-video-controls';
import Video from 'react-native-video';

const slides = [
  {
    key: 1,
    image: require('./assets/Slide1.jpg'),
  },
  {
    key: 2,
    image: require('./assets/Slide2.mp4'),
    type: 'video',
  },
  {
    key: 3,
    image: require('./assets/Slide3.jpg'),
  },
  {
    key: 4,
    image: require('./assets/Slide4.jpg'),
  },
  {
    key: 5,
    image: require('./assets/Slide5.jpg'),
  },
  {
    key: 6,
    image: require('./assets/Slide6.jpg'),
  },
  {
    key: 7,
    image: require('./assets/Slide7.jpg'),
  },
  {
    key: 8,
    image: require('./assets/Slide8.jpg'),
  },
  {
    key: 9,
    image: require('./assets/Slide9.jpg'),
  },

  {
    key: 10,
    image: require('./assets/Slide10.jpg'),
  },
  {
    key: 11,
    image: require('./assets/Slide11.jpg'),
  },
  {
    key: 12,
    image: require('./assets/Slide12.jpg'),
  },
  {
    key: 13,
    image: require('./assets/Slide13.jpg'),
  },
  {
    key: 14,
    image: require('./assets/Slide14.jpg'),
  },
  {
    key: 15,
    image: require('./assets/Slide15.jpg'),
  },
  {
    key: 16,
    image: require('./assets/Slide16.jpg'),
  },
  {
    key: 17,
    image: require('./assets/Slide17.jpg'),
  },
  {
    key: 18,
    image: require('./assets/Slide18.jpg'),
  },
  {
    key: 19,
    image: require('./assets/Slide19.jpg'),
  },
  {
    key: 20,
    image: require('./assets/Slide20.jpg'),
  },
  {
    key: 21,
    image: require('./assets/Slide21.mp4'),
    type: 'video',
  },
  {
    key: 22,
    image: require('./assets/Slide22.jpg'),
  },
  {
    key: 23,
    image: require('./assets/Slide23.jpg'),
  },
  {
    key: 24,
    image: require('./assets/Slide24.jpg'),
  },
  {
    key: 25,
    image: require('./assets/Slide25.jpg'),
  },
  {
    key: 26,
    image: require('./assets/Slide26.jpg'),
  },
  {
    key: 27,
    image: require('./assets/Slide27.jpg'),
  },
  {
    key: 28,
    image: require('./assets/Slide28.jpg'),
  },
];

export default class App extends React.Component {
  state = {
    showRealApp: false,
  };
  _renderItem = ({item}) => {
    return item.type ? (
      <Video
        source={item.image}
        disableBack={true}
        playInBackground={false}
        fullscreen={true}
        navigator={this.props.navigator}
      />
    ) : (
      <View style={{flex: 1}}>
        <Image
          resizeMode={'contain'}
          style={{height: '100%', width: '100%'}}
          source={item.image}
        />
      </View>
    );
  };
  _onDone = () => {
    this.setState({showRealApp: true});
  };
  render() {
    return (
      <>
        <AppIntroSlider
          renderItem={this._renderItem}
          data={slides}
          showNextButton={false}
          onDone={this._onDone}
        />
      </>
    );
  }
}

const styles = StyleSheet.create({});
