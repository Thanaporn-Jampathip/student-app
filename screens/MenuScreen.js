import { View, Text, ScrollView } from "react-native";
import React from "react";
import styles from "../assets/styles/MenuStyles";

export default function MenuScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>เมนูข้อมูล</Text>
        <View style={styles.menu}>
          <Text style={styles.label}>🕓 สรุปการมาเรียน</Text>
        </View>
        <View style={styles.menu}>
          <Text style={styles.label}>📋 ผลการเรียน</Text>
        </View>
        <View style={styles.menu}>
          <Text style={styles.label}>⭐ ความประพฤติ</Text>
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>เมนูบันทึก</Text>
        <View style={styles.menu}>
          <Text style={styles.label}>📖 การบ้าน</Text>
        </View>
      </View>
    </ScrollView>
  );
}