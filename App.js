import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalList from './components/GoalList';

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  const toggleAddGoalHandler = () => {
    setIsModalVisible((prev) => !prev);
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
        <GoalInput
          isModalVisible={isModalVisible}
          toggleAddGoalHandler={toggleAddGoalHandler}
          setCourseGoals={setCourseGoals}
        />
        <GoalList courseGoals={courseGoals} handleDelete={handleDelete} />
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
});
