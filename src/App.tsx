import { RoutesMain } from "./routes";
import { GlobalStyle } from "./style/global.style";
// import { useContext } from "react";
// import { AppContext } from "./context/appContext";

function App() {
  // const { showModal, newBalance } = useContext(AppContext);

  return (
    <>
      <GlobalStyle />
      <RoutesMain />
    </>
  );
}

export default App;
