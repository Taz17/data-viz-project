const express = require("express");
const path = require("path");

app = express();

PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "server", "public")));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));