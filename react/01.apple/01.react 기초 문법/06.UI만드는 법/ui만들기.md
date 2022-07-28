# UI만들기

## 리액트에서 동적인 UI 만드는 step

 

**1. html css로 미리 UI 디자인을 다 해놓고**

**2. UI의 현재 상태를 state로 저장해두고**

**3. state에 따라서 UI가 어떻게 보일지 조건문 등으로 작성**

## **step 1. html css로 미리 디자인해놓기**

/5. component 참조

## **step 2. UI의 현재 상태를 state로 저장** 

```
let [modal, setModal] = useState(false); 
```

```
let [modal, setModal] = useState('닫힘');
let [modal, setModal] = useState(0); 
```

## **step 3. state에 따라서 UI가 어떻게 보일지 작성**

 

```
function App (){

  let [modal, setModal] = useState(false);
  return (
    저 state가 true면 <Modal></Modal>
    false면 아무것도 보여주지마세요
  )
} 
```

## **JSX에서 조건문 쓰는 법**

 

조건문은 if / else 문법을 쓰면 되는데 

JSX 안에서는 if else 문법을 바로 사용할 수 없습니다.

써보십시오 글자색도 이상해질걸요

하지만 if 문법 대신 삼항연산자라는건 JSX 중괄호 안에서 사용가능합니다.

 

```
조건식 ? 조건식 참일 때 실행할 코드 : 조건식 거짓일 때 실행할 코드 
```

이렇게 if문 대신 쓸 수 있는 문법이 삼항연산자입니다. 



```
3 > 1 ? console.log('맞음') : console.log('아님') 
```

예를 들어 이렇게 쓰면 3 > 1 이게 참이기 때문에 '맞음'이 출력됩니다. 

 

```
function App (){

  let [modal, setModal] = useState(false);
  return (
    <div className="app">
      (생략)
      {
        modal == true ? <Modal></Modal> : null
      }
    </div>
  )
}
```

이렇게 코드짜면 됩니다. 

null은 그냥 아무 html도 남기기 싫을 때 쓰는 자료입니다. null은 텅 비었다는 뜻임 

이제 3-step 끝입니다.

 

## **글제목 누르면 모달창을 띄우고 싶어요**

```
function App (){

  let [modal, setModal] = useState(false);
  return (
    <div>
      (생략)
      <button onClick={ ()=>{ setModal(true) } }> {글제목[0]} </button>
      { 
         modal == true ? <Modal></Modal> : null
      }
    </div>
  )
}
```

글제목 누르면 modal이라는 state를 true로 바꿔달라고 코드짰습니다.

그럼 이제 제목누르면 모달창 보이는 것임 

 

그래서 리액트에서 UI만드는 과정을 비유하면

스위치와 전등만드는거랑 비슷하다고 보면 됩니다. 

 

\1. 일단 전등이쁘게 달아놓고

\2. 스위치랑 연결하고

\3. 스위치를 on으로 놓으면 불이 켜지고 off로 놓으면 불이 꺼지도록

만들어놓는 겁니다. 

그리고 나중에 필요하면 스위치 조작만 하면 되는 것임 

스위치는 state, 전등은 <Modal>입니다. 

 

```
function App (){

  let [modal, setModal] = useState(false);
  return (
    <div>
      (생략)
      <button onClick={ ()=>{ setModal(!modal) } }> {글제목[0]} </button>
      { 
         modal == true ? <Modal></Modal> : null
      }
    </div>
  )
}
```

아니면 간단하게 setModal(!modal) 이래도 됩니다.

느낌표가 뭐냐면

느낌표 우측 자료를 반대로 바꿔줍니다. 

!true는 출력해보면 false입니다.

!false는 출력해보면 true입니다.

그래서 저렇게 써도 가능할듯요 

 

 

 