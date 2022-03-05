import { PressableProps } from "react-native";

export type OptionProps = PressableProps & {
  active: boolean;
}

export type OptionTitleProps = {
  active: boolean;
}

export type SelectedOptionsProps = 'dataEdit' | 'passwordEdit';
