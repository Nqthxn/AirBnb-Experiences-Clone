import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import Image1 from './Images/card-image1.webp';
import Image2 from './Images/card-image2.webp';
import Image3 from './Images/card-image3.webp';
import Image4 from './Images/card-image4.webp';
import Image5 from './Images/card-image5.webp';
import Image6 from './Images/card-image6.webp';

function App(){

  return(
    <div>
      <Navbar />
      <Hero />
      <div className="display-cards">
        <Card 
          img={Image1}
          rating="4.93 (1,262) &bull; Galway"
          description="Galway's legendary walking tour!"
          price="From &euro; 15 / person"
        />
        <Card 
          img={Image2}
          rating="4.91 (208) &bull; Fethard-On-Sea"
          description="Sea Cave Kayaking Experience"
          price="Hosted by Graham"
        />
        <Card 
          img={Image3}
          rating="4.93 (750) &bull; Dublin"
          description="Original Dublin Walking Tour"
          price="From &euro; 23 / person"
        />
        <Card 
          img={Image4}
          rating="4.91 (1,012) &bull; Dublin"
          description="Irish Food Trail"
          price="From &euro; 89 / person"
        />
        <Card 
          img={Image5}
          rating="5.0 (142) &bull; Galway"
          description="The Irish Dance Experience"
          price="From &euro; 30 / person"
        />
        <Card 
          img={Image6}
          rating="4.99 (537) &bull; Waterville"
          description="Sheep Herding Demonstration"
          price="From &euro; 20 / person"
        />

      </div>
    </div>
  );
}
export default App;