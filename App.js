// import React, {useState,useEffect} from 'react';
// import { StyleSheet, Text, View,Switch,Button,FlatList } from 'react-native';
// import Footer from './components/Footer'
// import Header from './components/Header'
// import Subject from './components/Subject'
// import ChangeDay from './components/ChangeDay'
// import {Divider} from 'react-native-elements'

// export default function App() {
//   const [isLoading, setLoading] = useState(true)
//   const [data, setData] = useState([])

//   useEffect(() => {
//     fetch('https://osbb-musson.com.ua:58960/entirex/xmlrt')
//       .then((response) => response.json())
//       .then((json) => setData(json.movies))
//       .catch((error) => console.error(error))
//       .finally(() => setLoading(false));
//   }, [])
//   return (
//     <View style={styles.container}>
//       <Header value='Розклад занятть' />
//       <ChangeDay/>
//       <Subject value='Математика'/>
//       <Divider/>
//       <Subject value='Английский'/>
//       <Divider/>
//       <Subject value='Сиспрог'/>
//       <Divider/>
      
//         <FlatList
//           data={data}
//           keyExtractor={({ id }, index) => id}
//           renderItem={({ item }) => (
//             <Text>{item.title}, {item.releaseYear}</Text>
//           )
//           }
//         />
//      <Footer value='Some Value'></Footer>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#ffffff',
    

//   },
// });
import  {useState,useEffect} from 'react';
import { StyleSheet, Text, View,Switch,Button,FlatList,ActivityIndicator } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import React from 'react'
import Calendar from './components/Calendar'
import Info from './components/Info'
const Stack=createStackNavigator();

export default function App() {
  //const [isLoading, setLoading] = useState(true)
  //const [data, setData] = useState([])

  // useEffect(() => {
  //   fetch('https://osbb-musson.com.ua:58960/entirex/xmlrt')
  //     .then((response) => response.json())
  //     .then((json) => setData(json.movies))
  //     .catch((error) => console.error(error))
  //     .finally(() => setLoading(false));
  // }, [])
  return (
    
    <NavigationContainer style={styles.container}>
      <Stack.Navigator initialRouteName='Calendar'>
          <Stack.Screen name='Calendar' component={Calendar}/>
          <Stack.Screen name='Info' component={Info}/>
      </Stack.Navigator>
    </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    

  },
});