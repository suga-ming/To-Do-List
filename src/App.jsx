import "./App.css";
import Main from "./pages/Main";
import Love_Input from "./components/Love_Input";

// import Practice from "./components/Practice";
import Love from "./components/Love";
import Like_by from "./components/Like_by";
import Like_gs from "./components/Like_gs";

const App = () => {
  return (
    <div className="App">
      {/* <Main /> */}
      {/* <Practice name=" ay" num="1" />
      <Practice name=" by" num="2" />
      <Practice name=" cy" num="3" />
      <Practice name=" dy" num="4" /> */}
      <div className="title">사랑 대결</div>
      <div className="content">
        <div className="percent">
          <Love name="보영" />
        </div>
        <div className="percent">
          <Love name="광수" />
        </div>
      </div>
      <Love_Input />
    </div>
  );
};

export default App;
