import shots2Video from "../assets/shots-2-igor-zhilenko-tech.mp4?url";

export type PortfolioItem = {
  title?: string;
  category: string;
  desc: string;
  bg: string;
  format: "16:9" | "9:16";
  videoSrc?: string;
  playUrl?: string;
};

export const portfolio: PortfolioItem[] = [
  {
    title: "Фильм о производстве «Батыр-Бройлер»",
    category: "Документальный фильм",
    desc: "Производственный фильм о семейном бизнесе: съёмка, монтаж и пост-продакшен.",
    bg: "#1a1a1a",
    format: "16:9",
    videoSrc: new URL(
      "../assets/Семейное наследие. Батыр-Бройлер, для эфира (2).mp4",
      import.meta.url
    ).href,
    playUrl:
      "https://drive.google.com/file/d/1kd2auKsbDB1yYx7qe-Znmk_JjyQUE2rc/view?usp=sharing",
  },
  {
    title: "Подкаст «По стройке смирно»",
    category: "Подкаст",
    desc: "",
    bg: "#1a1a1a",
    format: "16:9",
    videoSrc: new URL(
      "../assets/podcast-po-stroyke-smirno-1.mp4",
      import.meta.url
    ).href,
  },
  {
    title: "Игорь Жиленко",
    category: "Интервью",
    desc: "Основатель «Экомобайл» — о том, как не отставать от технологий.",
    bg: "#111",
    format: "9:16",
    videoSrc: shots2Video,
    playUrl:
      "https://drive.google.com/file/d/1_NW4_2RlwB9LrCVnWW2AWI7o17JCYR7Q/view?usp=sharing",
  },
  {
    title: "Тизер «Сады Придонья»",
    category: "Тизер",
    desc: "«Сады Придонья».",
    bg: "#0d0d0d",
    format: "16:9",
    videoSrc: new URL(
      "../assets/Тизер Сады Придонья 2.mp4",
      import.meta.url
    ).href,
    playUrl:
      "https://drive.google.com/file/d/15bZisnlN92i3fI8G6vr1jzW6N8-rJG4H/view?usp=sharing",
  },
  {
    title: "Подкаст с Петром Самохиным",
    category: "Подкаст",
    desc: "Первый вице-президент по продажам компании «Сады Придонья».",
    bg: "#0d0d0d",
    format: "16:9",
    videoSrc: new URL("../assets/Тизер-start-2-5.mp4", import.meta.url).href,
  },
  {
    title: "Подкаст «Экономика решений» — Алексей Телков",
    category: "Интервью",
    desc: "",
    bg: "#0d0d0d",
    format: "16:9",
    videoSrc: new URL(
      "../assets/Экономика решений Алексей Телков HD.mp4",
      import.meta.url
    ).href,
  },
  {
    title: "Подкаст «Экономика решений» — Эльдар Мамедов",
    category: "Интервью",
    desc: "",
    bg: "#1a1a1a",
    format: "16:9",
    videoSrc: new URL(
      "../assets/Экономика решений Эльдар Мамедов HD.mp4",
      import.meta.url
    ).href,
  },
];
