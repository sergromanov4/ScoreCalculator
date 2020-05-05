import * as React from 'react';
import { View, Button, StyleSheet, ScrollView  } from 'react-native';
import { useDispatch, useSelector} from 'react-redux';

import GamePlayer from '../../components/GamePlayer/index.js'

import { NEXT_ROUND, SCORE_PLUS, SCORE_MINUS } from '../../store/actions/index'


function Round({navigation, route}) {
	const dispatch = useDispatch()
	const gameSettings = useSelector(state => state.gameSettings)
	const players = useSelector(state => state.players)

	const round = gameSettings.round || 1

	const updateScore = React.useCallback((type, scoreValue, id) => {
		console.log('udate', type, scoreValue, id)
		if (type === 'plus')
			dispatch({type: SCORE_PLUS, scoreValue, id})
		else
			dispatch({type: SCORE_MINUS, scoreValue, id})
  }, [])

  return (
    <View style={styles.container}>
		
			<ScrollView >
				{players?.map(item => <GamePlayer
					key={item.id}
					{...item}
					scoreType={gameSettings.scoreType}
					onUpdate={updateScore}
				/>)}
			</ScrollView >
			
			<Button
				style={styles.button}
				title="Next round!"
				color="#548a1c"
				onPress={() => {
					dispatch({type: NEXT_ROUND, round})
					navigation.push('Round')
				}}
			/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#fff',
	}
});

export default Round;