import React from 'react';
import {StatusBar, StyleSheet, useColorScheme, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {WebView} from 'react-native-webview';

export const Calender = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <StatusBar barStyle={'light-content'} />

      <WebView
        source={{
          uri: 'https://www.google.com/calendar/embed?showNav=0&showPrint=0&src=he5agif8d3r4ok5q76seprgls8@group.calendar.google.com',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingRight: 15,
    paddingLeft: 15,
    // backgroundColor: 'red',
  },
});
