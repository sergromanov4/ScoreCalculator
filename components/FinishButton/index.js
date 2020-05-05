import * as React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';


function FinishButton() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Button
        title="Finish game"
        color="#993b0c"
        onPress={() => {
					navigation.navigate('ModalQuestion')
        }}
			/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   marginRight: 20,
  }
});

export default FinishButton;