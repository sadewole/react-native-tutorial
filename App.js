import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  Button,
  FlatList,
  Image,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [text, setText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const onChangeText = (val) => {
    setText(val);
  };

  const toggleAddGoalHandler = () => {
    setIsModalVisible((prev) => !prev);
  };

  const onAddGoal = () => {
    if (text) {
      setCourseGoals((prev) => [
        ...prev,
        { text, id: Math.random().toString() },
      ]);
      setText('');
      toggleAddGoalHandler();
    }
  };

  const handleDelete = (val) => {
    setCourseGoals((prev) => prev.filter((go) => go.id !== val));
  };

  return (
    <>
      <StatusBar style='light' />
      <View style={styles.container}>
        <Button
          title='Add New Goal'
          color='#5e08cc'
          onPress={toggleAddGoalHandler}
        />
        <Modal visible={isModalVisible} animationType='slide'>
          <View style={styles.inputContainer}>
            <Image
              source={require('./assets/images/goal.png')}
              style={styles.image}
            />
            <TextInput
              style={styles.textInput}
              placeholder='Your course goal'
              value={text}
              onChangeText={onChangeText}
            />
            <View style={styles.buttonContainer}>
              <View style={styles.button}>
                <Button title='Add Goal' onPress={onAddGoal} color='#5e0acc' />
              </View>
              <View style={styles.button}>
                <Button
                  title='Cancel'
                  onPress={toggleAddGoalHandler}
                  color='#f31282'
                />
              </View>
            </View>
          </View>
        </Modal>
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => (
              <View style={styles.goalItem}>
                <Pressable
                  android_ripple={{ color: '#210644' }}
                  onPress={handleDelete.bind(this, itemData.item.id)}
                >
                  <Text style={styles.goalText}>{itemData.item.text}</Text>
                </Pressable>
              </View>
            )}
            keyExtractor={(item, index) => item.id}
          />
          {/* <ScrollView>
          {courseGoals.map((goal, index) => (
            <View key={index} style={styles.goalItem}>
              <Text style={styles.goalText}>{goal}</Text>
            </View>
          ))}
        </ScrollView> */}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#311b6b',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4e0ff',
    backgroundColor: '#e4e0ff',
    color: '#120438',
    borderRadius: 6,
    width: '100%',
    padding: 16,
  },
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e08cc',
  },
  goalText: { color: '#fff', padding: 8 },
  image: {
    width: 100,
    height: 100,
  },
});
