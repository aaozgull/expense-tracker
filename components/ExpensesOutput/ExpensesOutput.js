import { Text, View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

/* const DUMMY_EXPENSE = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 56.89,
    date: new Date("2021-12-19"),
  },
  {
    id: "e2",
    description: "A pair of socks",
    amount: 36.89,
    date: new Date("2022-1-05"),
  },
  {
    id: "e3",
    description: "some bananas",
    amount: 5.89,
    date: new Date("2021-12-1"),
  },
  {
    id: "e4",
    description: "A book",
    amount: 15.89,
    date: new Date("2022-02-9"),
  },
  {
    id: "e5",
    description: "A book",
    amount: 25.89,
    date: new Date("2022-10-9"),
  },
]; */

function ExpensesOutput({ expenses, expensePeriod, fallBackText }) {
  let content = <Text style={styles.infoText}>{fallBackText}</Text>;
  if (expenses.length > 0) {
    content = <ExpensesList expenses={expenses /* DUMMY_EXPENSE */} />;
  }
  return (
    <View style={styles.container}>
      <ExpensesSummary
        expenses={expenses /* DUMMY_EXPENSE */}
        periodName={expensePeriod}
      />
      {content}
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    paddingHorizontal: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  infoText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    marginTop: 32,
  },
});
