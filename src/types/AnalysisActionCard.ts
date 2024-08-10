import calculator from "../assets/calculator.webp";
import complex_analysis from "../assets/complex_analysis.webp";

export const defaultAnalysesActionCards: AnalysisActionCard[] = [
  {
    title: "Калькулятор анализов",
    subtitle: "Быстрый поиск анализов и цен",
    icon: calculator,
    iconWidth: "142px",
    iconHeight: "120px",
  },
  {
    title: "Комплексные анализы",
    subtitle: "Комплексная лабораторная диагностика",
    icon: complex_analysis,
    iconWidth: "176px",
    iconHeight: "135.5px",
  },
];

export interface AnalysisActionCard {
  title: string;
  subtitle: string;
  icon: string;
  iconWidth: string;
  iconHeight: string;
}
