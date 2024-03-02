export type QuestionStepProps = {
  type: string;
  question: string;
  stepName: string;
  options: string[];
  selectedOption?: string;
  optionalCta?: {
    to: string;
    label: string;
    icon?: string;
  };
};
