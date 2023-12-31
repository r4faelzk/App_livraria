import {
    createDrawerNavigator,
} from '@react-navigation/drawer'

//IMPORTACAO DAS TELAS NAVEGAVEIS DO DRAWERMENU
import FeedBook from '../screens/FeedBook';
import TelaDrawer1 from '../screens/TelaDrawer1';
import TelaDrawer2 from '../screens/TelaDrawer2';
import TelaDrawer3 from '../screens/TelaDrawer3';

//CRIAÇÃO DO DRAWER NAVIGATOR
const Drawer = createDrawerNavigator();

export default function MyDrawer() {
    return (
        <Drawer.Navigator
        initialRouteName='FeedBook'
        >
            <Drawer.Screen
                name='FeedBooks'
                component={FeedBook}
                options={
                    {
                        title: "Feed de Livros",
                        headerTitleStyle: { color: 'transparent' }
                        // headerTransparent: false,
                        // headerShown: false,
                    }
                }
            />

            <Drawer.Screen
                name='TelaDrawer1'
                component={TelaDrawer1}
                options={
                    {
                        title: "Tela 1",
                        headerTitleStyle: { color: 'transparent' }
                    }
                }
            />

            <Drawer.Screen
                name='TelaDrawer2'
                component={TelaDrawer2}
                options={
                    {
                        title: "Tela 2",
                        headerTitleStyle: { color: 'transparent' }
                    }
                }
            />

            <Drawer.Screen
                name='TelaDrawer3'
                component={TelaDrawer3}
                options={
                    {
                        title: "Tela 3",
                        headerTitleStyle: { color: 'transparent' }
                    }
                }
            />

        </Drawer.Navigator>
    );
}
