import { View, Text, ScrollView } from "react-native";
import React from "react";
import styles from "../assets/styles/HomeStyles";

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>👩</Text>
        <Text style={styles.name}>ชื่อนักศึกษา: ธนภรณ์ จำปาทิพย์</Text>
        <Text style={styles.studentID}>รหัสนักศึกษา: 66209010014</Text>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;