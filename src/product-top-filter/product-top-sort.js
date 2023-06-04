import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './product-top-sort.module.css';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
function ProductTopSort() {
  const all = [
    {
      title: 'Recommended',
    },
    {
      title: "What 's New",
    },
    {
      title: 'Popularity',
    },
    {
      title: 'BetterDiscount',
    },
    {
      title: 'Price: High to Low',
    },
    {
      title: 'Price: Low to High',
    },
    {
      title: 'Customer Rating',
    },
  ];
  const [selectedSort, setSelectedSort] = useState(all[0].title);

  return (
    <div className={styles.mood}>
      <h5>
        Sort by : <span>{selectedSort}</span>
      </h5>

      <FontAwesomeIcon icon={faChevronDown} className={styles.not} />
      <div className={styles.kajal}>
        {all.map((o) => {
          return (
            <div
              className={
                styles.apple +
                ' ' +
                (o.title === selectedSort ? styles.selected : '')
              }
              onClick={() => setSelectedSort(o.title)}
            >
              <h5>{o.title}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductTopSort;
