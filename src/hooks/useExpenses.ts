import {useEffect, useState} from 'react';
import {UpdateMode} from 'realm';
import {ExpenseRealmContext} from '@contexts/ExpenseRealmContext';
import {fetchExpenses} from '@libs/api';
import {Expense} from '@models/Expense';
import {ExpenseData} from '@models/types';

const {useRealm} = ExpenseRealmContext;

export const LIMIT = 25;

const useExpenses = () => {
  const realm = useRealm();
  const [loadingFirstBatch, setLoadingFirstBatch] = useState(true);
  const [currentOffset, setCurrentOffset] = useState(0);

  useEffect(() => {
    const fetch = async () => {
      const isFirstBatch = currentOffset === 0;
      isFirstBatch && setLoadingFirstBatch(true);
      const request = await fetchExpenses(LIMIT, currentOffset);

      const {expenses} = request.data;

      realm.write(() => {
        isFirstBatch && realm.deleteAll();
        expenses.map((expense: ExpenseData) => {
          realm.create('Expense', Expense.generate(expense), UpdateMode.All);
        });
      });
      isFirstBatch && setLoadingFirstBatch(false);
    };

    fetch();
  }, [currentOffset, realm]);

  const fetchMore = async () => {
    setCurrentOffset(currentOffset + LIMIT);
  };

  return {loadingFirstBatch, fetchMore};
};

export default useExpenses;
