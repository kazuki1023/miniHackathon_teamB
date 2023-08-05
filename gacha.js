gacha - yo - eatin.js;

let getResult = document.getElementById("getResult");
let result = document.getElementById("result");

var menu = {
  "牛丼(小盛)": 332,
  "牛丼(並盛)": 352,
  "牛丼(アタマの大盛)": 452,
  "牛丼(大盛)": 452,
  "牛丼(特盛)": 632,
  "牛丼(超特盛)": 722,
  "豚丼(小盛)": 318,
  "豚丼(並盛)": 338,
  "豚丼(アタマの大盛)": 438,
  "豚丼(大盛)": 498,
  "豚丼(特盛)": 618,
  "豚丼(超特盛)": 708,
  "牛カルビ丼(小盛)": 528,
  "牛カルビ丼(並盛)": 548,
  "牛カルビ丼(アタマの大盛)": 648,
  "牛カルビ丼(大盛)": 708,
  "牛カルビ丼(特盛)": 828,
  "牛カルビ丼(超特盛)": 918,
  "牛皿定食(並盛)": 498,
  "牛皿定食(大盛)": 598,
  "牛皿定食(特盛)": 698,
  牛カルビ定食: 598,
  炙り塩鯖定食: 598,
  鯖みそ定食: 598,
  牛鮭定食: 548,
  豚鮭定食: 548,
  "鰻重(一枚盛)": 788,
  "スパイシーカレー(並盛)": 328,
  "スパイシーカレー(大盛)": 418,
  "チキンスパイシーカレー(並盛)": 514,
  "チキンスパイシーカレー(大盛)": 604,
  ライザップ牛サラダ: 500,
  ライザップ牛サラダエビアボガド: 600,
  とん汁: 186,
  しじみ汁: 158,
  あさり汁: 158,
  味噌汁: 65,
  生野菜サラダ: 102,
  ポテトサラダ: 130,
  ごぼうサラダ: 130,
  エビアボガドサラダ: 198,
  牛小鉢: 167,
  玉子: 65,
  半熟玉子: 75,
  ねぎ玉子: 102,
  チーズ: 102,
  お新香: 102,
  キムチ: 102,
  鮭: 195,
  ご飯: 139,
  のり: 65,
  のり: 65,
  納豆: 84,
  "牛皿(並盛)": 302,
  "牛皿(大盛)": 402,
  "牛皿(特盛)": 502,
  "豚皿(並盛)": 288,
  "豚皿(大盛)": 388,
  "豚皿(特盛)": 488,
  牛カルビ皿: 458,
  "鰻皿(一枚盛)": 698,
  瓶ビール: 417,
  冷酒: 315,
};

var menucalorie = {
  "牛丼(小盛)": 488,
  "牛丼(並盛)": 652,
  "牛丼(アタマの大盛)": 741,
  "牛丼(大盛)": 863,
  "牛丼(特盛)": 1030,
  "牛丼(超特盛)": 1169,
  "豚丼(小盛)": 530,
  "豚丼(並盛)": 707,
  "豚丼(アタマの大盛)": 797,
  "豚丼(大盛)": 931,
  "豚丼(特盛)": 1172,
  "豚丼(超特盛)": 1319,
  "牛カルビ丼(小盛)": 618,
  "牛カルビ丼(並盛)": 802,
  "牛カルビ丼(アタマの大盛)": 1019,
  "牛カルビ丼(大盛)": 1136,
  "牛カルビ丼(特盛)": 1327,
  "牛カルビ丼(超特盛)": 1502,
  "牛皿定食(並盛)": 739,
  "牛皿定食(大盛)": 797,
  "牛皿定食(特盛)": 968,
  牛カルビ定食: 966,
  炙り塩鯖定食: 830,
  鯖みそ定食: 895,
  牛鮭定食: 712,
  豚鮭定食: 800,
  "鰻重(一枚盛)": 670,
  "スパイシーカレー(並盛)": 539,
  "スパイシーカレー(大盛)": 691,
  "チキンスパイシーカレー(並盛)": 747,
  "チキンスパイシーカレー(大盛)": 898,
  ライザップ牛サラダ: 404,
  ライザップ牛サラダエビアボガド: 430,
  とん汁: 176,
  しじみ汁: 42,
  あさり汁: 51,
  味噌汁: 20,
  生野菜サラダ: 25,
  ポテトサラダ: 122,
  ごぼうサラダ: 70,
  エビアボガドサラダ: 83,
  牛小鉢: 130,
  玉子: 76,
  半熟玉子: 76,
  ねぎ卵: 103,
  チーズ: 98,
  お新香: 13,
  キムチ: 26,
  鮭: 133,
  ご飯: 386,
  のり: 5,
  のり: 5,
  納豆: 98,
  "牛皿(並盛)": 257,
  "牛皿(大盛)": 315,
  "牛皿(特盛)": 486,
  "豚皿(並盛)": 320,
  "豚皿(大盛)": 394,
  "豚皿(特盛)": 634,
  牛カルビ皿: 416,
  "鰻皿(一枚盛)": 242,
  瓶ビール: 215,
  冷酒: 185,
};
var menulength = 0;
var menucalorielength = 0;
var ary = [];
var arycalorie = [];
for (i in menu) {
  menulength++;
  ary.push(menu[i]);
}
for (i in menucalorie) {
  menucalorielength++;
  arycalorie.push(menucalorie[i]);
}
var rand = Math.floor(Math.random() * menulength);
var key = Object.keys(menu);
let total = ary[rand];
let totalcalorie = arycalorie[rand];
var key1 = key[rand];
result.innerHTML =
  '<p style="text-align: center"><b>イートインガチャ結果</b></p><p><strong style="font-size: large">' +
  key[rand] +
  "</strong>：" +
  ary[rand] +
  "円　" +
  arycalorie[rand] +
  "kcal</p>";
while (total <= 1700) {
  var rand2 = Math.floor(Math.random() * menulength);
  total = total + ary[rand2];
  totalcalorie = totalcalorie + arycalorie[rand2];
  key1 = key1 + "，" + key[rand2];
  if (total <= 844) {
    document.getElementById("result").innerHTML +=
      '<p><strong style="font-size: large">' +
      key[rand2] +
      "</strong>：" +
      ary[rand2] +
      "円　" +
      arycalorie[rand2] +
      "kcal</p>";
  } else if (total <= 909) {
    document.getElementById("result").innerHTML +=
      '<p><strong style="font-size: large">' +
      key[rand2] +
      "</strong>：" +
      ary[rand2] +
      "円　" +
      arycalorie[rand2] +
      "kcal</p>";
    break;
  } else {
    total = total - ary[rand2];
    totalcalorie = totalcalorie - arycalorie[rand2];
    key1 = key1.replace("，" + key[rand2], "");
  }
}
document.getElementById("result").innerHTML +=
  '<br><p style="text-align: center">税抜合計：' +
  total +
  "円<br><b>税込合計：" +
  Math.floor(total * 1.1) +
  "円<br>カロリー合計：" +
  totalcalorie +
  "kcal </b></p>";

getResult.addEventListener("click", function twitText() {
  var s, url;
  s =
    "吉野家1000円ガチャの結果は………" +
    key1 +
    "　で税込合計" +
    Math.floor(total * 1.1) +
    "円で，カロリーの合計は" +
    totalcalorie +
    "kcal です。";
  url = "hiraocafe.com/yoshinoya1000.html";
  if (s != "") {
    if (s.length > 140) {
      //文字数制限
      alert("テキストが140字を超えています");
    } else {
      //投稿画面を開く
      url = "http://twitter.com/share?url=" + escape(url) + "&text=" + s;
      window.open(url, "_blank", "width=600,height=300");
    }
  }
});
