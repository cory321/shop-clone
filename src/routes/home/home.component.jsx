import Directory from "../../components/directory/directory.component";
import categories from "../../categories.json";

const Home = () => {
  return (
    <div>
      <Directory categories={categories} />
    </div>
  );
};

export default Home;
