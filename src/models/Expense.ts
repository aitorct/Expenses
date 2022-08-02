import Realm from 'realm';
import {BASE_URL} from '@libs/api';
import {ExpenseData, ParsedExpense} from './types';

export const REALM_SCHEMA = 'Expense';

export class Expense extends Realm.Object {
  id!: string;
  amount_value!: string;
  amount_currency!: string;
  date!: string;
  date_and_time!: string;
  year!: number;
  merchant!: string;
  receipts!: string[];
  comment!: string;
  category!: string;
  user_name!: string;
  user_email!: string;

  static generate(data: ExpenseData) {
    const dateObject = new Date(data.date);

    return {
      id: data.id,
      amount: `${data.amount.value} ${data.amount.currency}`,
      amount_value: data.amount.value,
      amount_currency: data.amount.currency,
      date: dateObject.toLocaleString([], {
        dateStyle: 'short',
      } as Intl.DateTimeFormatOptions),
      date_and_time: data.date,
      year: dateObject.getFullYear(),
      merchant: data.merchant,
      receipts: data.receipts.map(receipt => `${BASE_URL}${receipt.url}`),
      comment: data.comment,
      category: data.category,
      user_name: `${data.user.first} ${data.user.last}`,
      user_email: data.user.email,
    };
  }

  static schema = {
    name: REALM_SCHEMA,
    properties: {
      id: 'string',
      amount_value: 'string',
      amount_currency: 'string',
      date: 'string',
      date_and_time: 'string',
      year: 'int',
      merchant: 'string',
      receipts: 'string[]',
      comment: 'string',
      category: 'string',
      user_name: 'string',
      user_email: 'string',
    },
    primaryKey: 'id',
  };

  get parse(): ParsedExpense {
    const dateObject = new Date(this.date_and_time);

    return {
      id: this.id,
      amount: `${this.amount_value} ${this.amount_currency}`,
      date: this.date,
      time: dateObject.toLocaleTimeString('default', {
        hour: '2-digit',
        minute: '2-digit',
      }),
      date_and_time: this.date_and_time,
      year: this.year,
      merchant: this.merchant,
      hasAttachedReceipts: !!this.receipts.length,
      receiptsAmount: this.receipts.length,
      receipts: this.receipts,
      hasComment: !!this.comment,
      comment: this.comment,
      category: this.category,
      user_name: this.user_name,
      user_email: this.user_email,
    };
  }
}
