import { Image, StyleSheet, Text, View } from "react-native"

export default function Login () {
    return (
        <View style={styles.container}>
            {/* <Image
              source={require('../public/logo.png')}
               style={styles.logo}>
            </Image> */}
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: '90%',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // logo: {
  //   width: 200,
  //   height: 150
  // }
});