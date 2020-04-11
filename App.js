import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';



export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [goalsList, setGoalsList] = useState([]);
  const onAddGoalHandler = () => {
    if (enteredGoal.trim()) {
      setGoalsList(currentGoalList => [...currentGoalList, enteredGoal]);
      setEnteredGoal('');
    }
  }
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter Your Goal"
          style={styles.input}
          onChangeText={txt => setEnteredGoal(txt)}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={onAddGoalHandler} />
      </View>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={goalsList}
        renderItem={itemData => (
          <View style={styles.listItem}>
            <Text >{itemData.item}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { padding: 50 },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 10
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  }
});