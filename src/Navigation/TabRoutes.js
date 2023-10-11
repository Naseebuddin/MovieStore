import React from "react";
import {
  createBottomTabNavigator,
  BottomTabBar,
} from "@react-navigation/bottom-tabs";
import colors from "../styles/colors";
import { Image, StyleSheet } from "react-native";
import { Home, Search } from "../Screens";
import {
  moderateScale,
  width,
  moderateScaleVertical,
} from "../styles/responsiveSize";
import imagePath from "../constants/imagePath";
import strings from "../constants/lang";
import navigationStrings from "../constants/navigationStrings";
import { Watch } from "../Screens";

const BottomTab = createBottomTabNavigator();

const TabRoutes = (props) => {
  return (
    <BottomTab.Navigator
      tabBar={(tabsProps) => (
        <>
          <BottomTabBar {...tabsProps} />
        </>
      )}
      initialRouteName={navigationStrings.HOME}
      screenOptions={{
        tabBarStyle: {
          backgroundColor: colors.backgroundColor,
          borderTopWidth: 1,
          borderTopColor: colors.blue,
        },
        headerShown: false,
        style: styles.customBottomtabsStyle,
        tabBarActiveTintColor: colors.blue,
        tabBarInactiveTintColor: "gray",
        // tabBarShowLabel: false
      }}
    >
      <BottomTab.Screen
        name={navigationStrings.HOME}
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <Image source={imagePath.ic_Home} />
            ) : (
              <Image source={imagePath.ic_Home} />
            );
          },
        }}
      />
      <BottomTab.Screen
        name={navigationStrings.SEARCH}
        component={Search}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <Image source={imagePath.ic_Search} />
            ) : (
              <Image source={imagePath.ic_Search} />
            );
          },
        }}
      />
      <BottomTab.Screen
        name={navigationStrings.WATCH}
        component={Watch}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <Image source={imagePath.ic_Save} />
            ) : (
              <Image source={imagePath.ic_Save} />
            );
          },
        }}
      />
    </BottomTab.Navigator>
  );
};
const styles = StyleSheet.create({
  customBottomtabsStyle: {
    // height: moderateScale(90)
    // backgroundColor: colors.blackOpacity10,
    borderTopWidth: moderateScale(0),
  },
});

export default TabRoutes;
