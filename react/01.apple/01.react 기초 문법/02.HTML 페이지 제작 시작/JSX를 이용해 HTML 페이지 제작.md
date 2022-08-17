# JSX를 이용해 HTML 페이지 제작

---

## 저번시간 셋팅이 완료되었으면 App.js로 들어갑시다

```
(App.js의 function App()부분)

function App(){
  return (
    <div className="App">
      //다지움 ㅅㄱ
    </div>
  )
} 
```

터미널을 여시고 npm run start 를 입력해주시면 됩니다. 

 

## 본격적으로 블로그 상단 nav를 제작해봅시다.

```react
(App.js)

function App(){
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
    </div>
  )
}
(App.css)

.black-nav {
  background : black;
  width : 100%;
  display : flex;
  color : white;
  padding : 20px;
  font-weight : 600;
  font-size : 20px;
}
```

## **JSX에서 데이터바인딩하기** 

```react
function App(){

  var data = '안녕하세요';
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
        <div>여기에 꽂고 싶으면?</div>
      </div>
    </div>
  )
}
```

 

옛날 자바스크립트 문법을 쓴다면 document.getElementById().innerHTML = ?? 이런 식이었다.

```react
function App(){

  var data = '안녕하세요';
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
        <div>{ data }</div>
      </div>
    </div>
  )
}
```



```react
function App(){

  var data = 'nav';
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
        <div className={data}>안녕하세요</div>
      </div>
    </div>
  )
}
```



## **HTML에 스타일을 직접 넣고 싶으면** 

style="color : blue" 이런걸 넣고 싶으면 어떻게 하는지 알려드리겠습니다. 

JSX 상에서는 무조건 {} 오브젝트로 바꿔서 넣으셔야합니다. 

```react
<div style={ 스타일용 오브젝트 }> 글씨 </div>
```



```react
<div style={ {color : 'blue', fontSize : '30px'} }> 글씨 </div>
```

