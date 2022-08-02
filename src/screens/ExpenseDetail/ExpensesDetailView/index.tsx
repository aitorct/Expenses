// This is to avoid breaking React Native's hot reloading when working with native components

import {HostComponent, requireNativeComponent, ViewStyle} from 'react-native';

interface ExpensesDetailViewProps {
  style: ViewStyle;
  merchant: string;
  amount: string;
  date: string;
  userName: string;
  userEmail: string;
  comment: string;
  hasAttachedReceipts: boolean;
  onReceiptsButtonPress: () => void;
}

const ExpensesDetailView: HostComponent<ExpensesDetailViewProps> =
  requireNativeComponent('ExpensesDetailView');

export default ExpensesDetailView;
