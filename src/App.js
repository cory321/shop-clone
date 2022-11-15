import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./routes/home/home.component";

const Navigation = () => {
  return (
    <div>
      <h1>I am the navigation bar</h1>
      <Outlet />
    </div>
  );
};

const ShopPage = () => {
  return <div>I am the Shop Page</div>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<ShopPage />} />
      </Route>
    </Routes>
  );
};

export default App;
