export type QuestionStepProps = {
  id: number;
  type: string;
  currentIndex?: number;
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
