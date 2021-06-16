import React from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const Done = ({...props}) => (
  <TouchableOpacity style={{marginHorizontal: 20}} {...props}>
    <Text style={{fontSize: 16}}>Done</Text>
  </TouchableOpacity>
);

export default function OnboardingScreen({navigation}) {
  return (
    <>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" />
      <Onboarding
        bottomBarHighlight={false}
        DoneButtonComponent={Done}
        onSkip={() => navigation.replace('Welcome')}
        onDone={() => navigation.navigate('Welcome')}
        pages={[
          {
            backgroundColor: '#fff',
            image: <Image source={require('../../assets/Images/Group1.png')} />,
            title: 'Informasi Bencana Secara Realtime ',
            subtitle:
              'Ikut serta berperan dalam menyebarkan informasi mengenai bencana alam ',
          },
          {
            backgroundColor: '#fff',
            image: <Image source={require('../../assets/Images/Group2.png')} />,
            title: 'Membantu Dengan Cara Donasi  ',
            subtitle: 'Membantu para korban bencana tanpa harus menuju lokasi',
          },
          {
            backgroundColor: '#fff',
            image: <Image source={require('../../assets/Images/Group3.png')} />,
            title: 'Informasi Pihak Terkait',
            subtitle: 'Daftar kontak pihak terkait secara cepat ',
          },
        ]}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
