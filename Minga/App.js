import Index from './assets/components/Index';
import Register from './assets/components/Register';
import Mangas from "./assets/components/Mangas";
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Provider} from 'react-redux/es';
import store from './assets/redux/store';

const Drawer = createDrawerNavigator();

export default function App() {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Index} />
            <Drawer.Screen name="Mangas" component={Mangas} />
            <Drawer.Screen name="Register" component={Register} /> 
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}



{/* <Drawer.Screen name="Mangas" component={Mangas} />
<Drawer.Screen name="Home" component={Index} />
<Drawer.Screen name="Register" component={Register} /> */}