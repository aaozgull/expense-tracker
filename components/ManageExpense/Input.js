import { View, Text, TextInput, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function Input({ label, invalid, style, textInputConfig }) {
  const inputStyle = [styles.input];
  if (textInputConfig && textInputConfig.multiLine) {
    inputStyle.push(styles.multiLine);
  }
  if(invalid){
    inputStyle.push(styles.invalidInput);
  }
  console.log(`${label} ${invalid}`);
  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={[styles.lable, invalid && styles.invalidLabel]}>{label}</Text>
      <TextInput style={inputStyle} {...textInputConfig} />
    </View>
  );
}
export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 8,
    marginHorizontal: 4,
  },
  lable: {
    fontSize: 12,
    color: GlobalStyles.colors.primary100,
    marginBottom: 4,
  },
  input: {
    color: GlobalStyles.colors.primary700,
    backgroundColor: GlobalStyles.colors.primary100,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
  },
  multiLine: {
    minHeight: 100,
    textAlignVertical: "top", /// we get this property fro the doc information
  },
  invalidLabel: {
    color: GlobalStyles.colors.error500,
  },
  invalidInput: {
    backgroundColor: GlobalStyles.colors.error50,
  },
});
