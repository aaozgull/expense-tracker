import { StyleSheet, Text, View, Alert } from "react-native";
import Input from "./Input";
import { useState } from "react";
import Button from "../UI/Button";
import { GlobalStyles } from "../../constants/styles";

function ExpenseForm({ submitButtonLable, onCancel, onSubmit, defaultValues }) {
  // console.log(defaultValues);
  const [inputs, setInputs] = useState({
    amount: {
      value: defaultValues ? defaultValues.amount.toString() : "",
      isValid: true, // !!defaultValues,
    },
    date: {
      value: defaultValues ? defaultValues.date.toISOString().slice(0, 10) : "",
      isValid: true, //!!defaultValues,
    },
    description: {
      value: defaultValues ? defaultValues.description : "",
      isValid: true, //!!defaultValues,
    },
  });

  function inputChangedHandler(inputIdentifier, enteredValue) {
    setInputs((curInputValue) => {
      return {
        ...curInputValue,
        [inputIdentifier]: { value: enteredValue, isValid: true },
      };
    });
  }
  function submitHandler() {
    const expenseData = {
      amount: +inputs.amount.value,
      date: new Date(inputs.date.value),
      description: inputs.description.value,
    };

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString() !== "Invalid Date";
    const descriptionIsValid = expenseData.description.trim().length > 0;

    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      //Alert.alert("Invalid Input", "Please check your input");
      setInputs((curInputs) => {
        return {
          amount: { value: curInputs.amount.value, isValid: amountIsValid },
          date: { value: curInputs.date.value, isValid: dateIsValid },
          description: {
            value: curInputs.description.value,
            isValid: descriptionIsValid,
          },
        };
      });
      return;
    }

    onSubmit(expenseData);
  }

  const formIsInvalid =
    !inputs.amount.isValid ||
    !inputs.date.isValid ||
    !inputs.description.isValid;

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expenses </Text>
      <View style={styles.inputRow}>
        <Input
          label="Amount"
          style={styles.rowInput}
          invalid={!inputs.amount.isValid}
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChangedHandler.bind(this, "amount"),
            value: inputs.amount.value, // inputValues["amount"],
          }}
        />
        <Input
          label="Date"
          style={styles.rowInput}
          invalid={!inputs.date.isValid}
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputChangedHandler.bind(this, "date"),
            value: inputs.date.value, // inputValues["amount"],
          }}
        />
      </View>
      <Input
        label="Description"
        invalid={!inputs.description.isValid}
        textInputConfig={{
          multiLine: true,
          // autoCapitalize: "sentences",
          // autoCorrect: false, /// default is true
          onChangeText: inputChangedHandler.bind(this, "description"),
          value: inputs.description.value, // inputValues["amount"],
        }}
      />
      {formIsInvalid && (
        <Text style={styles.errorText}>
          Invalid input values - please check your entered data!
        </Text>
      )}
      <View style={styles.buttons}>
        <Button style={styles.button} onPress={onCancel} mode="flat">
          Cancel
        </Button>
        <Button style={styles.button} onPress={submitHandler}>
          {submitButtonLable}
        </Button>
      </View>
    </View>
  );
}
export default ExpenseForm;

const styles = StyleSheet.create({
  form: {
    marginTop: 40,
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginVertical: 24,
    textAlign: "center",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  errorText: {
    textAlign: "center",
    color: GlobalStyles.colors.error500,
    margin: 8,
  },
});
