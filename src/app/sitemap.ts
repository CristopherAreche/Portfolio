import { MetadataRoute } from "next";
import { SITE_URL } from "@/utils/constants";
import { LOCALES } from "@/utils/locale";

const LAST_MODIFIED = new Date("2026-02-15T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  return LOCALES.flatMap((locale) => [
    {
      url: `${SITE_URL}/${locale}`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/${locale}/projects`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ]);
}
