const express = require("express");
const app = express();
const router = require("express").Router();

const port = 3001;

// Dynamic resources rooting.
app.use("/api", router);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/*
ルーティングをいくつか記述。
ルーティング処理を全て記述した最後に以下を記述。
*/
app.post("/post",(req, res) => {
  console.log(req.body);
  res.send("登録OK");
})

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, ".", "build", "index.html"));
// });

app.listen(port, () => {
  console.log(`server started on port ${port}`)
})