import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Text,FlatList} from 'react-native';
import {ListFood} from '../components';


function ListPage(props) {

  const {category} = props.route.params;

  const [foodList ,setList] = useState([]);

  async function fetchFoodData() {
    const response = await axios.get(
      ` https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`,
    );
    setList(response.data.meals);
    
    
  }


  useEffect(() => {
    fetchFoodData();
  }, []);
  


  const renderFood = ({item}) =>   <ListFood food={item}
  onSelect={() => props.navigation.navigate('Detail', {id: item.idMeal})}
  />;

  return (
    <SafeAreaView>
      <View>
        <FlatList
          keyExtractor={(item) => item.idMeal.toString()}
          data={foodList}
          renderItem={renderFood}
        />
      </View>
    </SafeAreaView>
  );
}

export {ListPage};
