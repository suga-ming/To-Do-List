import "./App.css";
import Main from "./pages/Main";

// import Practice from "./components/Practice";
import Love from "./components/Love";

const App = () => {
  return (
    <div className="App">
      <Main />
      {/* <Practice name=" ay" num="1" />
      <Practice name=" by" num="2" />
      <Practice name=" cy" num="3" />
      <Practice name=" dy" num="4" /> */}
      {/* <div className="title">사랑대결</div>
      <div className="content">
        <Love name="보영" />
        <Love name="광수" />
      </div>
      <div className="inputs">
        <div className="input">
          <input type="text" placeholder=" 장점적기"></input>
          <button className="plus">+</button>
        </div>
        <div className="input">
          <input type="text" placeholder=" 장점적기"></input>
          <button className="plus">+</button>
        </div>
      </div> */}
    </div>
  );
};

export default App;
