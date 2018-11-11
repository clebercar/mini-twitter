import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Timeline extends Component {
  static navigationOptions = {
    title: "Início",
    headerRigth: (
      <TouchableOpacity onPress={() => {}}>
      <Icon
        style={{ marginRIgth: 20 }}
        name="add-circle-outline"
        size={24}
        color="#4BB0EE"
      />
      </ TouchableOpacity>
    ),
  };

  render() {
    return (
      <View style={styles.container}>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  }
});

