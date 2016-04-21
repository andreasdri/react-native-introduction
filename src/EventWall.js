
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';


const API_URL = 'https://barteguiden.no/api/events';


class Event extends Component {
  render() {

    if (!this.props.event) {
      return <Text>Ingen arrangementer :( </Text>
    }

    return (
      <View style={styles.event}>
        <Text style={styles.title}>
          {this.props.event.title}
        </Text>
        <Image style={styles.image} source={{uri: this.props.event.imageUrl}}/>
      </View>
    );
  }
}

class EventWall extends Component {
  constructor() {
    super();
    this.state = {events: []};
  }

  render() {
    let events = this.state.events.filter((event) => event.venue.name === 'Studentersamfundet');

    return (
      <View style={styles.container}>
        <ScrollView>
          {events.map((event) => {
            return <Event event={event} key={event._id}/>
          })}
        </ScrollView>
      </View>
    );
  }

  componentDidMount() {
    let events = fetch(API_URL)
          .then((response) => response.json())
          .then((responseInJson) => {
            this.setState({events: responseInJson})
          })
          .catch((error) => {
            // do something with the error
            console.error(error);
          });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 49,
  },
  event: {
    height: 100,
    margin: 10,
    backgroundColor: '#D3D3D3',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'black',
  },
  image: {
    height: 50,
  }
});

export default EventWall;
