import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f3dbe9ff",
    minHeight: height,
  },
  content: {
    marginTop: 20,
    marginRight: 20,
    marginLeft: 20,
    borderRadius: 20,
    backgroundColor: "#fff",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    paddingTop: 15,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    marginBottom: 5,
    fontWeight: 600,
  },
  menu: {
    padding: 15,
    backgroundColor: "#faf8f8ff",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    marginBottom: 8,
    borderRadius: 15,
  },
  menuLogout: {
    padding: 15,
    backgroundColor: "#d52a2aff",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    marginBottom: 8,
    borderRadius: 15,
  },
  label: {
    fontSize: 18,
  },
  labelLogout: {
    fontSize: 18,
    color: "white",
  },
});

export default styles;