import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  SafeAreaView,
} from 'react-native';
const {height, width} = Dimensions.get('window');
export default function Home(props) {
  const {item, navigation} = props;
  const {OfferImage, description, explanation, country, date} = item;
  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity
          style={{
            height: height * 0.25,
            width: width * 0.9,
            marginHorizontal: 8,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: width * 0.025,
            backgroundColor: '#fff',
            marginVertical: 10,
          }}
          onPress={() =>
            navigation.navigate('News', {
              item1: OfferImage,
              item2: description,
              item3: explanation,
              item4: country,
              item5: date,
            })
          }>
          <Image
            source={OfferImage}
            style={{
              height: height * 0.25,
              width: width * 0.95,
              borderRadius: width * 0.02,
            }}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <Text style={{width: width * 0.9, textAlign: 'center'}}>
          {description}
        </Text>
      </View>
    </SafeAreaView>
  );
}
