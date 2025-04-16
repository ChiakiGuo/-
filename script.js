const mainDishes = ['什锦炒饭加鸡蛋', '土豆回锅肉饭', '鱼香肉丝饭', '黄焖鸡丁饭', '内蒙红烧茄子饭', '宫保牛肉饭', '双椒鸡腿饭', '五花肉手撕包菜饭'];
const sideDishes = ['凉拌黄瓜', '紫菜蛋花汤', '香干炒芹菜', '香椿豆腐', '番茄土豆', '炒娃娃菜', '蒜蓉空心菜', '酸辣白菜'];

function chooseMeal() {
  const needSide = document.getElementById("needSide").value;
  const main = mainDishes[Math.floor(Math.random() * mainDishes.length)];
  const tips = ["今天适合吃点辣的！", "这道菜人气很高哦~", "别犹豫，这个你一定喜欢", "经典不过时", "老板推荐！"];
  let result = "🍱 今天吃：" + main;

  if (needSide === "yes") {
    const side = sideDishes[Math.floor(Math.random() * sideDishes.length)];
    result += " + " + side;
  }

  result += " ｜" + tips[Math.floor(Math.random() * tips.length)];
  const resultBox = document.getElementById("result");
  resultBox.style.opacity = 0;
  setTimeout(() => {
    resultBox.textContent = result;
    resultBox.style.opacity = 1;
  }, 200);
}
