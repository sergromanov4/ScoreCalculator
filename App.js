import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider} from 'react-redux'
import store from './store'

import Players from './screens/Players/index.js'
import ModalAdd from './screens/ModalAdd/index.js'
import SelectType from './screens/SelectType/index.js'
import SettingsDone from './screens/SettingsDone/index.js'
import GameHome from './screens/GameHome/index.js'


const RootStack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStack.Navigator initialRouteName="Home" >
          <RootStack.Screen name="Home" component={Players} options={{ title: 'My home'}}/>
          <RootStack.Screen name="ModalAdd" component={ModalAdd} options={{ headerShown: false }} />
          <RootStack.Screen name="SelectType" component={SelectType} />
          <RootStack.Screen name="SettingsDone" component={SettingsDone} options={{ headerShown: false }} />
          <RootStack.Screen name="GameHome" component={GameHome} options={{ headerShown: false }} />
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
