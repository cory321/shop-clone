import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/home/navigation/navigation.component";

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
