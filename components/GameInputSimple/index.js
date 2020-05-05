import * as React from 'react';
import { View, Button, StyleSheet } from 'react-native';

function GameInputSimple({onUpdate, id}) {
  return (
    <View style={styles.container}>
      <Button
        title=" - 1 "
        color="#a6175c"
        onPress={() => onUpdate('minus', 1, id)}
			/>

      <Button
        title=" + 1 "
        color="#5fad8c"
        onPress={() => onUpdate('plus', 1, id)}
			/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 270,
    height: 60,
    borderWidth: 2,
    borderRadius: 15,
    borderColor: '#6cb9ba',
    backgroundColor: '#5f9b9c',
    flexDirection: 'row',
		justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 15
  }
});

export default GameInputSimple;