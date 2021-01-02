import React from 'react';
import {SafeAreaView, View, Text, Image, TouchableOpacity,StyleSheet,Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

const ListFood = ({food,onSelect}) => {

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={onSelect}>
        <Image
          resizeMode="contain"
          source={{uri: food.strMealThumb}}
          style={styles.logo}
        />
        <View style={styles.styles_1}>
          <View style={styles.styles_2}>
            <Text style={styles.text}>{food.strMeal}</Text>
          </View>
        </View>
        </TouchableOpacity>
      </View>
    );
  };

export {ListFood};

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      borderWidth: 1,
      borderColor: '#bdbdbd',
      margin: 5,
      marginVertical: 10,
      borderRadius: 10,
    },
    logo: {
      height: deviceSize.height / 4,
    },
    text: {
      fontWeight: 'bold',
      fontSize: 20,
    },
    styles_1: {
      padding: 5,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      backgroundColor: '#e0e0e0',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    styles_2: {},
    buttonContainer: {
      backgroundColor: '#039be5',
      padding: 10,
      borderRadius: 10,
    },
  });