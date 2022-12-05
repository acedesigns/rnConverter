/* =======================================================
 *
 * Created by anele on 2022/10/05.
 *
 * @anele_ace
 *
 * =======================================================
 */

import React, {useState, useContext} from 'react';
import Swiper from 'react-native-swiper';
import Images from '../assets/images/walk';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {AuthContext} from '../components/context';

const {width, height} = Dimensions.get('window');

const WalkThroughScreen = () => {
  const walkImages = [
    {id: '321', text: 'Image 1', image: Images.img1},
    {id: '123', text: 'Image 2', image: Images.img2},
    {id: '986', text: 'Image 3', image: Images.img3},
  ];

  const loginHandle = () => {
    logInMethod();
  };

  const {logInMethod} = useContext(AuthContext);

  return (
    <View style={{flex: 1}}>
      <Swiper
        activeDotStyle={{width: 20, height: 8}}
        activeDotColor="#fc7be0"
        autoplay={true}
        autoplayTimeout={3}
        paginationStyle={{position: 'absolute', bottom: '10%',}}>
        {walkImages.map((image: any) => {
          return (
            <View style={styles.container} key={image.id}>
              {/* <Text style={styles.textStyle}>{image.text}</Text> */}
              <Image style={styles.imageContainer} source={image.image} />
            </View>
          );
        })}
      </Swiper>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => {
            loginHandle();
          }}>
          <Text style={styles.textStart}> Get Started </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WalkThroughScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    width: '40%',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  imageContainer: {
    height: '70%',
    width: '90%',
    resizeMode: 'contain',
    marginHorizontal: 15,
  },
  buttonsContainer: {
    top: '4%',
    left: 0,
    right: 0,
    alignItems: 'center',
    position: 'absolute',
    justifyContent: 'center',
  },
  buttonStyle: {
    backgroundColor: '#00efc5',
    paddingHorizontal: 100,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    borderRadius: 20,
    marginBottom: 20,
  },
  textStart: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    //fontSize: 23,
  },
});
