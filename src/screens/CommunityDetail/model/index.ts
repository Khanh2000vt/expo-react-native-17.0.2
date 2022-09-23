interface IFilter {
  minAge: string;
  maxAge: string;
  gender: string;
}

interface IGender {
  id: number;
  label: string;
  value: string;
}

export type { IFilter, IGender };
