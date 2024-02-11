import "./App.css";
import Filter from "./Component/Features/Filter";
import Header from "./Component/Header";
import Navbar from "./Component/Navbar";
import Todo from "./Component/Todo/Todo";

function App() {
  return (
    <div className="grid place-items-center bg-slate-300 h-screen px-6 font-sans">
      <Navbar />
      <div className=" w-full max-w-2xl rounded-lg bg-slate-200">
        <Header />
        <Todo />
        <Filter />
      </div>
    </div>
  );
}

export default App;
