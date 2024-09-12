const { nanoid } = require("nanoid");
const URl = require("../models/url");

async function handleGenerateNewShortURL(req, res) {
  const body = request.body;
  if (!body.url) return res.status(400).json({ error: "URL is required" });
  const shortID = nanoid(8);
  await URL.create({
    shortId: shortID,
    redirectURL: body.url,
    visitedHistory: [],
  });

  return res.json({ id: shortID });
}

module.exports = {
  handleGenerateNewShortURL,
};
