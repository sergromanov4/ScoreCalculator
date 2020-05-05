import * as React from 'react';
import { View, Text, ScrollView, Button, StyleSheet } from 'react-native';
import { useDispatch, useSelector} from 'react-redux';

import { CLEAR_STORE } from '../../store/actions/index'

function FinishList({navigation}) {
	const dispatch = useDispatch()
  const players = useSelector(state => state.players)
  const sorted = players.sort((a,b) => b.currentScore-a.currentScore)

  return (
    <View style={styles.container}>
      <ScrollView style={styles.wrapper}>
        <View style={styles.list}>
          {sorted?.map((item, index) => {
            return <View key={item.id} style={styles.player}>
              <Text style={styles.name}>
                {`${index + 1}. ${item.name}`}
              </Text>
              <Text style={styles.name}>{item.currentScore}</Text>
            </View>
          })}
        </View>
      </ScrollView>
      <View style={styles.button}>
        <Button
          title="Go Home!"
          onPress={() => {
            dispatch({ type: CLEAR_STORE })
            navigation.navigate('Home')
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center' 
  },
  wrapper: {
    width: '100%',
  },
	list: {
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
  button: {
    width: '100%',
  },
  gold: {
    fontSize: 28,
    color: '#FEE101'
  },
  silver: {
    fontSize: 26,
    color: '#D7D7D7'
  },
  bronze: {
    fontSize: 24,
    color: '#A77044'
  }
});

export default FinishList;