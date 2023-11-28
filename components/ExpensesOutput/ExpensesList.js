import { View, FlatList, Text } from "react-native";
import ExpenseItem from "./ExpenseItem";
function renderExpenseItem(itemData) {
  const item = itemData.item;
  return (
    <ExpenseItem {...itemData.item} />
   /*  <ExpenseItem
      description={item.description}
      date={item.data}
      amount={item.amount}
    /> */
  );
  {
    /* <Text>{itemData.item.description}</Text> */
  }
}

function ExpensesList({ expenses }) {
  return (
    <View>
      <FlatList
        data={expenses}
        renderItem={renderExpenseItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default ExpensesList;
