import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  RefreshControl,
  Alert,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import {CardComp} from '.';

export const NewsScreen = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const loadNews = () => {
    setLoading(true);
    fetch('https://api.hemmati1400.com/news.json')
      .then(res => res.json())
      .then(
        result => {
          setNews(result);
          setLoading(false);
        },
        error => {
          Alert.alert('Something wrong');
          setNews([]);
          setLoading(false);
        },
      );
  };
  useEffect(() => {
    loadNews();
  }, []);
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      refreshControl={
        <RefreshControl refreshing={loading} onRefresh={loadNews} />
      }
      contentContainerStyle={styles.container}>
      <LinearGradient
        colors={['#365FB7', '#07A7A4']}
        style={styles.linearGradient}>
        <StatusBar barStyle={'light-content'} />
        {news.map((item, index) => (
          <CardComp
            key={index}
            title={item.title}
            description={item.description}
            imgSrc={item.imgSrc}
            openUrl={item.openUrl}
          />
        ))}
      </LinearGradient>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
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
});
