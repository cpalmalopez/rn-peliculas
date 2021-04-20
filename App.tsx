import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './src/navigation/Navigation';
import { GradientProvider } from './src/context/GradientContext';

const AppState = ({children}: any) => {
	return (
		<GradientProvider>
			{children}
		</GradientProvider>
	)
}

const App = () => {
	return (
		<NavigationContainer>
			<AppState>
				<Navigation />
			</AppState>
		</NavigationContainer>
	)
}

export default App;
