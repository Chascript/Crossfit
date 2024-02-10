export type DifficultyValue = 1 | 2 | 3 | 4 | 5;

export type Exercise = {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  linkText: string;
  tags: string[];
  difficulty: DifficultyValue;
}
