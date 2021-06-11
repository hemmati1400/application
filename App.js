import React, {useEffect, useRef} from 'react';
import {StyleSheet, Linking, BackHandler} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import messaging from '@react-native-firebase/messaging';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SplashScreen from 'react-native-splash-screen';

import {HomeScreen, Calender, NewsScreen} from './src';

const Tab = createMaterialTopTabNavigator();
const App = () => {
  const navigationRef = useRef();
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        if (navigationRef.current.getCurrentRoute().name === 'Home') {
          BackHandler.exitApp();
          return true;
        }
        return false;
      },
    );
    messaging().setBackgroundMessageHandler(async remoteMessage => {
      Alert.alert(
        'A new FCM message background arrived!',
        JSON.stringify(remoteMessage),
      );
    });

    messaging().onNotificationOpenedApp(remoteMessage => {
      Alert.alert(
        'A new FCM message onNotificationOpenedApp arrived!',
        JSON.stringify(remoteMessage),
      );
    });

    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          const {data} = remoteMessage;
          if (data && data.openUrl) {
            Linking.openURL(data.openUrl);
          }
        }
      });
    setTimeout(() => {
      SplashScreen.hide();
    }, 100);
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return function cleanup() {
      unsubscribe();
      backHandler.remove();
    };
  }, []);
  return (
    <NavigationContainer ref={navigationRef}>
      <Tab.Navigator
        tabBarOptions={{
          labelStyle: styles.vazirBold,
          style: {
            backgroundColor: '#365FB7',
          },
          indicatorStyle: {
            backgroundColor: '#07A7A4',
          },
        }}>
        <Tab.Screen
          name="Home"
          options={{title: 'خانه'}}
          component={HomeScreen}
        />
        <Tab.Screen
          name="News"
          options={{title: 'خبرنامه'}}
          component={NewsScreen}
        />
        <Tab.Screen
          name="Calender"
          options={{title: 'تقویم'}}
          component={Calender}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginRight: 15,
    marginLeft: 15,
  },
  vazir: {
    fontFamily: 'Vazir',
  },
  vazirBold: {
    color: 'white',
    fontFamily: 'Vazir-Bold',
  },
});

export default App;
