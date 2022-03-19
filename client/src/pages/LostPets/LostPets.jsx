import React, { useEffect, useState } from 'react';
import CardsPet from '../../components/CardsPets/CardsPets';
import { Box, Container } from '@mui/material';
import Filter from '../../components/Filters/Filters';
import { lostPets } from '../../TestData/dataBaseLostPets';

const LostPets = () => {
  const [filter, setFilter] = useState(false);
  const [parameter, setParameter] = useState({});

  const handleOnFilter = (value) => {
    setFilter(true);
    setParameter(value);
  };

  const filterLess = () => {
    setFilter(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Box>
        <h1>LOST PETS</h1>
      </Box>
      <Filter buttonFilter={handleOnFilter} filterLess={filterLess} />
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {!filter &&
          lostPets.map((item, index) => (
            <CardsPet
              key={index}
              title={item.name}
              description={item.date + ' - \n' + item.description}
              button={'More Details'}
              img_src={item.image}
              filter={item.filter}
              addressRoad={item.addressRoad}
              addressNumber={item.addressNumber}
              phone={item.phone}
            />
          ))
        }

        {filter &&
          lostPets
            .filter((item) => {
              const keys = Object.keys(parameter);

              return keys.every((key) => item.filter[key] === parameter[key]);
            })
            .map((item, index) => (
              <CardsPet
                key={index}
                title={item.name}
                description={item.date + ' - \n' + item.description}
                button={'More Details'}
                img_src={item.image}
                filter={item.filter}
                addressRoad={item.addressRoad}
                addressNumber={item.addressNumber}
                phone={item.phone}
              />
            ))
        }
      </Container>
    </>
  );
};

export default LostPets;
