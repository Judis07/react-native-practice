import { StyleSheet, View } from "react-native";

const PageContainer = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
    // justifyContent: "center",
  },
});

export default PageContainer;
