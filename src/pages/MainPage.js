
import {SafeAreaView, View, Text, FlatList} from 'react-native';
import axios from 'axios';
import React, {useState,useEffect} from 'react';
import {ListCategory} from '../components';

const api_url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
function MainPage(props) {
  const [foodCategory, setCategory] = useState([]);

  function getCategory() {
    axios
    .get(api_url)
    .then((response) => setCategory(response.data.categories));
  }

  useEffect(() =>{
    getCategory();
  }, []);

  const renderFood = ({item}) =>   <ListCategory category={item} 
        onSelect={() => props.navigation.navigate('List', {category: item.strCategory})}
                />;

   return (
    <SafeAreaView>
      <View>
        <FlatList
          keyExtractor={(item) => item.idCategory.toString()}
          data={foodCategory}
          renderItem={renderFood}
        />
      </View>
    </SafeAreaView>
  );
}

export {MainPage};