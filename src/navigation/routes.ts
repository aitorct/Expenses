import {ParsedExpense} from '@models/types';

export type ReceiptsScreenProps = {
  [ROUTES.receipts]: {
    id: string;
    imageUris: string[];
    merchant: string;
    amount: string;
  };
};

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
  receipts = 'Receipts',
}
