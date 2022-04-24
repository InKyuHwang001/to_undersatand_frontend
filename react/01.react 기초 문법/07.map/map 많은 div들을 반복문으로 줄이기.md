# map 많은 div들을 반복문으로 줄이기

---

## 자바스크립트 map 함수 쓰는 법

```
var 어레이 = [2,3,4];
어레이.map(function(){
  console.log(1)
});
```

**기능 1.** array에 들어있는 자료갯수만큼 그 안에 있는 코드를 반복실행해줍니다.

 console.log(1) 3번 실행됨  

```
var 어레이 = [2,3,4];
어레이.map(function(a){
  console.log(a)
});
```

**기능 2.** 콜백함수에 파라미터 아무렇게나 작명하면 그 파라미터는 어레이 안에 있던 모든 자료를 하나씩 출력해줍니다.

저러면 진짜로 2, 3, 4가 콘솔창에 출력됨 

```
var 어레이 = [2,3,4];
var newArray = 어레이.map(function(a){
  return a * 10
});
console.log(newArray)
```

**기능3.** return 오른쪽에 뭐 적으면 array로 담아줍니다.

newArray는 [20, 30, 40] 이 출력됩니다. 

 ## JSX 안에서 html을 반복생성하고 싶으면

```react
function App (){
  return (
    <div>
      { 
        [1,2,3].map(function(){
          return ( <div>안녕</div> )
        }) 
      }
    </div>
  )
}
```

▲ 이렇게 쓰면 <div>안녕</div> 이 3개나 생성됩니다.

## 예전에 만들었던 글제목 3개도 반복문으로 축약 가능할듯

 

지금 우리 프로젝트를 잘 보면

<div className="list"> 이 부분이 3번이나 반복되고 있습니다.

이것도 map 반복문으로 축약하면 코드 양이 더 줄어들지 않을까요. 

 

 

```
function App (){
  return (
    <div>
      (생략)
      { 
        글제목.map(function(){
          return (
          <div className="list">
            <h4>{ 글제목[0] }</h4>
            <p>2월 18일 발행</p>
          </div> )
        }) 
      }
    </div>
  )
}
```

▲ 이렇게 하면 글제목이 3개 생성됩니다. 

 

 ## 근데 반복된 HTML에 각각 다른 제목을 부여하고 싶다면



```react
function App (){
  return (
    <div>
      (생략)
      { 
        글제목.map(function(a){
          return (
          <div className="list">
            <h4>{ a }</h4>
            <p>2월 18일 발행</p>
          </div> )
        }) 
      }
    </div>
  )
}
```

▲ 이렇게 하면 각각 다른 글제목이 3개 생성됩니다. 성공  

```react
function App (){
  return (
    <div>
      (생략)
      { 
        글제목.map(function(a, i){
          return (
          <div className="list">
            <h4>{ 글제목[i] }</h4>
            <p>2월 18일 발행</p>
          </div> )
        }) 
      }
    </div>
  )
}
```

 ## 전에 만들었던 따봉기능도 추가해보면

```react
function App (){
  return (
    <div>
      (생략)
      { 
        글제목.map(function(a, i){
          return (
          <div className="list">
            <h4 onClick={()=>{ 따봉변경(따봉+1) }}>{ 글제목[i] }</h4>
            <p>2월 18일 발행</p>
          </div> )
        }) 
      }
    </div>
  )
}
```

▲ 반복문 안에 있는 html에 onClick 같은거 추가해도 아무런 문제가 없습니다.

근

**오늘의 숙제 :**

지금 좋아요버튼을 누를 때 마다 모든 따봉갯수가 똑같이 1 증가하고 있습니다. 

각각 개별적으로 증가하게 하려면 어떻게 해야할까요?



```react
{ 
   글제목.map(function(a, i){
      return (
        <div className="list">
          <h4>{ 글제목[i] } 
            <span onClick={()=>{ ??? }}>👍</span> {따봉[i]} 
          </h4>
          <p>2월 18일 발행</p>
        </div> )
  }) 
}
```

 

```react
<h4> 
  { 글제목[i] } 
   <span onClick={()=>{ 
      let copy = [...따봉];
      copy[i] = copy[i] + 1;
      따봉변경(copy)  
   }}>👍</span> {따봉[i]} 
</h4> 
```

   

 

 



 

 

 
