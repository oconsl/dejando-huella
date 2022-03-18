import React, { useEffect, useState } from 'react';
import CardsPet from '../../components/CardsPets/CardsPets';
import { Box, Container } from '@mui/material';
import Filter from '../../components/Filters/Filters';
import { lostPets } from '../../TestData/dataBaseLostPets';

const LostPets = () => {
  const [filter, setFilter] = useState(false);
  const [parameter, setParameter] = useState({})

  const handleOnFilter = (value) => {
    setFilter(true);
    setParameter(value)
  };

  const filterLess = () => {
    setFilter(false)
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <> 
      <Box>
        <h1>LOST PETS</h1>
      </Box>
      <Filter buttonFilter={handleOnFilter} filterLess={filterLess}/>
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
          lostPets.map((item) => (
            <CardsPet
              title={item.name}
              description={item.date + ' - \n' + item.description}
              button={'More Details'}
              img_src={item.image}
              filter={item.filter}
              addressRoad={item.addressRoad}
              addressNumber={item.addressNumber}
              phone={item.phone}
            />
          ))}

        {filter &&
          lostPets
            .filter((item) => {
              const keys = Object.keys(parameter)

              return keys.every(key => item.filter[key] === parameter[key])
            }
              )
            .map((item) => (
              <CardsPet
                title={item.name}
                description={item.date + ' - \n' + item.description}
                button={'More Details'}
                img_src={item.image}
                filter={item.filter}
                addressRoad={item.addressRoad}
                addressNumber={item.addressNumber}
                phone={item.phone}
              />
            ))}

        {/* <CardsPet
          title={'Firulais'}
          description={'Encontrado el dia 22-02-2022'}
          button={'Más Detalles'}
          img_src={
            'https://www.vitake.net/wp-content/uploads/2015/04/ny6-300x300.jpg'
          }
        />
        <CardsPet
          title={'Toto'}
          description={'Encontrado el dia 22-02-2022'}
          button={'Más Detalles'}
          img_src={
            'https://www.vitake.net/wp-content/uploads/2015/04/ny8-300x300.jpg'
          }
        />
        <CardsPet
          title={'Homer'}
          description={'Encontrado el dia 22-02-2022'}
          button={'Más Detalles'}
          img_src={
            'https://www.vitake.net/wp-content/uploads/2015/04/ny3-300x300.jpg'
          }
        />
        <CardsPet
          title={'Michi'}
          description={'Encontrado el dia 22-02-2022'}
          button={'Más Detalles'}
          img_src={
            'https://smylepets.com/wp-content/uploads/2021/04/dragon-li-gato-300x300.jpg'
          }
        />
        <CardsPet
          title={'Negrita'}
          description={'Encontrado el dia 22-02-2022'}
          button={'Más Detalles'}
          img_src={
            'https://fordogtrainers.es/images/razas-de-perros/C/perro-de-raza-cazador-de-mapaches-negro-y-bronce.jpg'
          }
        />
        <CardsPet
          title={'Tom'}
          description={'Encontrado el dia 22-02-2022'}
          button={'Más Detalles'}
          img_src={
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREtlldYkYu2uL4lBd3R9EPmeH_mRvl3UrSRJV7K5uwniw2A7DOaruTtDHlwRDqLEL0o3Q&usqp=CAU'
          }
        /> */}
      </Container>
    </>
  );
};

export default LostPets;
