import { FlatList, Pressable, Text, View, StyleSheet } from 'react-native';

const GoalList = ({ courseGoals, handleDelete }) => {
  return (
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
  );
};

export default GoalList;

const styles = StyleSheet.create({
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e08cc',
  },
  goalText: { color: '#fff', padding: 8 },
});
