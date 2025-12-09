import { View, Text, ScrollView } from "react-native";
import React from "react";
import studentData from "../data/studentData";
import styles from '../assets/styles/AllStudentStyles'
import StudentCard from "../components/StudentCard";

const AllStudentScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {studentData.map((S) => (
        <StudentCard
          key={S.id}
          emoji={S.emoji}
          name={S.name}
          class={S.class}
          age={S.age}
          hobby={S.hobby}
        />
      ))}
    </ScrollView>
  );
};

export default AllStudentScreen;