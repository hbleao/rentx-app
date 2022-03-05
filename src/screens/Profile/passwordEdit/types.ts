import React from "react"

export type PasswordEditProps = {
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  currentPassword: string;
  setCurrentPassword: React.Dispatch<React.SetStateAction<string>>;
  confirmPassword: string;
  setConfirmPassword: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
  handleConfirmPasswordUpdate: () => void;
}
