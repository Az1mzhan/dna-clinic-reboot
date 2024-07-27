export const defaultAppointmentCards: AppointmentCard[] = [
  {
    title: "Оставьте заявку",
    paragraphs: [
      "Нажмите на кнопку “Записаться на прием“ и заполните форму.",
      "Это займёт всего лишь 30 секунд.",
    ],
  },
  {
    title: "Мы вам перезвоним",
    paragraphs: [
      "Мы перезвоним вам когда вам удобно.",
      "Мы не отправляем спам-рассылки и рекламы.",
    ],
  },
  {
    title: "Назначим прием",
    paragraphs: [
      "После того как наш оператор свяжется с вами, мы назначим прием в удобное для вас время.",
      "Мы ценим ваше время.",
    ],
  },
];

export interface AppointmentCard {
  title: string;
  paragraphs: string[];
}
