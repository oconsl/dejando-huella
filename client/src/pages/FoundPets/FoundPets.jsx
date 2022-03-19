import React, { useEffect, useState } from 'react';
import CardsPet from '../../components/CardsPets/CardsPets';
import { Box, Container } from '@mui/material';
import './FoundPets.css';
import Filter from '../../components/Filters/Filters';
import { lostPets } from '../../TestData/dataBaseLostPets';
import Pagination from '@mui/material/Pagination';

const FoundPets = () => {
  const [cards, setCards] = useState(lostPets);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 9;
  const [filterCards, setFilterCards] = useState(lostPets);
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filterCards.slice(indexOfFirstCard, indexOfLastCard);
  const [totalCards, setTotalCards] = useState(cards.length);
  const lastPage = Math.ceil(totalCards / cardsPerPage);

  const handleOnFilter = (value) => {
    if (Object.keys(value).length !== 0) {
      const cardsFilter = cards.filter((item) => {
        const keys = Object.keys(value);
        return keys.every((key) => item.filter[key] === value[key]);
      });

      setFilterCards(cardsFilter);
      setTotalCards(cardsFilter.length);
      setCurrentPage(1);
    } else {
      setFilterCards(lostPets);
      setTotalCards(lostPets.length);
      setCurrentPage(1);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Box>
        <h1>FOUND PETS</h1>
      </Box>
      <Filter buttonFilter={handleOnFilter} />
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {currentCards.map((item, index) => (
          <CardsPet
            key={index}
            description={item.date + ' - \n' + item.description}
            button={'More Details'}
            img_src={item.image}
            filter={item.filter}
            addressRoad={item.addressRoad}
            addressNumber={item.addressNumber}
            phone={item.phone}
          />
        ))}

        <Pagination
          page={currentPage}
          count={lastPage}
          color="primary"
          onChange={(event, value) => {
            setCurrentPage(value);
            window.scrollTo(0, 0);
          }}
        />
      </Container>
    </>
  );
};

export default FoundPets;
