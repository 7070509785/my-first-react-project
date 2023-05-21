import moment from "moment";
import styles from "./image-reviews-gallary.module.css";
import ImageReview from "./image-review";
import { useState } from "react";
function ImageReviewGallary() {
  const [review, setReview] = useState(null);
  const reviews = [
    {
      stars: "4",
      message: "Looking good",
      userName: "Nutan kumari",
      date: moment(),
      like: 5,
      dislike: 2,
      images: [
        "https://cdn.pixabay.com/photo/2016/12/06/09/31/blank-1886008_640.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLapXXWDumn6BooYRQQW4-azTm74-AhGvRy2S3KRt2BEk0yjuAevLyXmzTq2XDJ3wO_gA&usqp=CAU",
      ],
    },
    {
      stars: "5",
      message: "Love white and printing stuff is goof Overall I'm giving 4.5/5",
      userName: "Nutan kumari",
      date: moment(),
      like: 5,
      dislike: 2,
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkqJh-HkI0vyP5Cu99XpWdO61-BuZaPmDik3rOX2pmycyX57Y9NZhcdtjanF9NmYU7opU&usqp=CAU",
      ],
    },
    {
      stars: "5",
      message: "Gud quality",
      userName: "Nutan kumari",
      date: moment(),
      like: 5,
      dislike: 2,
      images: [
        "https://m.media-amazon.com/images/I/B1EryObaEWS._CLa%7C2140%2C2000%7C61M1SnWJ3aL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX569_.png",
        "https://cdn.shopify.com/s/files/1/1620/6469/products/ilustrado-mens-t-shirt-black-birthday-gift-00550-casual-ultrabasic_477.jpg?v=1579749595",
        "https://m.media-amazon.com/images/I/A1vJUKBjc2L._CLa%7C2140%2C2000%7C61vQJX3k6mL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX679_.png",
        "https://m.media-amazon.com/images/I/A1vJUKBjc2L._CLa%7C2140%2C2000%7C61vQJX3k6mL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX679_.png",
        "https://m.media-amazon.com/images/I/A1vJUKBjc2L._CLa%7C2140%2C2000%7C61vQJX3k6mL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX679_.png",
      ],
    },
    {
      stars: "4",
      message: "Local quality",
      userName: "Nutan kumari",
      date: moment(),
      like: 5,
      dislike: 2,
      images: [
        "https://ih1.redbubble.net/image.1236806637.9582/ssrco,classic_tee,mens,heather_grey,front_alt,square_product,600x600.u6.jpg",
        "https://ih1.redbubble.net/image.451576324.8736/ssrco,classic_tee,womens,101010:01c5ca27c6,front_alt,square_product,600x600.u3.jpg",
      ],
    },
    {
      stars: "5",
      message: "Quality of cloth is good.colour is also nice",
      userName: "Nutan kumari",
      date: moment(),
      like: 5,
      dislike: 2,
      images: [
        "https://m.media-amazon.com/images/I/61hzeZ5B88L._UX522_.jpg",
        "https://image.spreadshirtmedia.com/image-server/v1/products/T650A2PA4005PT17X74Y88D1050310607W25000H13475/views/1,width=378,height=378,appearanceId=2,backgroundColor=F2F2F2,modelId=5084,crop=list/hot-grandpa.jpg",
      ],
    },
    {
      stars: "4",
      message: "Looking Good looking 👌👍👌 awesome 👍👍👍",
      userName: "Nutan kumari",
      date: moment(),
      like: 6,
      dislike: 2,
      images: [
        "https://rlv.zcache.com/sette_bello_t_shirt-r41f501611d7d43939a05c568ca1092f3_k2gm8_307.jpg",
        "https://rlv.zcache.com/sette_bello_t_shirt-r41f501611d7d43939a05c568ca1092f3_k2gm8_307.jpg",
      ],
    },
    {
      stars: "5",
      message: "Gud",
      userName: "Nutan kumari",
      date: moment(),
      like: 5,
      dislike: 2,
      images: [
        "https://ih1.redbubble.net/image.3089604828.1708/ssrco,classic_tee,mens,fafafa:ca443f4786,front_alt,square_product,600x600.jpg",
        "https://ih1.redbubble.net/image.3089604828.1708/ssrco,classic_tee,mens,fafafa:ca443f4786,front_alt,square_product,600x600.jpg",
      ],
    },
  ];

  const externalImage =
    "https://i.pinimg.com/474x/cc/e0/78/cce078329ede2e53f7dde2d205e93c79.jpg";

  return (
    <div>
      <div className={styles.card}>
        <div className={styles.ayshu}>
          {reviews.map((r) =>
            r.images.map((i) => (
              <div
                style={{
                  backgroundImage: `url(${i})`,
                }}
                className={styles.timtim1}
                onClick={() => setReview(r)}
              ></div>
            ))
          )}
        </div>
      </div>
      {review && <ImageReview review={review} />}
    </div>
  );
}

export default ImageReviewGallary;
