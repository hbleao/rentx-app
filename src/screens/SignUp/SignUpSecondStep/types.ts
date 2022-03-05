export type SignUpSecondStepProps = {
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  confirmPassword: string;
  setConfirmPassword: React.Dispatch<React.SetStateAction<string>>;
  isLoadingRegister: boolean;
  handleConfirmRegister: () => void;
}
