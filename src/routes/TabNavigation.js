import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Haberler from '../screens/Haberler';
import Duyurular from '../screens/Duyurular';
import AddHaber from '../screens/AddHaber';
import MyStack from './StackNavigation';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Haber" component={MyStack} />
      <Tab.Screen name="Duyuru" component={Duyurular} />
      <Tab.Screen name="Haber Ekle" component={AddHaber} />
    </Tab.Navigator>
  );
}
