import Card from './card';
import styles from './card1.module.css';
function Card1() {
  const cards = [
    {
      imageSrc:
        'https://cdn2.chrono24.com/images/uhren/27503337-b6ca71md5hvluulzzmyht22e-ExtraLarge.jpg',
      image1Src:
        'https://cdn.shopify.com/s/files/1/0262/2963/7156/products/GiftCardMockup1_4bf98dd9-2ea9-4ce5-91d7-85912cf2bd3f_1800x1800.jpg?v=1638757279',
      thela:
        'https://1000logos.net/wp-content/uploads/2022/07/DKNY-logo-1984.png',
      title: 'Inspired By NYC',
    },
    {
      imageSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRata0PwJ-pCVx53VGeOaURutLEb4BY_eAdy3huFiSjPqn_gyFW8OT7k2C0MvwXn_6H3Xg&usqp=CAU',
      image1Src:
        'https://cdn.shopify.com/s/files/1/0262/2963/7156/products/GiftCardMockup1_4bf98dd9-2ea9-4ce5-91d7-85912cf2bd3f_1800x1800.jpg?v=1638757279',
      thela:
        'https://1000logos.net/wp-content/uploads/2022/07/DKNY-logo-1984.png',
      title: 'Traditional To',
    },
    {
      imageSrc:
        'https://igimages.gumlet.io/telugu/gallery/movies/heroheroine2019/heroheroine201219_03.jpg?w=376&dpr=2.6',
      image1Src:
        'https://cdn.shopify.com/s/files/1/0262/2963/7156/products/GiftCardMockup1_4bf98dd9-2ea9-4ce5-91d7-85912cf2bd3f_1800x1800.jpg?v=1638757279',
      thela:
        'https://1000logos.net/wp-content/uploads/2022/07/DKNY-logo-1984.png',
      title: 'A Warld Of luxery',
    },
    {
      imageSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdXImr4y3sauqXZTssxXd5QadlJwhjPBP840tEGQIJK_dWkbcYSCLfPaCjEpy_W2kvBb8&usqp=CAU',
      image1Src:
        'https://cdn.shopify.com/s/files/1/0262/2963/7156/products/GiftCardMockup1_4bf98dd9-2ea9-4ce5-91d7-85912cf2bd3f_1800x1800.jpg?v=1638757279',
      thela:
        'https://1000logos.net/wp-content/uploads/2022/07/DKNY-logo-1984.png',
      title: 'nutan mandal',
    },
    {
      imageSrc:
        'https://w0.peakpx.com/wallpaper/887/235/HD-wallpaper-hero-heroine-arjun-kapoor-parineeti-chopra.jpg',
      image1Src:
        'https://cdn.shopify.com/s/files/1/0262/2963/7156/products/GiftCardMockup1_4bf98dd9-2ea9-4ce5-91d7-85912cf2bd3f_1800x1800.jpg?v=1638757279',
      thela:
        'https://1000logos.net/wp-content/uploads/2022/07/DKNY-logo-1984.png',
      title: 'timtim mandal',
    },
    {
      imageSrc:
        'https://w0.peakpx.com/wallpaper/126/436/HD-wallpaper-jr-ntr-actor-hero-south-indian-thumbnail.jpg',
      image1Src:
        'https://cdn.shopify.com/s/files/1/0262/2963/7156/products/GiftCardMockup1_4bf98dd9-2ea9-4ce5-91d7-85912cf2bd3f_1800x1800.jpg?v=1638757279',
      thela:
        'https://1000logos.net/wp-content/uploads/2022/07/DKNY-logo-1984.png',
      title: 'humanush mandal',
    },
    {
      imageSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsQCRAuDXwG-aIA4wfqPBhP3szmvmW-Ajw0SLbQ8YRGWW5ANBXpBsZbRoASk9UM6GqgOQ&usqp=CAU',
      image1Src:
        'https://cdn.shopify.com/s/files/1/0262/2963/7156/products/GiftCardMockup1_4bf98dd9-2ea9-4ce5-91d7-85912cf2bd3f_1800x1800.jpg?v=1638757279',
      thela:
        'https://1000logos.net/wp-content/uploads/2022/07/DKNY-logo-1984.png',
      title: 'ayush mandal',
    },
    {
      imageSrc:
        'https://drop.ndtv.com/albums/ENTERTAINMENT/alia-ileana-bipasha/8.jpg',
      image1Src:
        'https://cdn.shopify.com/s/files/1/0262/2963/7156/products/GiftCardMockup1_4bf98dd9-2ea9-4ce5-91d7-85912cf2bd3f_1800x1800.jpg?v=1638757279',
      thela:
        'https://1000logos.net/wp-content/uploads/2022/07/DKNY-logo-1984.png',
      title: 'butti mandal',
    },
    {
      imageSrc:
        'https://drop.ndtv.com/albums/ENTERTAINMENT/alia-ileana-bipasha/8.jpg',
      image1Src:
        'https://cdn.shopify.com/s/files/1/0262/2963/7156/products/GiftCardMockup1_4bf98dd9-2ea9-4ce5-91d7-85912cf2bd3f_1800x1800.jpg?v=1638757279',
      thela:
        'https://1000logos.net/wp-content/uploads/2022/07/DKNY-logo-1984.png',
      title: 'butti mandal',
    },
    {
      imageSrc:
        'https://drop.ndtv.com/albums/ENTERTAINMENT/alia-ileana-bipasha/8.jpg',
      image1Src:
        'https://cdn.shopify.com/s/files/1/0262/2963/7156/products/GiftCardMockup1_4bf98dd9-2ea9-4ce5-91d7-85912cf2bd3f_1800x1800.jpg?v=1638757279',
      thela:
        'https://1000logos.net/wp-content/uploads/2022/07/DKNY-logo-1984.png',
      title: 'butti mandal',
    },
    {
      imageSrc:
        'https://w0.peakpx.com/wallpaper/126/436/HD-wallpaper-jr-ntr-actor-hero-south-indian-thumbnail.jpg',
      image1Src:
        'https://cdn.shopify.com/s/files/1/0262/2963/7156/products/GiftCardMockup1_4bf98dd9-2ea9-4ce5-91d7-85912cf2bd3f_1800x1800.jpg?v=1638757279',
      thela:
        'https://1000logos.net/wp-content/uploads/2022/07/DKNY-logo-1984.png',
      title: 'humanush mandal',
    },
    {
      imageSrc:
        'https://w0.peakpx.com/wallpaper/126/436/HD-wallpaper-jr-ntr-actor-hero-south-indian-thumbnail.jpg',
      image1Src:
        'https://cdn.shopify.com/s/files/1/0262/2963/7156/products/GiftCardMockup1_4bf98dd9-2ea9-4ce5-91d7-85912cf2bd3f_1800x1800.jpg?v=1638757279',
      thela:
        'https://1000logos.net/wp-content/uploads/2022/07/DKNY-logo-1984.png',
      title: 'humanush mandal',
    },
    {
      imageSrc:
        'https://w0.peakpx.com/wallpaper/126/436/HD-wallpaper-jr-ntr-actor-hero-south-indian-thumbnail.jpg',
      image1Src:
        'https://cdn.shopify.com/s/files/1/0262/2963/7156/products/GiftCardMockup1_4bf98dd9-2ea9-4ce5-91d7-85912cf2bd3f_1800x1800.jpg?v=1638757279',
      thela:
        'https://1000logos.net/wp-content/uploads/2022/07/DKNY-logo-1984.png',
      title: 'humanush mandal',
    },
  ];

  return (
    <>
      <div className={styles.shop}>
        {cards.map((i) => (
          <div className={styles.last}>
            <Card
              imageSrc={i.imageSrc}
              image1Src={i.image1Src}
              thela={i.thela}
              title={i.title}
              price={i.price}
            />
          </div>
        ))}
      </div>
    </>
  );
}
export default Card1;
