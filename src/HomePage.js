import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Linking,
  Image,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Button} from 'react-native-paper';

export const HomeScreen = () => {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={styles.container}>
      <LinearGradient
        colors={['#365FB7', '#07A7A4']}
        style={styles.linearGradient}>
        <StatusBar barStyle={'light-content'} />

        <TouchableOpacity
          style={[styles.imageStyle, {height: '30%'}]}
          onPress={() => Linking.openURL('https://www.hemmati1400.com')}>
          <Image
            style={styles.imageStyle}
            resizeMode="contain"
            source={require('./assets/homepage.jpeg')}
          />
        </TouchableOpacity>

        <Button
          icon="file"
          mode="contained"
          style={styles.buttonMargin}
          contentStyle={styles.buttonTextStyle}
          onPress={() =>
            Linking.openURL(
              'https://drive.google.com/drive/u/0/folders/1OvCx_o4lJGP10ePgnmgyJ4PhG7rhC9T0',
            )
          }>
          <Text style={styles.vazirBold}>محتوای چند رسانه ای</Text>
        </Button>

        <Button
          icon="comment-multiple-outline"
          mode="contained"
          style={styles.buttonMargin}
          contentStyle={styles.buttonTextStyle}
          onPress={() =>
            Linking.openURL(
              'https://docs.google.com/forms/d/e/1FAIpQLSdraXcWfV7ZAQRVRoKv9iZ5lryUcsK-m-rqtgZ0GsboLAyT_A/viewform?usp=sf_link',
            )
          }>
          <Text style={styles.vazirBold}>ایده و نقد</Text>
        </Button>

        <Button
          icon="hand-left"
          mode="contained"
          style={styles.buttonMargin}
          contentStyle={styles.buttonTextStyle}
          onPress={() =>
            Linking.openURL(
              'https://docs.google.com/forms/d/e/1FAIpQLSfDAvWHHWuWSV76PJyDaogC_tnWrU9dXVXcj0RoKqI5AvSDnQ/viewform',
            )
          }>
          <Text style={styles.vazirBold}>ثبت مطالبات</Text>
        </Button>

        <Button
          icon="file-image"
          style={styles.buttonMargin}
          contentStyle={styles.buttonTextStyle}
          mode="contained"
          onPress={() =>
            Linking.openURL(
              'https://docs.google.com/forms/d/e/1FAIpQLSdraXcWfV7ZAQRVRoKv9iZ5lryUcsK-m-rqtgZ0GsboLAyT_A/viewform?usp=sf_link',
            )
          }>
          <Text style={styles.vazirBold}>فرستادن محتوا</Text>
        </Button>

        <Button
          icon="account"
          style={styles.buttonMargin}
          contentStyle={styles.buttonTextStyle}
          mode="contained"
          onPress={() =>
            Linking.openURL(
              'https://docs.google.com/forms/d/e/1FAIpQLSfrYY-1t865IEmlpnlKQG0f0Rg7tUBnR-TT6isV4ID9bb7Tow/viewform?usp=sf_link',
            )
          }>
          <Text style={styles.vazirBold}>عضویت در ستاد</Text>
        </Button>

        <Button
          icon="information"
          style={styles.buttonMargin}
          contentStyle={styles.buttonTextStyle}
          mode="contained"
          onPress={() =>
            Linking.openURL(
              'https://docs.google.com/document/d/1LSkEck8PzEyp9M_K6dfixNgTJHXQBsT-0QrdbRVVT-g/edit#',
            )
          }>
          <Text style={styles.vazirBold}>درباره ستاد</Text>
        </Button>
      </LinearGradient>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
  },
  linearGradient: {
    flex: 1,
    paddingRight: 15,
    paddingLeft: 15,
  },
  vazir: {
    fontFamily: 'Vazir',
  },
  vazirBold: {
    fontFamily: 'Vazir-Bold',
  },
  imageStyle: {height: '100%', width: '100%'},
  buttonMargin: {
    backgroundColor: '#00EBD0',
    marginTop: 5,
    marginBottom: 5,
  },
  buttonTextStyle: {
    paddingTop: 5,
    paddingBottom: 5,
  },
});
