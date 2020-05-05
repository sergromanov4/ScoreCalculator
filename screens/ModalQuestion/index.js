import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';


function ModalQuestion({navigation}) {
  return (
    <View style={styles.container}>
			<View style={styles.wrapper}>
				<Text style={styles.text}>Are you sure?</Text>
				<View style={styles.buttons}>
					<Button
						style={styles.button}
						title="No"
						onPress={() => navigation.goBack()}
					/>
					<Button
						style={styles.button}
						title="Yes"
						onPress={() => navigation.navigate('FinishList')}
					/>
				</View>
			</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
		width:'100%',
		flex: 1,
		justifyContent: 'center',
		padding: 40 
	},
	wrapper: {
		flexDirection: 'column',

	},
	text: {
		fontSize: 32,
		textAlign: 'center'
	},
	buttons: {
		flexDirection: 'row',
		marginTop: 70,
		justifyContent: 'space-around'
	},
});

export default ModalQuestion;