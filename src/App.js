import './categories.styles.scss'
import categories from './categories.json'

const App = () => {

  return (
    <div className='categories-container'>
    {categories.map(( {title, id, imageUrl} ) => (
      <div key={id} className='category-container'>
        <div className='background-image' style={{
          backgroundImage: `url(${imageUrl})`
        }} />
        <div className='category-body-container'>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </div>
      </div>
  ))}

    </div>
  );
};

export default App;
