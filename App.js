import { View, Text, ScrollView } from "react-native";
import React from "react";
import styles from "./assets/styles/AppStyles";
import Header from "./components/Header";
import appInfo from "./data/appinfo";
import StudentCard from "./components/StudentCard";
import studentData from "./data/studentData";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Header
        title={appInfo.title}
        subtitle={appInfo.subtitle}
        schoolName={appInfo.schoolName}
        version={appInfo.version}
      />
      <View style={styles.content}>
        {studentData.map((d) => (
          <StudentCard
            key={d.id}
            emoji={d.emoji}
            name={d.name}
            class={d.class}
            age={d.age}
            hobby={d.hobby}
          />
        ))}
      </View>
    </ScrollView>
  );
}
