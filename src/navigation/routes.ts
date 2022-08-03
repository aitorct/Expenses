import {ParsedExpense} from '@models/types';

export type StackParamList = {
  [ROUTES.expenses]: undefined;
  [ROUTES.expenseDetail]: undefined;
  [ROUTES.receipts]: {
    id: string;
    imageUris: string[];
    merchant: string;
    amount: string;
  };
  [ROUTES.filters]: undefined;
  [ROUTES.userSelection]: undefined;
};

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
  filters = 'Filters',
  userSelection = 'UserSelection',
}
