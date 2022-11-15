import Directory from "./components/directory/directory.component";
import "./categories.styles.scss";
import categories from "./categories.json";

const App = () => {
  return <Directory categories={categories} />;
};

export default App;
