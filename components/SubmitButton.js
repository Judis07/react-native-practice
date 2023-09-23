import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../contants/colors";

const SubmitButton = ({ color, title, onPress, disabled, customStyles }) => {
  const enabledBgColor = color || colors.primary;
  const disabledBgColor = colors.lightGrey;
  const bgColor = disabled ? disabledBgColor : enabledBgColor;
  return (
    <TouchableOpacity
      onPress={disabled ? () => {} : onPress}
      style={{ ...styles.button, ...customStyles, backgroundColor: bgColor }}
    >
      <Text
        style={{
          color: disabled ? colors.grey : "white",
          fontFamily: "medium",
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "medium",
  },
});

export default SubmitButton;
