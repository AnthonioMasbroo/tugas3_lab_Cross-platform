import { StyleSheet, View, TextInput } from 'react-native';
import Counter from './Counter';
import Profile from './Profile';
import {useState} from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  const [nama, setNama] = useState('');
  const [showProfile, setShowProfile] = useState(false);

  const handleIncrement = () => {setCount(count + 1)};

  const handleDecrement = () => {setCount(count - 1)};

  const handlePassValue = () => setShowProfile(true);

  return (
    <View style={styles.container}>
      {showProfile && <Profile nama={nama} count={count} />}
      <Counter value={count} handleIncrement={handleIncrement} handleDecrement={handleDecrement} handlePassValue={handlePassValue}/>
      <TextInput style={styles.input} type="text" placeholder="Enter your name" value={nama} onChangeText={setNama}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
    width: 200,
    marginBottom: 10,
    marginTop: 10
  }
});
