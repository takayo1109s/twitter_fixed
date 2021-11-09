const btn = document.querySelector('#btn');
let template='';
btn.addEventListener('click',function () {
  // 親の取得
  let oya = document.querySelector('.oya');
  // 入力されたものの内容（ここを自分で変えてくださいね！）
  let task = document.querySelector('input').value;
  if(task !== '') {
    document.querySelector('#input').value='';
  }
  // 挿入するHTMLのテンプレート
  template += `<li class='here'>
  <div class="tweettop">
    <div class="hank"><img src="./img/hank.PNG" width="60" height="60" alt=""></div>
    <h2>I am</h2>
    <h3>@iamwhoiam</h3>
  </div>
  <div class="ullist">
    <ul class="todo-list">
    <li>${task}</li>
    </ul>
  </div>
  <div class="aaa"><img src="./img/IMG_7759.jpg" width='100' height="30" alt=""><img src="./img/IMG_7760.jpg" idth='60' height="30" alt=""></div>
  </li>`;
  // テンプレートを親に挿入←appendChildはDOMを挿入するのに適しているけど上のようにテンプレートを挿入できない。したがってinnerHtmlを使う
  oya.innerHTML = template;
});
