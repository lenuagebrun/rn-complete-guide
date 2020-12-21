import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  return(
    <View style={styles.style2}>
    <TextInput
      placeholder="Course Goal"
      style={styles.textInput}
      onChangeText={goalInputHandler}
      value={enteredGoal}
    />
    <Button title="ADD" onPress={props.onAddGoal.bind(this, enteredGoal)} />
  </View>
  )
}

const styles = StyleSheet.create({
  style2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch'
  },
  textInput: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1
  }
})

export default GoalInput;