import mri from "../assets/mri.svg";

export const defaultEquipment: Equipment = {
  naming: "МРТ",
  features: [
    "1,5 тесла / до 200 кг",
    "3Д/4Д запись исследования",
    "МР Маммография",
    "МРТ всего тело за 1.5 часа",
    "МРТ суставов",
  ],
  icon: mri,
};

export interface Equipment {
  naming: string;
  features: string[];
  icon: string;
}
