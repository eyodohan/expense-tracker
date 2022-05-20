import { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { ExpensesContext } from '../store/expenses-context';

function AllExpenses() {
  const expensesCtx = useContext(ExpensesContext);
  return (
    <ExpensesOutput
      expensesPeriod='Total'
      expenses={expensesCtx.expenses}
      fallbackText='No registered expenses found.'
    />
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default AllExpenses;
