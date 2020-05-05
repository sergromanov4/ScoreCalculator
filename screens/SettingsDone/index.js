import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';


function SettingsDone({navigation, route}) {
  return (
    <View style={styles.container}>
			<View style={styles.wrapper}>
				<Text style={styles.title}>You finished setting up the game!</Text>
				<Text style={styles.text}>You can start the game or go back to change the settings</Text>
			</View>
			
			<View style={styles.wrapperButtons}>
				<Button
					style={styles.button}
					title="Start game!"
					color="#548a1c"
					onPress={() => {
						navigation.navigate('GameHome')
					}}
				/>
				<Button
					style={styles.button}
					title="go back"
					color="#00B0FF"
					onPress={() => {
						navigation.popToTop()
					}}
				/>
			</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
		flex: 1,
		justifyContent: 'center',
		padding: 20 
	},
	wrapper: {
		height: 150,
		justifyContent: 'center',
	},
	wrapperButtons: {
		marginTop: 30,
		height: 100,
		justifyContent: 'space-between',
	},
	title: {
		fontSize: 20,
		textAlign: 'center',
		marginBottom: 20,
		fontWeight: 'bold'
	},
	text: {
		textAlign: 'center',
		fontSize: 18
	},
	button: {
		borderRadius: 10
	}
});

export default SettingsDone;