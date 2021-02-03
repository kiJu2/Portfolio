// Typing script for main page

const terminalUser = "2kiju@MacBook-Pro"
const terminalIntroContent = '\
\
## 안녕하세요. 생각하는 것을 만들어내는 웹 개발자 ***입니다.<br><br>\
\
평소 논리적 사고를 즐겨하였기에, 대학교 때 저의 진로를 바꾸어 컴퓨터공학부로 전과하였습니다.\
그 중 가장 사랑하는 것은 웹이며, 브라우저 내에 저의 상상을 담아내는 것이 저의 취미이자 꿈이며, 웹의 무한한 가능성에 있어서 의심치 않습니다.<br><br>\
\
새로운 기술을 배우는 것에 큰 흥미를 가지고 있습니다. 새로운 기술과 디자인은 선배 개발자님들의 노고가 담겨있다고 생각합니다. 그 길을 따라 걸을 때 기술의 깊은 뜻을 이해하고 깨닳음을 얻는 것이 즐겁습니다.<br><br>\
\
저의 목표는 멋진 선배 개발자님들처럼, 컴퓨터 공학 분야에 도모하는 것입니다.<br>\
'
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

const addTerminalHTML = (num, user, path) =>{
  const html = `<br><br>
  <span class="terminal-head-bg terminal-head">
    <span class="terminal-head-title">`+ user +`</span>
    <span class="terminal-head-arrow"></span>
    <span class="terminal-head-path">`+ path +`/</span>
  </span>
  <span class="terminal-head-triangle-right"></span>
  <span class="typed`+num+` terminal-body"></span> `

  document.getElementById('terminal').innerHTML += html;
}

const addTerminalText = (string) =>{
  const text = "<br><br><span class='terminal-body'>" + string + "</span>";
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


window.onload = () =>{
  setTimeout(() =>{
    animateTyping('1', ['cd project/introduc', 'cd project/intro']);
  }, 1000)
  //타이핑 애니메이션

  setTimeout(() => {
    addTerminalHTML('2', terminalUser, '~/project/intro')
    // 새로운 terminal 요소 추가
  }, 3100)
  
  setTimeout(() => {
    animateTyping('2', ['cat intro_self.md'])
  }, 3400)

  setTimeout(() =>{
    addTerminalText(terminalIntroContent)
  }, 4400)
  setTimeout(() => {
    addTerminalHTML('3', terminalUser, '~/project/intro')
  }, 4405)

  setTimeout(() => {
    animateTyping('3', ['cat info.md'])
  }, 5200)
  
  setTimeout(() =>{
    addTerminalText(terminalInfoContent)
  }, 5800)
  setTimeout(() => {
    addTerminalHTML('3', terminalUser, '~/project/intro')
  }, 5805)
}

