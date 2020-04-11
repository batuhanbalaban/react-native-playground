import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import InputModal from './components/InputModal';

export default function App() {
  const [goalsList, setGoalsList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const onAddGoalHandler = (goalText) => {
    if (goalText.trim()) {
      setGoalsList(currentGoalList => [...currentGoalList, goalText]);
      setModalVisible(false);
    }
  }
  const onCancelHandler = (goalText) => {
    setModalVisible(false);
  }
  const removeItem = (index) => {
    setGoalsList(currentGoalList => {
      currentGoalList.splice(index, 1);
      return [...currentGoalList];
    });
  }
  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setModalVisible(true)} />
      <InputModal 
      visible={modalVisible} 
      onAdd={(txt) => onAddGoalHandler(txt)} 
      onCancel={onCancelHandler}
      />
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={goalsList}
        renderItem={itemData => (
          <GoalItem onDelete={() => removeItem(itemData.index)} item={itemData.item} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { padding: 50 },
});