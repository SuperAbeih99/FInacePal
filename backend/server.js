// Server entry for local development. Vercel uses api/index.js instead.
const app = require("./app");

if (require.main === module) {
  const PORT = process.env.PORT || 8000;
  app.listen(PORT, () => {
    console.log(`Local server running on http://localhost:${PORT}`);
  });
} else {
  module.exports = app;
}
