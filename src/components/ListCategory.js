import React from 'react';
import {SafeAreaView, View, Text, Image, TouchableOpacity,StyleSheet,Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');
const ListCategory = ({category,onSelect}) => {
  
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={onSelect}>
        <Image
          resizeMode="contain"
          source={{uri: category.strCategoryThumb}}
          style={styles.logo}
        />
        <View style={styles.styles_1}>
          <View style={styles.styles_2}>
            <Text style={styles.text}>{category.strCategory}</Text>
          </View>
        </View>
        </TouchableOpacity>
      </View>
    );
  };

export {ListCategory};

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