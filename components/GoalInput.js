import { useState } from 'react';
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

const GoalInput = ({
  isModalVisible,
  toggleAddGoalHandler,
  setCourseGoals,
}) => {
  const [text, setText] = useState('');

  const onChangeText = (val) => {
    setText(val);
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

  return (
    <Modal visible={isModalVisible} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image
          source={require('../assets/images/goal.png')}
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
  );
};

export default GoalInput;

const styles = StyleSheet.create({
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
  image: {
    width: 100,
    height: 100,
  },
});
