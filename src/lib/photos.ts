/**
 * ---------------------------------------------------------------------------
 * 📸 ФОТОГРАФИИ РИАНЫ И ПОДДЕРЖКА GOOGLE DRIVE:
 * ---------------------------------------------------------------------------
 * В объекте `photos` используются реальные фотографии Рианы:
 * - hero: Риана в Шанхае (Waitan) на фоне Oriental Pearl Tower
 * - aboutMain: Риана ночью на набережной Чунцина
 * - aboutSecondary: Риана у фонтана возле Raffles City
 * - rooftop: Риана со страховкой на крыше (проект «Дадим шанс»)
 * - swing: Риана на качелях в саду
 * - temple: Риана у синей стены храма с золотыми иероглифами
 *
 * Сюда также можно вставить ЛЮБУЮ ссылку с Google Диска (Share -> Anyone with link)
 * или прямую ссылку из интернета — система автоматически преобразует её в прямой CDN-URL!
 * ---------------------------------------------------------------------------
 */

/**
 * Резолвит относительные пути с учётом BASE_URL (для GitHub Pages /riana-admission-guide/)
 */
export function resolveAssetUrl(path: string): string {
  if (!path) return "";
  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("data:") ||
    path.startsWith("//")
  ) {
    return path;
  }
  const base =
    typeof import.meta !== "undefined" && import.meta.env?.BASE_URL
      ? import.meta.env.BASE_URL
      : "/";
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return base.endsWith("/") ? `${base}${cleanPath}` : `${base}/${cleanPath}`;
}

/**
 * Извлекает ID файла Google Drive из любого формата ссылки.
 */
export function extractGoogleDriveId(urlOrId: string | null | undefined): string | null {
  if (!urlOrId) return null;
  const str = String(urlOrId).trim();

  // 1. Формат: /file/d/<ID>/... или /file/d/<ID>
  const fileDMatch = str.match(/\/file\/d\/([a-zA-Z0-9_-]{20,})/);
  if (fileDMatch) return fileDMatch[1];

  // 2. Формат: /d/<ID>/... или /d/<ID>
  const dMatch = str.match(/\/d\/([a-zA-Z0-9_-]{20,})/);
  if (dMatch) return dMatch[1];

  // 3. Формат параметров: ?id=<ID> или &id=<ID>
  const idMatch = str.match(/[?&]id=([a-zA-Z0-9_-]{20,})/);
  if (idMatch) return idMatch[1];

  // 4. Прямой ID файла Google Drive (от 25 символов)
  if (/^[a-zA-Z0-9_-]{25,}$/.test(str)) {
    return str;
  }

  return null;
}

/**
 * Преобразует любую ссылку (Google Drive, локальный путь или внешний URL) в рабочий URL.
 */
export function formatImageUrl(urlOrId: string | null | undefined): string {
  if (!urlOrId) return "";
  const trimmed = String(urlOrId).trim();

  // Если это уже прямая ссылка Google Usercontent CDN
  if (trimmed.includes("lh3.googleusercontent.com/d/")) {
    return trimmed;
  }

  // Google Drive ссылка любого формата -> высокоскоростной CDN
  const driveId = extractGoogleDriveId(trimmed);
  if (driveId) {
    return `https://lh3.googleusercontent.com/d/${driveId}`;
  }

  // Локальные фотографии сайта из public/
  if (trimmed.startsWith("/") || trimmed.startsWith("photos/")) {
    return resolveAssetUrl(trimmed);
  }

  return trimmed;
}

/**
 * Запасной URL для Google Drive через uc?export=view (на случай ограничений CDN)
 */
export function getDriveFallbackUrl(urlOrId: string | null | undefined): string | null {
  const driveId = extractGoogleDriveId(urlOrId);
  return driveId ? `https://drive.google.com/uc?export=view&id=${driveId}` : null;
}

/**
 * Основные фотографии Рианы на сайте.
 */
const rawPhotos: Record<string, string> = {
  // Риана в Шанхае на фоне ночной набережной и телебашни
  hero: "/photos/riana-shanghai.jpg",
  // Риана в Чунцине на набережной с панорамой ночного города
  aboutMain: "/photos/riana-chongqing-night.jpg",
  // Риана у фонтана возле Raffles City
  aboutSecondary: "/photos/riana-raffles-city.jpg",
  // Риана со страховкой на крыше небоскрёба (проект «Дадим шанс»)
  rooftop: "/photos/riana-rooftop-harness.jpg",
  // Риана на качелях в саду
  mountains: "/photos/riana-swing-garden.jpg",
  // Риана у синей стены буддийского храма с золотыми иероглифами
  temple: "/photos/riana-temple-wall.jpg",
};

/**
 * Прокси-объект `photos`: любое значение автоматически форматируется.
 */
export const photos = new Proxy(rawPhotos, {
  get(target, prop: string) {
    const val = target[prop];
    return typeof val === "string" ? formatImageUrl(val) : val;
  },
  set(target, prop: string, value: string) {
    target[prop] = value;
    return true;
  },
});

/**
 * Все фотографии в галерее — это Риана, основатель Riana Admissions.
 */
export const rianaGallery = [
  {
    src: "/photos/riana-shanghai.jpg",
    caption: "Риана в Шанхае (Waitan) — основатель Riana Admissions",
  },
  {
    src: "/photos/riana-chongqing-night.jpg",
    caption: "Ночной Китай: здесь начинается путь и мечты студентов",
  },
  {
    src: "/photos/riana-rooftop-harness.jpg",
    caption: "На высоте: благотворительный проект «Дадим шанс»",
  },
  {
    src: "/photos/riana-raffles-city.jpg",
    caption: "Риана между консультациями возле Raffles City",
  },
  {
    src: "/photos/riana-temple-wall.jpg",
    caption: "Культура, язык и традиции Китая из первых уст",
  },
  {
    src: "/photos/riana-swing-garden.jpg",
    caption: "Путешествия и жизнь в Китае во время учёбы",
  },
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
