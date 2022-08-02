import {StyleProp, TextStyle, ViewStyle} from 'react-native';

interface BaseTag {
  textStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
}

interface IconTextTag extends BaseTag {
  icon: string;
  text: string | number;
}

interface IconTag extends BaseTag {
  icon: string;
  text?: never;
}

interface TextTag extends BaseTag {
  text: string | number;
  icon?: never;
}

export type TagType = IconTextTag | IconTag | TextTag;
