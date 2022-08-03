import {ParsedExpense} from '@models/types';

export type ExpenseScreenProps = {
  [ROUTES.expenseDetail]: ExpenseDetailScreenParams;
};

export interface ExpenseDetailScreenParams {
  expense: Pick<
    ParsedExpense,
    'merchant' | 'amount' | 'date' | 'user_name' | 'user_email' | 'comment'
  >;
}

export enum ROUTES {
  expenses = 'Expenses',
  expenseDetail = 'ExpenseDetail',
}
