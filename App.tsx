import { StatusBar } from 'expo-status-bar';
import Router from './src/routes/router';
import { NavigationContainer } from '@react-navigation/native';
import { variables } from './src/config/variables';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={variables.colors.primary} style={'light'} />
        <Router />
    </NavigationContainer>
  );
}
