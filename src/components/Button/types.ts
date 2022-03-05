import { PressableProps } from "react-native"

export type ButtonProps = {
  title: string;
  color?: string;
  bgColor?: string;
  colorLoader?: string;
  enabled?: boolean;
  loading?: boolean;
  onPress?: () => void;
}

export type ContainerProps = PressableProps & {
  bgColor?: string;
}

export type TextProps = {
  color?: string;
}
