import portraitNight from "@/assets/IMG_20260902_190725_482.jpg.asset.json";
import cityNight from "@/assets/IMG_20260902_190713_102.jpg.asset.json";
import rooftop from "@/assets/IMG_20260902_190720_050.jpg.asset.json";
import street from "@/assets/IMG_20260902_190730_680.jpg.asset.json";
import mountains from "@/assets/IMG_20260902_190746_341.jpg.asset.json";
import temple from "@/assets/IMG_20260902_190316_970.jpg.asset.json";

export const photos = {
  hero: portraitNight.url,
  aboutMain: cityNight.url,
  aboutSecondary: street.url,
  rooftop: rooftop.url,
  mountains: mountains.url,
  temple: temple.url,
};

/** Все фотографии — это Риана, основатель Riana Admissions. */
export const rianaGallery = [
  { src: portraitNight.url, caption: "Риана — основатель Riana Admissions" },
  { src: cityNight.url, caption: "Риана в Шанхае — здесь начинается путь студентов" },
  { src: rooftop.url, caption: "Риана на встрече со студентами" },
  { src: street.url, caption: "Риана между консультациями" },
  { src: mountains.url, caption: "Риана в поездке по Китаю" },
  { src: temple.url, caption: "Риана: культура и жизнь в Китае изнутри" },
];

export const CONTACT = {
  instagram: "https://www.instagram.com/riana.china?stkn=MTR5NzMxM293eHBkcg==",
  instagramHandle: "@riana.china",
  whatsappGroup: "https://chat.whatsapp.com/JlCTPrnJOKv8V3lQTFGY5E",
  telegram: "https://t.me/fasavatale",
  telegramHandle: "@fasavatale",
  whatsapp: "https://chat.whatsapp.com/JlCTPrnJOKv8V3lQTFGY5E",
  email: "hello@riana-admissions.com",
  phone: "+86 138 0000 0000",
};
