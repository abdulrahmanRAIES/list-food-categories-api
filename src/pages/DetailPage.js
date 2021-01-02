
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Text,FlatList,StyleSheet,Dimensions,ImageBackground} from 'react-native';
import {ListDetail} from '../components';

const deviceSize = Dimensions.get('window');

function DetailPage(props) {
  const {id} = props.route.params;
  const [foodDetail, setFoodDetail] = useState({});



  async function fetchFoodData() {
    const response = await axios.get(
      ` https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
    );
    setFoodDetail(response.data.meals);

    
  }
  useEffect(() => {
    fetchFoodData();
  }, []);


  const renderFood = ({item}) =>   <ListDetail detail={item} />;
  return (

    <SafeAreaView style={styles.container}>
      <View >
      <FlatList
          keyExtractor={(item) => item.idMeal.toString()}
          data={foodDetail}
          renderItem={renderFood}
        />
    </View>
  </SafeAreaView>
  );
}



export {DetailPage};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
