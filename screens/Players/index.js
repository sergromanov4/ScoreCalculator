import * as React from 'react';
import { View, Text, ScrollView, Button, StyleSheet } from 'react-native';
import { useDispatch, useSelector} from 'react-redux';

import { ADD_PLAYER, DELETE_PLAYER } from '../../store/actions/index'

function Players({navigation}) {
	const dispatch = useDispatch()
	const players = useSelector(state => state.players)

	const onAdded = (name) => {
		const newPlayer = {
			id: Date.now().toString(),
			currentScore: 0,
			prevRound: 0,
			acc: 0,
			name
		}
		dispatch({type: ADD_PLAYER, newPlayer})
	}

	const onDelete = (id) => {
		dispatch({type: DELETE_PLAYER, id})
	}

	const onNext = () => {
		if (players.length) {
			navigation.navigate('SelectType')
		} else {
			alert('You does`t add anyone player!')
		}
	}

  return (
    <View style={styles.container}>
			<View style={styles.buttons}>
				<Button
					style={styles.button}
					title="Add player"
					onPress={() => navigation.navigate('ModalAdd', { onAdded })}
				/>

				<Button
					style={styles.button}
					title="Go Next"
					onPress={onNext}
				/>
			</View>
			<ScrollView style={styles.wrapper}>
				<View style={styles.list}>
					{players?.map(item => {
						return <View key={item.id} style={styles.player}>
							<Text style={styles.name}>{item.name}</Text>
							<Button
								title="  -  "
								color="#a6175c"
								onPress={() => onDelete(item.id)}
							/>
						</View>
					})}
				</View>
			</ScrollView>

			{!players.length && <Text style={styles.empty}>Player list is empty</Text>}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
		width: '100%',
		paddingTop: 20,
		alignItems: 'center',
		justifyContent: 'center' 
	},
	wrapper: {
		width: '100%',
	},
  buttons: {
		alignSelf: 'stretch',
		flexDirection: 'row',
		justifyContent: 'space-around',
		paddingBottom: 10
	},
	list: {
		width: '100%',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	player: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: 60,
		backgroundColor: '#eee',
		marginTop: 15,
		width: '80%',
		borderRadius: 10,
		borderWidth: 1,
		borderColor: '#e0e0e0',
		padding: 15
	},
	name: {
		fontSize: 22
	},
	empty: {
		marginTop: 40,
		fontSize: 28
	}
});

export default Players;