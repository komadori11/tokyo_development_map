const url = "./json/editdata.json"; // JSONファイル名
let result;

// JSONファイルを整形して表示する
function formatJSON(data) {
  // 整形して表示
  let html = "<div class='container'>";
  for (let hits of data.hits) {
    html +=
      "<div class='card'>" +
      "<div class='item'>" +
      "<p><b>" +
      hits.建築物の名称 +
      "</b></p>" +
      "<p>" +
      "<div class='add'>" +
      hits.建築敷地_地名地番 +
      "<br/>" +
      "用途：" +
      hits.主要用途 +
      "<br/>" +
      "着工予定：" +
      "<b>" +
      hits.着工予定 +
      "</b>" +
      ", 完成予定：" +
      "<b>" +
      hits.完了予定 +
      "</b>" +
      "</p>" +
      "</div>" +
      "</div>" +
      "</div>";
  }
  html += "</div>";

  result.innerHTML = html;
}

// 起動時の処理
window.addEventListener("load", () => {
  // JSON表示用
  result = document.getElementById("result");

  // JSONファイルを取得して表示
  fetch(url)
    .then((response) => response.json())
    .then((data) => formatJSON(data));
});
