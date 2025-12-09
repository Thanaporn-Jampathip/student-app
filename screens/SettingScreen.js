import { View, Text, ScrollView } from "react-native";
import React from "react";
import styles from "../assets/styles/SettingStyles";

export default function SettingScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.menu}>
          <Text style={styles.label}>👩 ข้อมูลส่วนตัว</Text>
        </View>
        <View style={styles.menu}>
          <Text style={styles.label}>🔒 มโยบายความเป็นส่วนตัว</Text>
        </View>
        <View style={styles.menu}>
          <Text style={styles.label}>⚙️ ภาษา</Text>
        </View>
        <View style={styles.menu}>
          <Text style={styles.label}>🔔 ตั้งค่าการแจ้งเตือน</Text>
        </View>
        <View style={styles.menu}>
          <Text style={styles.label}>📙 คู่มือการใช้งาน</Text>
        </View>
        <View style={styles.menu}>
          <Text style={styles.label}>📞 ติดต่อฝ่ายลูกค้าสัมพันธ์</Text>
        </View>
        <View style={styles.menu}>
          <Text style={styles.label}>🖥️ เวอร์ชั่น</Text>
        </View>
        <View style={styles.menuLogout}>
          <Text style={styles.labelLogout}>ออกจากระบบ</Text>
        </View>
      </View>
    </ScrollView>
  );
}