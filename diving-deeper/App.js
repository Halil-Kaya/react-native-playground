import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <CustomButton>
        <View>
          <Text>pokemon</Text>
        </View>
      </CustomButton>
    </View>
  );
}

export function CustomButton({children}){
  console.log({children})
  console.log(typeof children)
  console.log(Object.keys(children))
  return <View>
    <Text>{children}</Text>
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
