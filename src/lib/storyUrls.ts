/**
 * Single place for /stories/[category]/[story] path rules used by the feed and the map.
 */

const storyTitleToSlug: Record<string, string> = {
  "Álfadrottning í álögum": "alfa-dr",
  "Álfafólkið í Loðmundarfirði": "a-lodmfj",
  "Álfakóngurinn í Seley": "seley",
  "Ábæjar-Skotta": "skotta3",
  "Átján draugar úr Blöndu": "18draug",
  "Átján sendingar í senn": "18send",
  "Átján Skólabræður": "18skolab",
  "Andrarímur og Hallgrímsrímur": "andra",
  "Bergþór Bláfellingur": "blafell",
  Bakkastaður: "bakka",
  "Brytinn í Skálholti": "brytinn",
  "Dansinn í Hruna": "hruna",
};

/** Icelandic UI labels from category chips → URL segment (when not already a slug). */
const categoryDisplayToSegment: Record<string, string> = {
  Allt: "all",
  Tröll: "troll",
  Draugar: "draugar",
  "Álfar og Huldufólk": "alfa",
  Helgisögur: "efra",
};

const mapUiCategoryToSegment: Record<string, string> = {
  Huldufólk: "alfar-og-huldufolk",
  Helgisögur: "ur-efra-og-nedra-helgisogur",
  Draugar: "draugar",
  Tröll: "troll",
};

const mapMarkerTitleToSlug: Record<string, string> = {
  Geirfuglasker: "geirfugl",
  Loðmundarfjörður: "a-lodmfj",
  Melstaðarkirkja: "jonas",
  Skaftafell: "einar-sk",
  Jórukleif: "jora",
  Eyvindarmúli: "gudm-eyv",
  Rafnkelsstaðir: "flugan",
  Snjóholt: "setta2",
  Reynisstaðarkirkja: "reynis",
  Húnavatnssýsla: "sat-nafn",
  Hruni: "hruna",
};

export function storyHref(storyLink: string, categoryKey: string): string {
  const categorySegment =
    categoryDisplayToSegment[categoryKey] || categoryKey;
  const storySlug = storyTitleToSlug[storyLink] || storyLink;
  return `/stories/${categorySegment}/${storySlug}`;
}

/** Map popup labels → same paths as the stories feed. */
export function mapMarkerStoryHref(
  markerTitle: string,
  mapUiCategory: string
): string {
  const categorySegment =
    mapUiCategoryToSegment[mapUiCategory] ?? mapUiCategory;
  const storySlug =
    mapMarkerTitleToSlug[markerTitle] ?? markerTitle;
  return storyHref(storySlug, categorySegment);
}
