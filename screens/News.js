import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  Share,
  Alert,
  ScrollView,
} from 'react-native';
const {height, width} = Dimensions.get('window');

export default App = ({route, navigation}) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const {item1} = route.params;
  const {item2} = route.params;
  const {item3} = route.params;
  const {item4} = route.params;
  const {item5} = route.params;
  console.log(data);

  useEffect(() => {
    fetch(
      'https://newsapi.org/v2/sources?apiKey=d29d58aab88d4ea0b04ddb245a230068',
    )
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `Check out the App at:   message: `,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
        } else {
        }
      } else if (result.action === Share.dismissedAction) {
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <ScrollView>
      <View style={{flex: 1, padding: 10}}>
        <View
          style={{
            flexDirection: 'column',
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              textAlign: 'center',
              width: '100%',
              marginBottom: 10,
            }}>
            {'News'}
          </Text>
          <View style={{marginBottom: 7, alignItems: 'center'}}>
            <Image
              source={item1}
              style={{
                height: height * 0.25,
                width: width * 0.95,
                borderRadius: width * 0.01,
                alignItems: 'center',
              }}
              resizeMode="stretch"
            />
            <View
              style={{
                width: '100%',
                height: height * 0.05,
                marginVertical: height * 0.01,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TouchableOpacity
                onPress={() => {
                  Alert.alert('Image has Successfully saved in your device.');
                }}
                style={{
                  width: width * 0.3,
                  backgroundColor: '#33bfff',
                  borderRadius: 4,
                  height: height * 0.04,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{color: '#fff'}}>Save image</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text
            style={{
              fontSize: 20,
              color: '#000',
              fontWeight: 'bold',
              textAlign: 'left',
              width: '90%',
              marginTop: -10,
            }}>
            {item2}
          </Text>
          <View
            style={{
              width: '100%',
              height: height * 0.05,
              marginVertical: height * 0.025,
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <View
              style={{
                width: width * 0.3,
                borderRadius: 4,
                height: height * 0.04,
                paddingLeft: 5,
              }}>
              <Text style={{color: 'gray', fontWeight: 'bold', fontSize: 20}}>
                {item4}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => onShare()}
              style={{
                width: width * 0.3,
                borderRadius: 4,
                height: height * 0.04,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('../assets/share.png')}
                resizeMode="contain"
                style={{height: 30, width: 30}}
              />
            </TouchableOpacity>
            <View
              style={{
                width: width * 0.3,
                borderRadius: 4,
                height: height * 0.04,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: 'gray', fontWeight: 'bold', fontSize: 20}}>
                {item5}
              </Text>
            </View>
          </View>
          <Text style={{fontSize: 14, marginTop: -15}}>{item3}</Text>
          <Text style={{fontSize: 14, marginVertical: 5}}>{item3}</Text>
          <Text style={{fontSize: 14}}>{item3}</Text>
          <Text style={{fontSize: 14, marginVertical: 5}}>{item3}</Text>

          {/* <FlatList
          data={data.sources}
          keyExtractor={({id}, index) => id}
          renderItem={({item}) => (
            <Text>{item.country + '. ' + item.description}</Text>
          )}
        /> */}
        </View>
      </View>
    </ScrollView>
  );
};
