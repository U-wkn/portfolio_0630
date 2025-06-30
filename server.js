const express = require('express');
const path = require('path');

const app = express();

// 静的ファイルを public フォルダから配信
app.use(express.static(path.join(__dirname, 'public')));

// ポート番号3000でサーバー起動
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running at 🌸 http://localhost:${PORT}`);
});
