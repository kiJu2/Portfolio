// Typing script for main page

{/* <a href="https://kiju2.github.io/Portfolio/" target="_blank"> 해당 화면은 pdf입니다. 브라우저를 통하여 보시면 더욱 편하게 보실 수 있습니다. 이 문구를 클릭해주세요.</a><br></br> */}
const terminalUser = "2kiju@MacBook-Pro"
const terminalIntroContent = `
# 안녕하세요. 상상을 그리는 개발자 이기주입니다.<br><br>

> 컴퓨터 학문에 많은 관심을 가지고 있어, 대학교 때 저의 진로를 바꾸어 컴퓨터공학부로 전과하였습니다.
저의 상상을 컴퓨터 속에 담아내는 것이 저의 취미이자 꿈이며, 컴퓨터 공학의 무한한 가능성에 있어서 의심치 않습니다.<br><br>

> 새로운 기술을 배우는 것에 큰 흥미를 가지고 있습니다. 새로운 기술과 디자인은 선배 개발자님들의 노고가 담겨있다고 생각합니다. 그 길을 따라 걷고, 기술의 깊은 뜻을 이해하고, 깨달음을 얻는 것이 저의 행복입니다.<br><br>

> 저의 목표는 선배 개발자님들처럼, 제가 개척한 길 또한 우리 후배 개발자들에게 도움이 되는 것입니다.<br><br>

> 개발을 하며 탐구하고, 소통하고, 컴퓨터 공학의 이슈에 대해 살펴보는 것을 좋아합니다.<br>
저에 대해 더욱 알고 싶으시다면 하단으로 스크롤하여, 저의 이야기를 들어주세요.
`
const terminalInfoContent = `
# Info<br>
## email<br>
> <a target="_blank" href="mailto: thdydehfdl12@gmail.com">thdydehfdl12@gmail.com</a><br>
<br>
## phone<br>
> Please contact me by email<br>
<br>
## git<br>
> <a target="_blank" href="https://github.com/kiJu2">https://github.com/kiJu2</a><br>
<br>
## blog<br>
> <a target="_blank" href="https://2kiju.tistory.com/">https://2kiju.tistory.com/</a><br>
`
const terminalInitHtml = `
  <span class="terminal-head-bg terminal-head">
    <span class="terminal-head-title">2kiju@MacBook-Pro</span>
    <span class="terminal-head-arrow"></span>
    <span class="terminal-head-path">~/</span>
  </span>
  <span class="terminal-head-triangle-right"></span>
  <span class="typed1 terminal-body"></span>
`

const setTerminalHTML = html =>{
  document.getElementById('terminal').innerHTML = html;
}

const addTerminalHTML = (num, user, path) =>{
  const html = `<br><br>
  <span class="terminal-head-bg terminal-head">
    <span class="terminal-head-title">${user}</span>
    <span class="terminal-head-arrow"></span>
    <span class="terminal-head-path">${path}/</span>
  </span>
  <span class="terminal-head-triangle-right"></span>
  <span class="typed${num} terminal-body"></span> `

  document.getElementById('terminal').innerHTML += html;
}

const addTerminalText = (string) =>{
  const text = `<br><br><span class='terminal-body'>${string}</span>`;
  // console.log(document.getElementById('terminal'))
  document.getElementById('terminal').innerHTML += text;
}

const animateTyping = (num, strings) => {
  setTimeout(() =>{
    var typed = new Typed('.typed'+num, {
      // strings: ['cd prolect', 'cd project/intro'],
      strings: strings,
      typeSpeed: 30,
      backSpeed: 30,
      // fadeOut: true,
      smartBackspace: true,
      cursorChar: '',
      // loop: true
      // color:white,
    });
  }, 0)
}


const arrow = document.getElementById("arrow-in");
const animTyped = () =>{
  setTimeout(() =>{
    animateTyping('1', ['cd project/intro']);
  }, 300)
  //타이핑 애니메이션

  setTimeout(() => {
    addTerminalHTML('2', terminalUser, '~/project/intro')
    // 새로운 terminal 요소 추가
  document.getElementById('terminal').scrollTo(0, 1000);
  }, 1400)
  
  setTimeout(() => {
    animateTyping('2', ['cat intro_self.md'])
  }, 1700)

  setTimeout(() =>{
    addTerminalText(terminalIntroContent)
  }, 2700)
  setTimeout(() => {
    addTerminalHTML('3', terminalUser, '~/project/intro')
    document.getElementById('terminal').scrollTo(0, 1000);
  }, 2705)

  setTimeout(() => {
    animateTyping('3', ['cat info.md'])
  }, 3500)
  
  setTimeout(() =>{
    addTerminalText(terminalInfoContent)
  }, 4100)
  setTimeout(() => {
    addTerminalHTML('3', terminalUser, '~/project/intro')
    document.getElementById('terminal').scrollTo(0, 1000);
    arrow.classList.add("fadeio");
  }, 4105)


}

const main = () =>{
  // addTerminalText("Loaded.");
  const loadingElement = document.querySelector('.loading');
  loadingElement.classList.remove('loading')

  setTimeout(
  () =>{
    addTerminalHTML("1",terminalUser, '~');
    animTyped();
    console.log("loaded");
    },
  300)
}

var isRunningMain = false;
var timeCountS = 0;

//js bg load
//js bg load

const homeBGIMG = document.getElementById('home')
var bgIMG = new Image();

bgIMG.src = "imgs/mac-wallpaper.jpg";
bgIMG.onload = () =>{
  // console.log("onloaded. !isRunningMain is " + !isRunningMain)
  homeBGIMG.style.backgroundImage = `url("${bgIMG.src}")`
  !isRunningMain && function(){
    addTerminalText("Loaded.");
    console.log("bgIMG onload.")
    !isRunningMain && main();
    isRunningMain = true;
  }();
}

// Force set terminal.
// Force set terminal.

setTimeout(()=>{
  // addTerminalText("")
  // console.log("Timeout load. !isRunningMain is " + !isRunningMain)
  !isRunningMain && function(){
    addTerminalText("Resource load timeout.")
    main()
    isRunningMain = true;
  }();
}, 2500)

// setInterval(()=>
//   timeCountS += 1,
//   1000);

// while(true){
  
//   if(isRunningMain && timeCount > 3){
//     console.log("time is " + toString(timecount));
//   }
// }

// 추 후, 내가 써내려간 스킬 키워드를 가지고 그래프 만들어도 재밌겠다.
// 그리고 유지보수를 위하여 html에 다 써내리지 말고 객체화 시키면 훨신 편할거야.