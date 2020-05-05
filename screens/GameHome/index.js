import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector} from 'react-redux';

import Round from '../Round/index.js';
import FinishButton from '../../components/FinishButton/index.js';
import ModalQuestion from '../ModalQuestion/index.js'
import FinishList from '../FinishList/index.js'

const GameStack = createStackNavigator();

function GameHome() {
  const round = useSelector(state => state.gameSettings.round) || 1
  
  return (
    <GameStack.Navigator initialRouteName="Round" >
      <GameStack.Screen
        name="Round"
        component={Round}
        options={{
          title: `Round ${round}`,
          headerLeft: null,
          headerRight: () => (
            <FinishButton />
          )
        }}
      />
      <GameStack.Screen name="ModalQuestion" component={ModalQuestion} options={{ headerShown: false }} />
      <GameStack.Screen name="FinishList" component={FinishList} options={{ title: 'Result Table', headerLeft: null, }} />
    </GameStack.Navigator>
  );
}

export default GameHome;
