import "./App.css";
// import Main from "./pages/Main";
import Practice from "./components/Practice";

const App = () => {
  return (
    <div className="App">
      {/* <Main /> */}
      <Practice name=" ay" num="1" />
      <Practice name=" by" num="2" />
      <Practice name=" cy" num="3" />
      <Practice name=" dy" num="4" />
    </div>
  );
};

export default App;
