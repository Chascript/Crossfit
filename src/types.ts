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

export type Bullets = {
  position: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  heading: string;
  description: string;
}

export type AccorItem = {
  id: number;
  question: string;
  answer: string;
}
