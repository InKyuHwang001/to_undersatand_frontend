# 데이터는 변수말고 리액트 state로

---

## UI 하나 만들기

```react
function App(){
 
  let posts = '강남 고기 맛집';
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <div className="list">
        <h3>{ posts }</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
    </div>
  )
}
```

```react
(App.css)

.list {
  margin-top : 30px;
  text-align : left;
  padding-left : 20px;
  padding-right : 20px;
}
```

## state에 데이터 저장

```react
import React, { useState } from 'react';
import './App.css'

function App(){
 
  let [a,b] = useState('남자 코트 추천');
  let posts = '강남 고기 맛집';
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <div className="list">
        <h3>{ posts }</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
    </div>
  )
}
```

###  destructuring 문법

```react
let [a,b] = useState('남자 코트 추천');

let [글제목, 글제목변경] = useState('남자 코트 추천');
```

## state 데이터 데이터바인딩

```react
import React, { useState } from 'react';
import './App.css'

function App(){
 
  let [글제목, 글제목변경] = useState('남자 코트 추천');
  let posts = '강남 고기 맛집';
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <div className="list">
        <h3>{ 글제목 }</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
    </div>
  )
}
```

## state에는 Array, Object 아무거나

```react
port React, { useState } from 'react';
import './App.css'

function App(){
 
  let [글제목, 글제목변경] = useState( ['남자 코트 추천', '강남 우동 맛집'] );

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <div className="list">
        <h3>{ 글제목[0] }</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{ 글제목[1] }</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
    </div>
  )
}
```

## 변수 말고 state에 데이터 저장해서 쓰는 이유

- **"변수가 변경될 때 자동으로 관련된 HTML을 재렌더링되게 만들고 싶으면"**그럴 때 변수 말고 state에 저장해서 데이터바인딩
