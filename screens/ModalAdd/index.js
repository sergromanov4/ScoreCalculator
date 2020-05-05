import * as React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';


function ModalAdd({navigation, route}) {
	const [value, onChangeText] = React.useState('');

	const { onAdded } = route.params 

  return (
    <View style={styles.container}>
			<TextInput
				style={styles.input}
				onChangeText={text => onChangeText(text)}
				value={value}
				placeholder="Enter player name"
				autoFocus
    	/>
			<Button
					style={styles.button}
					title="Add"
					onPress={() => {
						if (value) {
							onAdded(value)
							navigation.goBack()
						} else {
							alert('Player name is empty')
						}
					}}
				/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
		flex: 1,
		justifyContent: 'center',
		padding: 40 
	},
	input: {
		fontSize: 18,
		borderBottomWidth: 1,
		borderBottomColor: 'blue',
		marginBottom: 20
	},
});

export default ModalAdd;