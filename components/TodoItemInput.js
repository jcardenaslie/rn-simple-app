import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const TodoItemInput = props => {
  const [enteredTodoItem, setTodoItem] = useState("");

  const todoInputHandler = enteredTodoItem => {
    setTodoItem(enteredTodoItem);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Add a task"
        style={styles.input}
        onChangeText={todoInputHandler}
        value={enteredTodoItem}
      />
      <Button
        title="ADD"
        // style={{ width: "20%" }}
        onPress={props.onAddTodoItem.bind(this, enteredTodoItem)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  input: { borderBottomWidth: 1, width: "80%" }
});

export default TodoItemInput;
