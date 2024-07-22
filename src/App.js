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
          link="https://www.airbnb.ie/experiences/525291?location=Ireland&currentTab=experience_tab&federatedSearchId=b703a05b-9f44-4e57-854a-4539ee18792f&sectionId=2e86d1c6-2f65-43c1-a3ae-d3aa5ba81a3d"
        />
        <Card 
          img={Image2}
          rating="4.91 (208) &bull; Fethard-On-Sea"
          description="Sea Cave Kayaking Experience"
          price="Hosted by Graham"
          link="https://www.airbnb.ie/experiences/140655?location=Ireland&currentTab=experience_tab&federatedSearchId=b703a05b-9f44-4e57-854a-4539ee18792f&sectionId=30b871f3-41d4-4927-8090-864513fb8971"
        />
        <Card 
          img={Image3}
          rating="4.93 (750) &bull; Dublin"
          description="Original Dublin Walking Tour"
          price="From &euro; 23 / person"
          link="https://www.airbnb.ie/experiences/4336116?location=Ireland&currentTab=experience_tab&federatedSearchId=b703a05b-9f44-4e57-854a-4539ee18792f&sectionId=2e86d1c6-2f65-43c1-a3ae-d3aa5ba81a3d"
        />
        <Card 
          img={Image4}
          rating="4.91 (1,012) &bull; Dublin"
          description="Irish Food Trail"
          price="From &euro; 89 / person"
          link="https://www.airbnb.ie/experiences/98930?location=Ireland&currentTab=experience_tab&federatedSearchId=b703a05b-9f44-4e57-854a-4539ee18792f&sectionId=2e86d1c6-2f65-43c1-a3ae-d3aa5ba81a3d"
        />
        <Card 
          img={Image5}
          rating="5.0 (142) &bull; Galway"
          description="The Irish Dance Experience"
          price="From &euro; 30 / person"
          link="https://www.airbnb.ie/experiences/557446?location=Ireland&currentTab=experience_tab&federatedSearchId=b703a05b-9f44-4e57-854a-4539ee18792f&sectionId=35fa8797-74d3-4125-a3de-f395b313a962"
        />
        <Card 

          img={Image6}
          rating="4.99 (537) &bull; Waterville"
          description="Sheep Herding Demonstration"
          price="From &euro; 20 / person"
          link="https://www.airbnb.ie/experiences/322037?location=Ireland&currentTab=experience_tab&federatedSearchId=b703a05b-9f44-4e57-854a-4539ee18792f&sectionId=2e86d1c6-2f65-43c1-a3ae-d3aa5ba81a3d"
        />
      </div>
    </div>
  );
}
export default App;