import * as React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

function GameInputCustom({onUpdate, id}) {
  const [value, onChangeText] = React.useState(0);

  return (
    <View style={styles.container}>
      <Button
        title="  -  "
        color="#a6175c"
        onPress={() => {
          if (value)
            onUpdate('minus', +value, id)
        }}
			/>

      <TextInput
				style={styles.input}
				onChangeText={text => onChangeText(text)}
        value={value}
        keyboardType = 'numeric'
        placeholder='Enter score'
    	/>

      <Button
        title=" + "
        color="#5fad8c"
        onPress={() => {
          if (value)
            onUpdate('plus', +value, id)
        }}
			/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 330,
    height: 60,
    borderWidth: 2,
    borderRadius: 15,
    borderColor: '#6cb9ba',
    backgroundColor: '#5f9b9c',
    flexDirection: 'row',
		justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15
  },
  input: {
    width: 110,
    fontSize: 22,
    marginHorizontal: 30,
    color: '#fff',
  }
});

export default GameInputCustom;