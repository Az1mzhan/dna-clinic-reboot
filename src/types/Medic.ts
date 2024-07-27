import avatar_1 from "../assets/avatar_1.svg";
import avatar_2 from "../assets/avatar_2.svg";
import avatar_3 from "../assets/avatar_3.svg";
import avatar_4 from "../assets/avatar_4.svg";
import avatar_5 from "../assets/avatar_5.svg";

export const defaultMedics: Medic[] = [
  {
    fullName: "Thumbiko James",
    avatar: avatar_1,
    profession: "Хирург",
    experience: "Около 10 лет",
    receptionType: "free",
  },
  {
    fullName: "Hiro Joyce",
    avatar: avatar_2,
    profession: "Хирург",
    experience: "Около 9 лет",
    receptionType: "paid",
  },
  {
    fullName: "Ceiran Mayo",
    avatar: avatar_3,
    profession: "Гинеколог",
    experience: "Около 7 лет",
    receptionType: "free",
  },
  {
    fullName: "Lloyd Jefferson",
    avatar: avatar_4,
    profession: "Дерматолог",
    experience: "Около 7 лет",
    receptionType: "paid",
  },
  {
    fullName: "Prabodhan Fitzgerald",
    avatar: avatar_5,
    profession: "Медсестра",
    experience: "Более 2 лет",
    receptionType: "paid",
  },
];

export interface Medic {
  fullName: string;
  avatar: string;
  profession: string;
  experience: string;
  receptionType: "free" | "paid";
}
