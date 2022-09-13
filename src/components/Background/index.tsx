import React from 'react';

import backgroundImg from '../../assets/background-galaxy.png';
import { ImageBackground } from 'react-native';

import { styles } from './styles';

interface Props {
  children: React.ReactNode;
}

export function Background({ children }: Props){
  return (
    <ImageBackground 
      source={backgroundImg}
      style={styles.container}
      defaultSource={backgroundImg}
    >
      {children}
    </ImageBackground>
  );
}