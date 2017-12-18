import {
  StackNavigator,
} from 'react-navigation';
import {
  HomeScreen,
  CreateScreen,
} from './src/containers';

const App = StackNavigator({
  Home: { screen: HomeScreen },
  Create: { screen: CreateScreen },
});

export default App;
