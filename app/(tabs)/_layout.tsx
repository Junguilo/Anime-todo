//the main layout for the tab bar and each tab
//This will stay above the pages. 
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

//This will create the bottom tabs
export default function TabLayout() {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: 'blue'}}>
            <Tabs.Screen
                name = "index"
                options = {{
                    title: '',
                    tabBarIcon: ({color}) => <FontAwesome size={28} name="home" color={color} />,
                }}
            />

            <Tabs.Screen 
                name = "habit"
                options={{
                    title: '',
                    tabBarIcon: ({color}) => <FontAwesome size={28} name="check-square" color={color} />,
                }}
            />

            <Tabs.Screen 
                name = "anime"
                options={{
                    title: '',
                    tabBarIcon: ({color}) => <FontAwesome size={28} name="user" color={color} />,
                }}
            />

            <Tabs.Screen 
                name = "settings"
                options={{
                    title: '',
                    tabBarIcon: ({color}) => <FontAwesome size={28} name="cog" color={color} />,
                }}
            />
        </Tabs>
    );
}