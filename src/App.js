import { Route, Routes, Outlet } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./components/navigation/navigation.component";

const Shop = () => {
  return (
    <div>
      <h1> I am the Shop Page</h1>
      <Outlet />
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
