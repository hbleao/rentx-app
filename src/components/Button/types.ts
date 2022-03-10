import { TouchableOpacityProps } from "react-native"

export type ButtonProps = {
  title: string;
  color?: string;
  bgColor?: string;
  colorLoader?: string;
  enabled?: boolean;
  loading?: boolean;
  onPress?: () => void;
}

export type ContainerProps = TouchableOpacityProps & {
  bgColor?: string;
}

export type TextProps = {
  color?: string;
}
