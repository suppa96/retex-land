import type { QuestionStepProps } from "../molecules/MoleculesQuestionStep.props";

type Step = QuestionStepProps;

export type ScrollStepperProps = {
  steps: Step[];
  currentStep: string;
};
