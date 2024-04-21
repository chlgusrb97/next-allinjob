export type CompetitionCategory = {
  id: string;
  category: string;
  keywords: string[];
};

export interface CompetitionMenu {
  menuName: string;
  categories: CompetitionCategory[];
}
