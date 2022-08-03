import {ExpenseRealmContext} from '@contexts/ExpenseRealmContext';
import {FilterType} from '@contexts/FiltersContext/types';
import {Expense} from '@models/Expense';
import {ObjectExpenseData} from '@models/types';

const {useQuery} = ExpenseRealmContext;

type QueryableFilters = Exclude<FilterType, FilterType.RECEIPTS>;

type Queries = {
  [key in QueryableFilters]: {
    query: string;
    mapProperty: keyof ObjectExpenseData;
  };
};

const filterQueryTemplates: Queries = {
  year: {
    query: 'TRUEPREDICATE SORT(year DESC) DISTINCT(year)',
    mapProperty: 'year',
  },
  user: {
    query: 'TRUEPREDICATE SORT(user_name DESC) DISTINCT(user_name)',
    mapProperty: 'user_name',
  },
};

const useFilterData = (filterType: QueryableFilters) => {
  const results = useQuery(Expense);

  const {query, mapProperty} = filterQueryTemplates[filterType];

  const filteredResult = results
    .filtered(query)
    .map((item: ObjectExpenseData) => item[mapProperty].toString());

  return {filterData: filteredResult};
};

export default useFilterData;
