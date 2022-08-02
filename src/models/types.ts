export interface ObjectExpenseData {
  id: string;
  amount_value: string;
  amount_currency: string;
  date: string;
  date_and_time: string;
  year: number;
  merchant: string;
  receipts: string[];
  comment: string;
  category: string;
  user_name: string;
  user_email: string;
}

export interface ExpenseData {
  id: string;
  amount: {
    value: string;
    currency: string;
  };
  date: string;
  merchant: string;
  receipts: Receipt[];
  comment: string;
  category: string;
  user: {
    first: string;
    last: string;
    email: string;
  };
}

export interface Receipt {
  url: string;
}

export interface ParsedExpense {
  id: string;
  amount: string;
  time: string;
  date: string;
  date_and_time: string;
  year: number;
  merchant: string;
  hasAttachedReceipts: boolean;
  receiptsAmount: number;
  receipts: string[];
  hasComment: boolean;
  comment: string;
  category: string;
  user_name: string;
  user_email: string;
}
