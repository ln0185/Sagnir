import axios from "axios";
import { load } from "cheerio";

/** Netútgáfan only serves pages as *.htm; map links and some routes omit the suffix. */
function thjodStoryFilename(story) {
  const raw = Array.isArray(story) ? story[0] : story;
  if (!raw || typeof raw !== "string") return null;
  let s = decodeURIComponent(raw).trim();
  const lower = s.toLowerCase();
  const thjodIdx = lower.indexOf("thjod/");
  if (thjodIdx !== -1) {
    s = s.slice(thjodIdx + 6);
  }
  const segment = s.split("/").pop() || s;
  if (!segment.toLowerCase().endsWith(".htm")) {
    return `${segment}.htm`;
  }
  return segment;
}

export default async function handler(req, res) {
  const { story } = req.query;
  const filename = thjodStoryFilename(story);
  if (!filename) {
    return res.status(400).json({ error: "Missing story" });
  }
  const data = await axios.get(
    "https://netutgafan.snerpa.is/thjod/" + filename
  );
  const json = load(data.data).extract({
    title: {
      selector: "h2",
    },
    content: {
      selector: "blockquote",
    },
  });

  res.send(json);
}
