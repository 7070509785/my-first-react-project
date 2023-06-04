import {
  faArrowAltCircleDown,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import ProductTopFillerItem from './product-top-filter-item';
import styles from './product-top-filters.module.css';
import ProductTopSort from './product-top-sort';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
function ProductTopFilters() {
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [selectedItem, setSelectedItem] = useState([]);
  let filters = [
    {
      title: 'Bundles',
      items: [
        {
          key: 'Bundles',
        },
        {
          key: 'Single Styles',
        },
      ],
    },
    {
      title: 'Country of Origin',
      items: [
        {
          key: 'All Countries',
        },
        {
          key: 'India',
        },
      ],
    },
    {
      title: 'Size',
      items: [
        {
          key: '3XS',
        },
        {
          key: 'XXS',
        },
        {
          key: 'XS/S',
        },
        {
          key: 'S',
        },
        {
          key: 'S/M',
        },
        {
          key: 'M',
        },
        {
          key: 'M/L',
        },
        {
          key: 'L',
        },
        {
          key: 'X/L',
        },
        {
          key: 'XL/XXL',
        },
        {
          key: 'XX/L',
        },
        {
          key: '3XL',
        },
        {
          key: '4XL',
        },
        {
          key: '5XL',
        },
        {
          key: '6XL',
        },
        {
          key: '7XL',
        },
        {
          key: '8XL',
        },
        {
          key: '9XL',
        },
        {
          key: '10XL',
        },
      ],
    },
  ];
  const onClick = (f) => {
    if (selectedFilter?.title === f.title) {
      setSelectedFilter(null);
    } else {
      setSelectedFilter(f);
    }
  };

  return (
    <div className={styles.mood5}>
      <div className={styles.ayush}>
        <div className={styles.nutan}>
          {filters.map((f) => (
            <div key={f.title} onClick={() => onClick(f)}>
              <ProductTopFillerItem
                selected={selectedFilter?.title === f.title}
                title={f.title}
              />
            </div>
          ))}
        </div>
        <div>
          <ProductTopSort />
        </div>
      </div>
      {selectedFilter != null && (
        <div className={styles.kajal5}>
          {selectedFilter.items.map((i) => (
            <div key={i.key} className={styles.ayush1}>
              <input
                type='checkbox'
                checked={selectedItem.includes(i.key)}
                onChange={(e) =>
                  setSelectedItem((t) => {
                    if (e.target.checked) {
                      if (!t.includes(i.key)) {
                        t.push(i.key);
                      }
                    } else if (t.includes(i.key)) {
                      t.splice(t.indexOf(i.key), 1);
                    }

                    return [...t];
                  })
                }
              />

              <label>{i.key}</label>
            </div>
          ))}
        </div>
      )}
      <div className={styles.kajal7}>
        {selectedItem.map((s) => (
          <div key={s} className={styles.kajal4}>
            <p>{s}</p>
            <FontAwesomeIcon
              onClick={() => {
                setSelectedItem((t) => {
                  if (t.includes(s)) {
                    t.splice(t.indexOf(s), 1);
                  }
                  return [...t];
                });
              }}
              icon={faXmark}
              className={styles.kajal8}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductTopFilters;
