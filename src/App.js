import { GlobalStyles } from "./styles/globalStyles";
import TextBox from "./components/TextBox";
function App() {
  return (
    <>
      <GlobalStyles />
      <div className="App">
        <TextBox />
      </div>
    </>
  );
}

export default App;
