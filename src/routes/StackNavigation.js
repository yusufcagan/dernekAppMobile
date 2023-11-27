import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Duyurular from '../screens/Duyurular';
import Haberler from '../screens/Haberler';
import HaberDetailScreen from '../screens/HaberDetailScreen';
import HaberUpdate from '../screens/HaberUpdate';

const Stack = createNativeStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Haberler" component={Haberler} />
      <Stack.Screen name="Duyurular" component={Duyurular} />
      <Stack.Screen name="HaberDetailScreen" component={HaberDetailScreen} />
      <Stack.Screen name="HaberUpdate" component={HaberUpdate} />
    </Stack.Navigator>
  );
}
