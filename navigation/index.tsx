/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Avatar, Button, Text, useTheme, useThemeMode } from "@rneui/themed";
import * as React from "react";
import { ColorSchemeName, Pressable } from "react-native";
import HomeTabIcon from "../components/common/icons/HomeTabIcon";
import InboxTabIcon from "../components/common/icons/InboxTabIcon";
import NotificationsTabIcon from "../components/common/icons/NotificationsTabIcon";
import SearchTabIcon from "../components/common/icons/SearchTabIcon";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import HomeScreen from "../screens/HomeScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import HighlightedTweetsIcon from "../components/common/icons/HighlightedTweetsIcon";

export default function Navigation({
  colorScheme
}: {
  colorScheme: ColorSchemeName;
}) {
  const { mode, setMode } = useThemeMode();

  React.useEffect(() => {
    setMode("dark");
  }, [colorScheme]);

  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={mode === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const { theme } = useTheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: theme.colors.background
        },
        tabBarActiveTintColor: theme.colors.black,
        tabBarInactiveTintColor: theme.colors.grey1,
        tabBarShowLabel: false
      }}
    >
      <BottomTab.Screen
        name="TabOne"
        component={HomeScreen}
        options={({ navigation }: RootTabScreenProps<"TabOne">) => ({
          title: "Inicio",
          headerTitleStyle: { fontSize: 16, fontWeight: "bold", left: 8 },
          tabBarIcon: ({ color }) => (
            <HomeTabIcon width={24.5} height={24.5} color={color} />
          ),
          headerStyle: {
            backgroundColor: theme.colors.background
          },
          headerLeft: () => (
            <Button type="clear" containerStyle={{ left: 8 }}>
              <Avatar
                size="small"
                source={{
                  uri: "https://avatars.githubusercontent.com/u/43476781?v=4"
                }}
                rounded
              />
            </Button>
          ),
          headerRight: () => (
            <Button
              type="clear"
              containerStyle={{
                borderRadius: 9999,
                width: 32,
                height: 32,
                right: 8
              }}
            >
              <HighlightedTweetsIcon
                color={theme.colors.black}
                width={19}
                height={19}
              />
            </Button>
          )
        })}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={HomeScreen}
        options={{
          title: "Tab Two",
          tabBarIcon: ({ color }) => (
            <SearchTabIcon width={24.5} height={24.5} color={color} />
          )
        }}
      />
      <BottomTab.Screen
        name="TabThree"
        component={HomeScreen}
        options={{
          title: "Tab Three",
          tabBarIcon: ({ color }) => (
            <NotificationsTabIcon width={24.5} height={24.5} color={color} />
          )
        }}
      />
      <BottomTab.Screen
        name="TabFour"
        component={HomeScreen}
        options={{
          title: "Tab Four",
          tabBarIcon: ({ color }) => (
            <InboxTabIcon width={24.5} height={24.5} color={color} />
          )
        }}
      />
    </BottomTab.Navigator>
  );
}
