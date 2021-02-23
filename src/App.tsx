import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

// esto es necesario para mostrar cuadro de alerta.
import { RootSiblingParent } from 'react-native-root-siblings';

import Routes from './routes';

const App: React.FC = () => (
  <RootSiblingParent>
    <StatusBar barStyle="dark-content" />
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  </RootSiblingParent>
);

export default App;
