import React, {useState, Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const Counter = () => {
  const [number, setNumber] = useState(0);
  return (
    <View>
      <Text>{number}</Text>
      <Button title="TAMBAH" onPress={() => setNumber(number + 1)} />
    </View>
  );
};

const StateDinamis = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.textTitle}>Materi Component State Dinamis</Text>
      <Text style={styles.titleSection}>Function Component (Hooks)</Text>
      <Counter />
      <Text style={styles.titleSection}>Class Component</Text>
      <CounterClass />
    </View>
  );
};

class CounterClass extends Component {
  state = {
    number: 0,
  };
  render() {
    return (
      <View>
        <Text>{this.state.number}</Text>
        <Button
          title="TAMBAH"
          onPress={() => this.setState({number: this.state.number + 1})}
        />
      </View>
    );
  }
}

export default StateDinamis;

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
  },
  textTitle: {
    textAlign: 'center',
  },
  titleSection: {
    marginBottom: 20,
  },
});
