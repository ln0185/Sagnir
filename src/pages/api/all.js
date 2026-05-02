import fetch from "node-fetch";
import { load } from "cheerio";

/** Source index pages on Netútgáfan (static folklore HTML). */
const THJOD_SOURCE_URLS = [
  "https://netutgafan.snerpa.is/thjod/troll.htm",
  "https://netutgafan.snerpa.is/thjod/draug.htm",
  "https://netutgafan.snerpa.is/thjod/alfa.htm",
  "https://netutgafan.snerpa.is/thjod/efra.htm",
];

/** Longer TTL: list changes rarely; reduces cold-load latency from 4 upstream fetches. */
const CACHE_TTL_MS = 6 * 60 * 60 * 1000;

let cachedData = null;
let cacheExpiration = 0;

function extractCategoryPage(html) {
  return load(html).extract({
    category: { selector: "h1" },
    stories: [{ selector: "a" }],
    links: [{ selector: "a", value: "href" }],
  });
}

export default async function handler(req, res) {
  if (cachedData && Date.now() < cacheExpiration) {
    return res.status(200).json(cachedData);
  }

  try {
    const [data1, data2, data3, data4] = await Promise.all(
      THJOD_SOURCE_URLS.map((url) =>
        fetch(url).then((r) => r.text()).then(extractCategoryPage)
      )
    );

    cachedData = [
      {
        category: "all",
        stories: {
          category: "all",
          stories: [
            ...data1.stories,
            ...data2.stories,
            ...data3.stories,
            ...data4.stories,
          ],
          links: [
            ...data1.links,
            ...data2.links,
            ...data3.links,
            ...data4.links,
          ],
        },
      },
      { category: "troll", stories: data1 },
      { category: "draugar", stories: data2 },
      { category: "alfar-og-huldufolk", stories: data3 },
      { category: "ur-efra-og-nedra-helgisogur", stories: data4 },
    ];
    cacheExpiration = Date.now() + CACHE_TTL_MS;
    return res.status(200).json(cachedData);
  } catch (error) {
    console.error("[api/all]", error);
    if (cachedData) {
      return res.status(200).json(cachedData);
    }
    return res.status(500).json({ message: "Error fetching data" });
  }
}
