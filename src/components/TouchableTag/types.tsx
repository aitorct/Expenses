import {FlexStyle, StyleProp, TextStyle} from 'react-native';

export interface Props {
  text: string;
  onPress: () => void;
  active: boolean;
  textStyle: StyleProp<TextStyle>;
  buttonStyle: StyleProp<FlexStyle>;
}
