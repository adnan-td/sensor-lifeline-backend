import http from "http";
import app from "./src/app";
import db from "./src/sequelize";
import TestingData from "./src/populate_sample";

const PORT = process.env.PORT || 3000;
const server = http.createServer(app);

async function startServer() {
  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}

db.query("show tables").then(function (rows) {
  if (rows[0].length) {
    db.sync().then(function () {
      startServer();
    });
  } else {
    db.dropAllSchemas({}).then(() => {
      db.query("SET FOREIGN_KEY_CHECKS = 0", { raw: true }).then(() => {
        db.sync({ force: true }).then(function () {
          TestingData();
          startServer();
        });
      });
    });
  }
});
