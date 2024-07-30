import { CallbackFunctionVariadicAnyReturn } from "./CallbackFunctionVariadicAnyReturn";
import banner_1 from "../assets/banner_1.svg";
import banner_2 from "../assets/banner_2.svg";
import banner_3 from "../assets/banner_3.svg";
import banner_4 from "../assets/banner_4.svg";
import banner_5 from "../assets/banner_5.svg";

export const defaultServiceBanners: ServiceBanner[] = [
  {
    title: "Эндоскопия",
    icon: banner_1,
    bgColor: "#3C79FF",
    description:
      "Благодаря современному видеооборудованию эндоскопия дает возможность врачу провести тщательный визуальный осмотр слизистых оболочек внутренних органов пациента.",
    containerWidth: "423px",
    serviceButtons: [
      {
        text: "Капсульная эндоскопия",
        width: "230px",
      },
      {
        text: "Колоноскопия",
        width: "149px",
      },
      {
        text: "Гастроскопия",
        width: "119px",
      },
      {
        text: "Бронхоскопия",
        width: "128px",
      },
      {
        text: "Гастроскопия",
        width: "119px",
      },
    ],
  },
  {
    title: "Функциональная диагностика",
    icon: banner_2,
    bgColor:
      "linear-gradient(0deg, rgba(161, 161, 161, 0.44), rgba(161, 161, 161, 0.44)), #ff0000",
    btnColor: "#E45B5B",
    description:
      "Методы функциональной диагностики направлены на определение функционального состояния жизненно важных органов и систем человека",
    containerWidth: "500px",
    serviceButtons: [
      {
        text: "ЭКГ",
        width: "79px",
      },
      {
        text: "ЭЭГ",
        width: "79px",
      },
      {
        text: "ЭХОКГ",
        width: "182px",
      },
      {
        text: "Холтер",
        width: "98px",
      },
      {
        text: "ЭХО-ЭГ",
        width: "98px",
      },
      {
        text: "Тредмил-тест",
        width: "123px",
      },
      {
        text: "Велоэргометрия",
        width: "148px",
      },
      {
        text: "РЭГ",
        width: "80px",
      },
      {
        text: "КТГ",
        width: "80px",
      },
    ],
  },
  {
    title: "Медосмотр для взрослых",
    icon: banner_3,
    bgColor:
      "linear-gradient(0deg, rgba(161, 161, 161, 0.44), rgba(161, 161, 161, 0.44)), #000000",
    btnColor: "#474747",
    description:
      "Профессиональный медосмотр включает анализы, ЭКГ, УЗИ, флюорографию и консультацию терапевта. Заботимся о вашем здоровье и своевременной профилактике заболеваний.",
    serviceButtons: [
      {
        text: "Консультация терапевта",
        width: "237px",
      },
      {
        text: "Анализы",
        width: "84px",
      },
      {
        text: "Флюорография",
        width: "142px",
      },
      {
        text: "УЗИ",
        width: "88px",
      },
      {
        text: "ЭКГ",
        width: "79px",
      },
    ],
  },
  {
    title: "Медосмотр для детей",
    icon: banner_4,
    bgColor:
      "linear-gradient(0deg, rgba(161, 161, 161, 0.44), rgba(161, 161, 161, 0.44)), #8ADA55",
    btnColor: "#94C177",
    description:
      "Комплексный медосмотр для детей включает анализы, УЗИ, ЭКГ, флюорографию (если необходимо) и осмотр у педиатра. Обеспечьте здоровье и благополучие вашего ребенка с нашими профессиональными услугами.",
    remark: "УЗИ, ЭКГ и другие анализы проводятся только при необходимости.",
    serviceButtons: [
      {
        text: "Осмотр у педиатра",
        width: "229px",
      },
      {
        text: "Анализы*",
        width: "91px",
      },
      {
        text: "Флюорография",
        width: "149px",
      },
      {
        text: "УЗИ*",
        width: "82px",
      },
      {
        text: "ЭКГ*",
        width: "77px",
      },
    ],
  },
  {
    title: "Комплексное обследование",
    icon: banner_5,
    bgColor:
      "linear-gradient(0deg, rgba(161, 161, 161, 0.44), rgba(161, 161, 161, 0.44)), linear-gradient(92.5deg, #50DFB8 0.15%, #94C177 97.91%)",
    btnColor: "#92B792",
    description:
      "Полный медосмотр для всех членов семьи: анализы, УЗИ, ЭКГ, флюорография и консультации специалистов. Поддерживаем здоровье и благополучие вашей семьи.",
    serviceButtons: [
      {
        text: "Консультация специалистов",
        width: "258px",
      },
      {
        text: "Анализы",
        width: "84px",
      },
      {
        text: "Флюорография",
        width: "154",
      },
      {
        text: "УЗИ",
        width: "88px",
      },
      {
        text: "ЭКГ",
        width: "85px",
      },
    ],
  },
];

export interface ServiceButton {
  text: string;
  width: string;
  height?: string;
  onClick?: CallbackFunctionVariadicAnyReturn;
}

export interface ServiceBanner {
  title: string;
  icon: string;
  bgColor: string;
  btnColor?: string;
  description: string;
  containerWidth?: string;
  remark?: string;
  serviceButtons: ServiceButton[];
}
