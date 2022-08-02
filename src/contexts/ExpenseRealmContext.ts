import {createRealmContext} from '@realm/react';
import {Expense} from '@models/Expense';

export const ExpenseRealmContext = createRealmContext({
  schema: [Expense],
  deleteRealmIfMigrationNeeded: true,
});
