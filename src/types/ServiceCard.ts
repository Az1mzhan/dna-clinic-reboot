import service_1 from "../assets/service_1.svg";
import service_2 from "../assets/service_2.svg";
import service_3 from "../assets/service_3.svg";
import service_4 from "../assets/service_4.svg";
import service_5 from "../assets/service_5.svg";
import service_6 from "../assets/service_6.svg";
import service_7 from "../assets/service_7.svg";
import service_8 from "../assets/service_8.svg";
import service_9 from "../assets/service_9.svg";
import service_10 from "../assets/service_10.svg";
import service_11 from "../assets/service_11.svg";
import service_12 from "../assets/service_12.svg";

export const defaultServicesCards: ServiceCard[] = [
  {
    title: "Диагностика",
    icon: service_1,
  },
  {
    title: "Консультации специалистов",
    icon: service_2,
  },
  {
    title: "Хирургическое лечение",
    icon: service_3,
  },
  {
    title: "Анализы",
    icon: service_4,
  },
  {
    title: "Услуги стационара",
    icon: service_5,
  },
  {
    title: "Процедурный кабинет",
    icon: service_6,
  },
  {
    title: "Комплексные программы",
    icon: service_7,
  },
  {
    title: "Услуги на дому",
    icon: service_8,
  },
  {
    title: "Вакцинация",
    icon: service_9,
  },
  {
    title: "Экстренная хирургическая помощь",
    icon: service_10,
  },
  {
    title: "Скорая помощь",
    icon: service_11,
  },
  {
    title: "Лекарства",
    icon: service_12,
  },
];

export interface ServiceCard {
  title: string;
  icon: string;
}
