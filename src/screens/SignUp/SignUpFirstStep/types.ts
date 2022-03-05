export type SignUpFirstStepProps = {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  driverLicense: string;
  setDriverLicense: React.Dispatch<React.SetStateAction<string>>;
  handleNextStep: () => void;
}
