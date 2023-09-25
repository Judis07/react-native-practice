import { View, StyleSheet, Text, TextInput } from "react-native";
import colors from "../contants/colors";

const Input = ({
  id,
  label,
  iconPack: IconPack,
  icon,
  iconSize,
  errorText,
  onInputChange,
}) => {
  const onChangeText = (text) => {
    onInputChange && onInputChange(id, text);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        {icon && (
          <IconPack name={icon} size={iconSize || 20} style={styles.icon} />
        )}

        <TextInput style={styles.input} onChangeText={onChangeText} />
      </View>

      {errorText && (
        <View style={styles.errorConatiner}>
          <Text style={styles.errorText}>{errorText}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  label: {
    marginVertical: 8,
    fontFamily: "bold",
    letterSpacing: 0.3,
    color: colors.textColor,
  },
  inputContainer: {
    borderRadius: 2,
    backgroundColor: colors.nearlyWhite,
    paddingHorizontal: 18,
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 12,
    color: colors.grey,
  },
  input: {
    flex: 1,
    fontFamily: "regular",
    letterSpacing: 0.3,
    paddingTop: 0,
  },
  errorConatiner: {
    marginVertical: 5,
  },
  errorText: {
    color: "red",
    fontSize: 13,
    fontFamily: "regular",
  },
});

export default Input;
