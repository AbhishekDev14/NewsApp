import * as React from 'react';
import {View, Text, FlatList, RefreshControl} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import News from './screens/News';
import Home from './Home';

const Offer = [
  {
    id: '1',
    OfferImage: require('./assets/1.jpg'),
    description:
      'Lorem Ipsum is simply dummy text of the printing and type setting industry.',
    explanation:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage',
    country: 'Singapore',
    date: '6 July 2020',
  },
  {
    id: '2',
    OfferImage: require('./assets/2.jpg'),
    description:
      'Lorem Ipsum is simply dummy text of the printing and type setting industry.',
    explanation:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable If you are going to use a passage of Lorem Ipsum you need to be sure there anything embarrassing hidden in the middle ',
    country: 'London',
    date: '22 May 2020',
  },
  {
    id: '3',
    OfferImage: require('./assets/3.jpg'),
    description:
      'Lorem Ipsum is simply dummy text of the printing and type setting industry.',
    explanation:
      'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable',
    country: 'America',
    date: '23 Dec 2020',
  },
  {
    id: '4',
    OfferImage: require('./assets/4.jpg'),
    description:
      'Lorem Ipsum is simply dummy text of the printing and type setting industry.',
    explanation:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    country: 'Italy',
    date: '22 Aug 2020',
  },
  {
    id: '5',
    OfferImage: require('./assets/5.jpg'),
    description:
      'Lorem Ipsum is simply dummy text of the printing and type setting industry.',
    explanation:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem',
    country: 'UAE',
    date: '22 May 2020',
  },
  {
    id: '6',
    OfferImage: require('./assets/6.jpg'),
    description:
      'Lorem Ipsum is simply dummy text of the printing and type setting industry.',
    explanation:
      'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain',
    country: 'Nigeria',
    date: '22 Jan 2020',
  },
];

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 20, marginTop: 10, fontWeight: 'bold'}}>
        {'News'}
      </Text>
      <FlatList
        data={Offer}
        keyExtractor={(item, index) => index.toString()}
        maxToRenderPerBatch={4}
        initialNumToRender={4}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => (
          <Home navigation={navigation} item={item} />
        )}
        refreshControl={<RefreshControl tintColor={'green'} />}
      />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="News"
          component={News}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
