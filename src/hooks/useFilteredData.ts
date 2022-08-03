import {ExpenseRealmContext} from '@contexts/ExpenseRealmContext';
import {Expense} from '@models/Expense';
import {ParsedExpense} from '@models/types';

const {useQuery} = ExpenseRealmContext;

const useFilteredData = () => {
  const result = useQuery(Expense);
  const distinctExpensesByDate = result.filtered(
    'TRUEPREDICATE SORT(date_and_time DESC) DISTINCT(date)',
  );

  // We need to process the data to provide it with the requested format for the FlashList
  // https://shopify.github.io/flash-list/docs/guides/section-list/
  const data: (ParsedExpense | string)[] = [];
  distinctExpensesByDate.forEach(distinctExpense => {
    data.push(distinctExpense.date_and_time);
    distinctExpensesByDate
      .filtered('date = $0 SORT(date_and_time DESC)', distinctExpense.date)
      .forEach(expense => data.push(expense.parse));
  });

  return {data};
};

export default useFilteredData;
