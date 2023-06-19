import './App.css';
import MyCard from './myCard';
import Ayush from './ayush';
import Card from './card';
import Counter from './container';
import Image from './image';
import ImageReview from './image-reviews/image-review';
import ImageReviewGallary from './image-reviews/image-reviews-gallary';
import News from './news /news';
import Footer from './footer/footer';
import IconContainer from './iconContainer';
import ProductRating from './product-card/product-rating';
import ProductTopSort from './product-top-filter/product-top-sort';
import ProductTopFilters from './product-top-filter/product-top-filters';
import ProductTopFillerItem from './product-top-filter/product-top-filter-item';
import Card1 from './card1';
import Mandal from './product-top-filter/mandal';
import CarouselCard from './carousel-card';
function App() {
  return (
    <div>
      {/* <MyCard></MyCard>
      <Counter></Counter>
      <Image></Image>
      <Footer></Footer>
      <IconContainer></IconContainer> */}
      <ImageReviewGallary></ImageReviewGallary>
      {/* <News></News>
      <ProfileDetails></ProfileDetails>
      <EditProFile></EditProFile>
      <ChangePasswopde></ChangePasswopde>
      <ChangeNumber></ChangeNumber> */}
      {/* <ProductTopFilters></ProductTopFilters>
      <ProductTopFillerItem></ProductTopFillerItem>
      <Card></Card> */}
      <Ayush></Ayush>
      <Card1></Card1>
      <Mandal></Mandal>
      <CarouselCard></CarouselCard>
    </div>
  );
}
export default App;
