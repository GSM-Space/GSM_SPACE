# GSM_SPACE

**훌륭한 Git 커밋 메시지의 일곱 가지 규칙**

- 제목과 본문을 빈 행으로 분리한다
- 제목 행을 50자로 제한한다
- 제목 행 첫 글자는 대문자로 쓴다
- 제목 행 끝에 마침표를 넣지 않는다
- 제목 행에 명령문을 사용한다
- 본문을 72자 단위로 개행한다
- 어떻게 보다는 무엇과 왜를 설명한다

# 구조 작성

### Pages

- 파일 이름 + Pages 붙이기 ex) 메인페이지를 만들 때 MainPages.js
- Pages는 그 페이지의 토대일뿐, Pages에 html 하드코딩 하지않기
- Container + Components = Pages , 즉 Pages 안에는 Component or Container 파일 import 하기
- Page폼 또는 템플릿은 Component에 작성해서 import하기, ex) MainPages면 MainTemplate.js는 Components의 main 폴더 안에 작성

### Container

- Redux 관리를 위한 Container이므로 안에 Component만 import 하기

### Components

- Header, Footer 등 각 기능 작성
- 비슷한 기능들은 한 폴더에 묶어두기 ex) Login, register는 Auth 폴더 안에 묶어서 작성

# 개발하기 전에

- 기능 구현은 다같이 할 것이니 퍼블리싱만 하기
- Redux는 아직 제대로 파고들 필요 없음. 기본 상태 관리만 할것임
- 기술 스택 : React Hooks, css, Redux, Axios
- 커밋하기 전에 리뷰 받고 커밋하기
- 커밋을 했는데 컨트리뷰트 발생 시에 디코 주기
- Node Path를 적용해두었으니 src폴더 기준으로 절대 경로로 import 할 수 있음
- Router.js에 라우팅되어있는 페이지 대로 역할 맡아 개발
