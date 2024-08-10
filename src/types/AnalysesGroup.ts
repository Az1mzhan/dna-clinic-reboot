export const defaultAnalysesGroups: AnalysesGroup[] = [
  {
    groupTitle: "Онкология",
    analysesNamings: ["Гистология", "Онкомаркеры", "Цитология"],
  },
  {
    groupTitle: "Исследования крови",
    analysesNamings: [
      "Клинические исследования",
      "Биохимия",
      "Иммунология",
      "Гормоны",
    ],
  },
  {
    groupTitle: "Исследования мочи",
    analysesNamings: ["Биохимический анализ", "Общий анализ мочи", "Гормоны"],
  },
  {
    groupTitle: "Аллергии",
    analysesNamings: ["Биохимический анализ", "Общий анализ мочи", "Гормоны"],
  },
];

export interface AnalysesGroup {
  groupTitle: string;
  analysesNamings: string[];
}
