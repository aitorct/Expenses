import {ExpenseRealmContext} from '@contexts/ExpenseRealmContext';
import {FilterType} from '@contexts/FiltersContext/types';
import {Expense} from '@models/Expense';
import {ParsedExpense} from '@models/types';
import {
  ReceiptsFilterOptions,
  ReceiptsFilterStatus,
} from '@screens/Filters/components/Receipts';
import {useFilters} from './useFilters';

const {useQuery} = ExpenseRealmContext;

type Queries = {
  [key in FilterType]: (value: string) => string;
};

const filterQueryTemplates: Queries = {
  year: (value: string) => `year == ${value}`,
  user: (value: string) => `user_name == "${value}"`,
  receipts: (value: string) => {
    const attachedOption = ReceiptsFilterOptions.find(
      option => option.id === ReceiptsFilterStatus.attached,
    );
    const operatorValue = value === attachedOption?.value ? '> 0' : '== 0';
    return `receipts.@count ${operatorValue}`;
  },
};

const useFilteredData = () => {
  const {filters} = useFilters();

  const result = useQuery(Expense);
  const distinctExpensesByDate = result.filtered(
    'TRUEPREDICATE SORT(date_and_time DESC) DISTINCT(date)',
  );

  const filteredData = (
    Object.keys(filterQueryTemplates) as FilterType[]
  ).reduce((request, currentFilter) => {
    const filterValue = filters[currentFilter].value?.toString();
    if (!filterValue) {
      return request;
    }

    return request.filtered(filterQueryTemplates[currentFilter](filterValue));
  }, distinctExpensesByDate);

  // We need to process the data to provide it with the requested format for the FlashList
  // https://shopify.github.io/flash-list/docs/guides/section-list/
  const data: (ParsedExpense | string)[] = [];
  filteredData.forEach(distinctExpense => {
    data.push(distinctExpense.date_and_time);
    filteredData
      .filtered('date = $0 SORT(date_and_time DESC)', distinctExpense.date)
      .forEach(expense => data.push(expense.parse));
  });

  return {data};
};

export default useFilteredData;
