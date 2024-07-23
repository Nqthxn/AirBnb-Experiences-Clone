import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from "./data";

function App(){
  const cards = data.map(item => {
    return(
      <Card 
          key={item.id}
          img={item.img}
          rating={item.rating}
          description={item.description}
          price={item.price}
          link={item.link}
          openSpots={item.openSpots}
      />
    );

  });
  return(
    <div>
      <Navbar />
      <Hero />
      <div className="display-cards">
        {cards}
      </div>
    </div>
  );
}

export default App;