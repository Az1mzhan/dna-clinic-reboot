import home_analyses from "../assets/home_analyses.webp";
import analyses_preparation from "../assets/analyses_preparation.webp";
import getting_results from "../assets/getting_results.webp";
import prices from "../assets/prices.webp";

export const defaultAnalysesMiniCards: AnalysisMiniCard[] = [
  {
    title: "Сдача анализов на дому",
    icon: home_analyses,
    bgColor: "linear-gradient(180deg, #E45B5B 0%, #A3423C 100%)",
    iconWidth: "70px",
    iconHeight: "63px",
  },
  {
    title: "Подготовка к сдаче анализов",
    icon: analyses_preparation,
    bgColor: "linear-gradient(180deg, #EDD96D 0%, #BEA520 100%)",
    iconWidth: "93px",
    iconHeight: "73px",
  },
  {
    title: "Как получить результаты?",
    icon: getting_results,
    bgColor: "linear-gradient(180deg, #FFB255 0%, #D17300 100%)",
    iconWidth: "59px",
    iconHeight: "70px",
  },
  {
    title: "Цены",
    icon: prices,
    bgColor: "linear-gradient(180deg, #43FFA5 0%, #0EA65D 100%)",
    iconWidth: "79px",
    iconHeight: "42px",
  },
];

export interface AnalysisMiniCard {
  title: string;
  icon: string;
  bgColor: string;
  iconWidth: string;
  iconHeight: string;
}
