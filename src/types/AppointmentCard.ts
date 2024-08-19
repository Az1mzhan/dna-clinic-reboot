export const defaultAppointmentCards: AppointmentCard[] = [
  {
    title: "Заполнение формы ",
    paragraphs: [
      'Для заявки заполните форму нажав на кнопку "Записаться на прием".',
    ],
  },
  {
    title: "Подтверждение записи",
    paragraphs: [
      "Оператор клиники осуществит телефонный звонок пациенту для подтверждения в течение дня",
    ],
  },
  {
    title: "Назначение приема",
    paragraphs: [
      "Оператор назначит удобное для пациента время приема и закрепит информацию в базе",
    ],
  },
];

export interface AppointmentCard {
  title: string;
  paragraphs: string[];
}
