import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import NavBar from "./NavBar";
import Menu from "./Menu";
import MenuItem from "./MenuItem";
import NotFound from "./NotFound";
import AddItemForm from "./AddItemForm";
import useFetch from "./hooks/useFetch";

function App() {
  const snackData = useFetch([], "snacks");
  const drinkData = useFetch([], "drinks");
  const menuData = useFetch({}, "menuDescriptions");

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home snacks={snackData.data}/>}></Route>
            <Route path="/snacks" element={<Menu items={snackData.data} title="Food" category="snacks" menuDesc={menuData.data}/>}></Route>
            <Route path="/snacks/:id" element={<MenuItem items={snackData.data} cantFind="/snacks" />}></Route>
            <Route path="/snacks/new" element={<AddItemForm category="snacks" refresh={snackData.changeRefresh}/>}></Route>
            <Route path="/drinks" element={<Menu items={drinkData.data} title="Drinks" category="drinks" menuDesc={menuData.data}/>}></Route>
            <Route path="/drinks/:id" element={<MenuItem items={drinkData.data} cantFind="/drinks" />}></Route>
            <Route path="/drinks/new" element={<AddItemForm category="drinks" refresh={drinkData.changeRefresh}/>}></Route>
            <Route path="*" element={<NotFound/>}></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
