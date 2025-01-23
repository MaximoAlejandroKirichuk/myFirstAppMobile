import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const styleTitle = {
    fontSize: 30,
    color: 'blue',
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'yellow',
  }
  
  return (
    <View style={style.container}>
      <Text>mammamama</Text>
      <TextInput 
        style = {style.imputContainer}
      />
      
      <Button 
        title='hoal++'
        color= '#5555ff'
      />

      </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFAAA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imputContainer: {
    width: '100%',
    backgroundColor: '#1AAAA2',
  }
})