import logo from './logo.svg';
import { Container, Navbar } from 'react-bootstrap';
import './App.css';
import { useState } from 'react';





function App() {
  return (
    <html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>인덱스페이지</title>
        <link rel="icon" type="image/x-icon" href="assets/로고.png" />
        <script src="https://use.fontawesome.com/releases/v6.1.0/js/all.js" crossorigin="anonymous"></script>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.5.5/css/simple-line-icons.min.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700,300italic,400italic,700italic" rel="stylesheet" type="text/css" />
        <link href="css/styles.css" rel="stylesheet" />
    </head>
    <body id="page-top">
        <header class="masthead d-flex align-items-center">
            <div class="container px-4 px-lg-5 text-center">
                <h1 class="mb-1">          너의 이야기를 들려조</h1>
                <h3 class="mb-5"><em>        with your sentence</em></h3>
                <a class="btn btn-primary btn-xl" href="#주의사항">주의사항</a>
            </div>
        </header>
        <section class="content-section bg-light" id="주의사항">
            <div class="container px-4 px-lg-5 text-center">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-lg-10">
                        <h2>주의사항</h2>
                        <p class="lead mb-5">
                            본 서비스는 KD 7,8회차 수강생이 만든 것으로 퍼가는 것은 허용되나 가사의 저작권 관련 이슈
                            는 서비스 이용자 본인에게 있는 것을 명심 해주시기 바랍니다.
                        </p>
                        <a class="btn btn-dark btn-xl" href="#제공예정">제공예정인것</a>
                        <a class="btn btn-dark btn-xl" href="main.html">가사생성</a>
                    </div>
                </div>
            </div>
        </section>
        <section class="content-section bg-primary text-white text-center" id="제공예정">
            <div class="container px-4 px-lg-5">
                <div class="content-section-heading">
                    <h3 class="text-secondary mb-0">comming soon</h3>
                    <h2 class="mb-5">제공 예정인 것</h2>
                </div>
                <div class="row gx-4 gx-lg-5">
                    <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
                        <span class="service-icon rounded-circle mx-auto mb-3"><i class="icon-screen-smartphone"></i></span>
                        <h4><strong>친구와 공유</strong></h4>
                        <p class="text-faded mb-0">카톡으로 친구와 함께 해봐요</p>
                    </div>
                    <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
                        <span class="service-icon rounded-circle mx-auto mb-3"><i class="icon-pencil"></i></span>
                        <h4><strong>생성가사 수정</strong></h4>
                        <p class="text-faded mb-0">여러분이 생성된 가사를 튜닝 해봐요</p>
                    </div>
                    <div class="col-lg-3 col-md-6 mb-5 mb-md-0">
                        <span class="service-icon rounded-circle mx-auto mb-3"><i class="icon-like"></i></span>
                        <h4><strong>AI가수</strong></h4>
                        <p class="text-faded mb-0">
                            여러분의 가사를 AI가 불러줘요.
                        </p>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <span class="service-icon rounded-circle mx-auto mb-3"><i class="icon-mustache"></i></span>
                        <h4><strong>서비스센터</strong></h4>
                        <p class="text-faded mb-0">불편사항은 시정하겠습니다.</p>
                    </div>
                </div>
            </div>
        </section>
        <a class="scroll-to-top rounded" href="#page-top"><i class="fas fa-angle-up"></i></a>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
        <script src="js/scripts.js"></script>
    </body>
</html>
  );
}

export default App;
