const express = require("express");
const app = express();
const router = require("express").Router();

const port = 3001;

const mysql = require('mysql2');

const con = mysql.createConnection({
  host: 'mysql',
  user: 'root',
  password: 'password',
  database:'my_wasemeshi',
});

con.connect((err) => {
  if(err){
    console.log('error connecting:' + err.stack);
    return;
  }
  console.log('success');
})

// Dynamic resources rooting.
app.use("/api", router);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/*
ルーティングをいくつか記述。
ルーティング処理を全て記述した最後に以下を記述。
*/
app.get("/getShopList",(req, res) => {
  con.query(
    'SELECT shoplist.id, shopdetail.shopname, shopdetail.registered_at FROM shoplist JOIN shopdetail on shoplist.id = shopdetail.id',
    (error, results) => {

      const shopInfoList = [];

      for(const result of results){
        const shopInfo = {
          id: result.id,
          shopName: result.shopname,
          date: `${result.registered_at.getFullYear()}-${result.registered_at.getMonth() + 1}-${result.registered_at.getDate()}`,
        }
        shopInfoList.push(shopInfo);
      }

      res.send(shopInfoList);
    }
  )
});

app.get("/getShopDetail/:shopId",(req, res) => {
  const shopId = req.params.shopId;
  con.query(
    `SELECT shopdetail.shopname, shopdetail.address, shopdetail.tel, shopdetail.registered_at FROM shoplist JOIN shopdetail on shoplist.id = shopdetail.id WHERE shoplist.id = ${shopId}`,
    (error, results) => {
        const shopDetail = {
          shopName: results[0].shopname,
          address: results[0].address,
          tel: results[0].tel,
          date: `${results[0].registered_at.getFullYear()}-${results[0].registered_at.getMonth() + 1}-${results[0].registered_at.getDate()}`,
        }

      res.send(shopDetail);
    }
  )
});

app.post("/post",(req, res) => {
  const shopDetail = req.body;
  con.query(
    'INSERT INTO shoplist (id) SELECT MAX(id) + 1 FROM shoplist',
    (error, results) => {
      const shopId = results.insertId;
      con.query(
        `INSERT INTO shopdetail (id, shopname, address, tel) VALUES ('${shopId}', '${shopDetail.shopName}', '${shopDetail.address}' ,'${shopDetail.tel}') `,
        (error, results) =>{
          res.send(results);
        }
      )
    }
  )
});

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, ".", "build", "index.html"));
// });

app.listen(port, () => {
  console.log(`server started on port ${port}`)
})