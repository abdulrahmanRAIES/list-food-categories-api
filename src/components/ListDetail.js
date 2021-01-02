import React from 'react';
import {SafeAreaView, View, Text, Image, TouchableOpacity,StyleSheet,Dimensions,Linking} from 'react-native';

const deviceSize = Dimensions.get('window');
const ListDetail = ({detail}) => {
   
    return (
      <View style={styles.container}>
          <Text style={styles.company}>{detail.strMeal}</Text>
        
        <Image
          resizeMode="contain"
          source={{uri: detail.strMealThumb}}
          style={styles.logo}
        />
        <View style={styles.titleContainer}>
        <Text style={styles.title}>{detail.strCategory} </Text>
        <Text style={styles.title}> /  {detail.strArea}</Text>
        </View>
        <View style={styles.styles_1}>
          <View style={styles.styles_2}>
            <Text style={styles.text}>{detail.strInstructions}</Text>
            <TouchableOpacity onPress={() => Linking.openURL(`${detail.strYoutube}`)}>
                <Text style={{color: 'red',fontWeight:'bold',textAlign:'center'}}>
                   Youtube
                </Text>
            </TouchableOpacity>
          </View>
        </View>
        
      </View>
    );
  };

export {ListDetail};


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
      height: deviceSize.height / 2,
      borderRadius:30,
    },
    text: {
      fontWeight: 'bold',
      fontSize: 20,
      alignItems: 'center',
      
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
    title: {
      fontWeight: 'bold',
      marginVertical: 3,
      color:'black',
      padding:2,
      fontSize:20,
    },
    titleContainer: {
      flex:1,
      flexDirection: 'row',
      alignItems: 'center',
      left:120,
    },
  });