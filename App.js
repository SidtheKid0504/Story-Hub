import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import writeAstory from './screens/writeAstory';
import readAstory from './screens/readStory';

export default class App extends React.Component {
  render(){
    return (
        <AppContainer />
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  WRITE: {screen: writeAstory},
  READ: {screen: readAstory},
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      console.log(routeName)
      if(routeName === "WRITE"){
        return(
          <Image
          source={require("./assets/write.png")}
          style={{width:40, height:40}}
        />
        )
        
      }
      else if(routeName === "READ"){
        return(
          <Image
          source={require("./assets/read.png")}
          style={{width:40, height:40}}
        />)
      }
    }
  })
}
);

const AppContainer =  createAppContainer(TabNavigator);