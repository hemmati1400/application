import React from 'react';
import {Linking} from 'react-native';
import {Card, Title, Paragraph} from 'react-native-paper';

export const CardComp = ({
  title,
  description,
  imgSrc = null,
  openUrl = null,
}) => (
  <Card
    onPress={() => openUrl && Linking.openURL(openUrl)}
    style={{marginTop: 20, marginTop: 20}}>
    <Card.Content>
      <Title>{title}</Title>
      <Paragraph>{description}</Paragraph>
    </Card.Content>
    {imgSrc && <Card.Cover source={{uri: imgSrc}} />}
  </Card>
);
