import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f3dbe9ff",
    minHeight: height,
  },
  content: {
    margin: 20,
    borderRadius: 20,
    backgroundColor: "#fff",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    paddingTop: 15,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
  },
  name: {
    textAlign: "center",
    fontSize: 16,
    marginBottom: 5,
  },
  studentID: {
    textAlign: "center",
    fontSize: 16,
  },
  emoji: {
    fontSize: 50,
    marginBottom: 15,
    textAlign: "center",
  },
});

export default styles;