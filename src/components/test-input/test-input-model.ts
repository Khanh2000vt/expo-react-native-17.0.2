interface TestViewInputProps {
  title: string;
  onComplete?: (value: string) => void | undefined;
  onChangeText: (value: string) => void;
  value: string | undefined;
}

export type { TestViewInputProps };
