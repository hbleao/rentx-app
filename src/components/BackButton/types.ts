import { PressableProps } from "react-native";

export type BackButtonProps = PressableProps & {
  color?: string;
  onPress: () => void;
}