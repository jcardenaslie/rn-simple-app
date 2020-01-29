import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Text,
  FlatList
} from "react-native";

import TodoItem from "./components/TodoItem";
import TodoItemInput from "./components/TodoItemInput";

export default function App() {
  const [todoList, setTodoList] = useState([]);

  const addTodoItemHandler = todoItem => {
    setTodoList(currentTodoList => [
      ...todoList,
      { id: Math.random().toString(), value: todoItem }
    ]);
    // setTodoItem("");
  };

  const removeTodoItemHandler = id => {
    setTodoList(todoList => {
      return todoList.filter(todoItem => todoItem.id !== id);
    });
  };

  return (
    <View style={styles.screen}>
      {/* Todo input */}
      <TodoItemInput onAddTodoItem={addTodoItemHandler} />

      {/* List of todo items */}
      <FlatList
        style={styles.todoList}
        keyExtractor={(item, index) => item.id}
        data={todoList}
        renderItem={itemData => (
          <TodoItem
            id={itemData.item.id}
            onDelete={removeTodoItemHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { padding: 30, paddingTop: 50 },
  todoList: {
    marginTop: 20,
    paddingTop: 10,
    alignContent: "stretch",
    height: "80%",
    width: "100%"
  }
});
