import * as React from 'react';
import { View, TouchableHighlight ,Text, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';

import { CHANGE_SCORE_TYPE } from '../../store/actions/index'

function SelectType({navigation}) {
	const dispatch = useDispatch()

	  return (
    <View style={styles.container}>

			<TouchableHighlight
				activeOpacity={0.7}
				underlayColor="#548a1c"
				style={styles.block}
				onPress={()=> {
					dispatch({type: CHANGE_SCORE_TYPE, scoreType: 'simple'})
					navigation.navigate('SettingsDone')
				}}
			>
				<View>
				<Text style={styles.title}>Simple Score type</Text>
				<Text style={styles.description}>The type where the score is changed by one point</Text>
				</View>
			</TouchableHighlight>

			<TouchableHighlight		
				activeOpacity={0.7}
				underlayColor="#548a1c"
				style={styles.block}
				onPress={()=> {
					dispatch({type: CHANGE_SCORE_TYPE, scoreType: 'custom'})
					navigation.navigate('SettingsDone')
				}}
			>
			<View>
				<Text style={styles.title}>Customize Score type</Text>
				<Text style={styles.description}>The type in which you choose the score yourself</Text>
				</View>
			</TouchableHighlight>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
		flex: 1,
		justifyContent: 'center',
		padding: 40 
	},
	block: {
		backgroundColor: '#eee',
		width: '100%',
		height: 120,
		marginBottom: 50,
		borderRadius: 10,
		borderWidth: 1,
		borderColor: '#e0e0e0',
		padding: 15
	},
	title: {
		fontSize: 20,
		marginBottom: 10,
		textAlign: 'center',
		fontWeight: 'bold'
	},
	description: {
		textAlign: 'center',
		fontSize: 16
	}

});

export default SelectType;