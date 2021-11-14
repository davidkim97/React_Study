import "./App.css";

function App() {
  const name = "리액트";
  return (
    <>
      {/* 주석은 이렇게 작성 */}
      <div
        className="react" // 시작 태그를 여러 줄로 작성하게 된다면 이렇게 주석 가능.
      >
        {name}
      </div>
      <input />
    </>
  );
}

export default App;
