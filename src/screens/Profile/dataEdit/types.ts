import React from "react"

export type DataEditProps = {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  driverLicense: string;
  setDriverLicense: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
  handleConfirmDataUpdate: () => void;
}
