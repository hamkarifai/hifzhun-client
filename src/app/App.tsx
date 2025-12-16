import "@/App.css";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <div className="text-4xl text-black font-bold">Hello World</div>
      <Outlet />
    </>
  );
}

export default App;
