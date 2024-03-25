import Title from "./components/Title";
import BoxCreator from "./components/BoxCreator";
import Login from "./components/Login";
import "./index.css"; // Import Tailwind CSS styles
import "tailwindcss/tailwind.css";

function App() {
  return (
    <>
      <Title />
      <Login />
      <BoxCreator />
    </>
  );
}

export default App;
