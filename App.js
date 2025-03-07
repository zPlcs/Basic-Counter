import React, { useState } from 'react'
import { Text, SafeAreaView, View } from 'react-native';
import Style from "./style/Style"
import Button from './components/Button'

export default function App() {
const [num, setNum] = useState(0);

const increment = () => {
  return setNum(num + 1);
}

const decrement = () => {
  if(num === 0){
    setNum(0)
  } else {
    setNum(num - 1)
  }
}

  return (
    <SafeAreaView style={Style.container}>
      <View style={Style.main}>
        <Text style={Style.mainTxt}>{num}</Text>
        <View style={Style.bar}>
          <Button
          signal={"+"} 
          onPress={increment}
          />
          <Button 
          signal={"-"} 
          onPress={decrement}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}


