import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import GameInputSimple from '../GameInputSimple/index.js'
import GameInputCustom from '../GameInputCustom/index.js'

function GamePlayer({name, currentScore, prevRound, onUpdate, id, scoreType}) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      
      <View style={styles.scoreWrapper}>
        <View style={styles.scoreCol}>
          <Text style={styles.scoreTitle}>Current Score</Text>
          <Text style={styles.score}>{currentScore}</Text>
        </View>

        <View style={styles.scoreCol}>
          <Text style={styles.scoreTitle}>Previus Score</Text>
          <Text style={prevRound >= 0 ? styles.scorePos : styles.scoreNeg}>{prevRound}</Text>
        </View>
      </View>

      <View>
        {scoreType === 'simple' && <GameInputSimple onUpdate={onUpdate} id={id} />}
        {scoreType === 'custom' && <GameInputCustom onUpdate={onUpdate} id={id} />}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
		flex: 1,
		justifyContent: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#99c1c2',
    marginBottom: 20,
    alignItems: 'center'
  },
  name: {
    fontSize: 20,
    margin: 10,
    fontWeight: 'bold'
  },
  scoreWrapper: {
    width: '90%',
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  scoreCol: {
    alignItems: 'center'
  },
  scoreTitle: {
    fontSize: 16
  },
  score: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10
  },
  scorePos: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'green'
  },
  scoreNeg: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'red'
  }
});

export default GamePlayer;