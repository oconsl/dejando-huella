import React, { useEffect, useState, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import CardsPet from '../../components/CardsPets/CardsPets';
import { Box, Container, Pagination, Typography } from '@mui/material';
import Filter from '../../components/Filters/Filters';
import AddPet from '../../components/AddPet/AddPet';
import { fetchLostPetsData, fetchFilterLostPetsData } from '../../services';
import CardsPetsSkeleton from '../../components/CardsPets/util/CardsPetsSkeleton';

const LostPets = () => {
  const [lostPets, setLostPets] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const [lostPetsGroups, setLostPetsGroups] = useState([[1]]);
  const navigate = useNavigate();
  const skeletonCount = new Array(9 - (lostPets.length % 9)).fill(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchLostPetsData({ setLostPets });
  }, []);

  useEffect(() => {
    const reg = /filter./g
    navigate(`/lost-pets/${page}?${query.replace(reg, '').toLocaleLowerCase()}`);
  }, [page, query]);

  useEffect(() => {
    fetchFilterLostPetsData({ query, setLostPets });
    setPage(1);
    setMaxPage(lostPets.length);
  }, [query]);

  useEffect(() => {
    const splitArrayIntoSubArrays = () => {
      let subArray = [];
      let i = 0;

      while (i < lostPets.length) {
        subArray.push(lostPets.slice(i, (i += 9)));
      }

      return subArray;
    };

    const subArray = splitArrayIntoSubArrays();

    setLostPetsGroups(subArray);
    setMaxPage(subArray.length);
  }, [lostPets]);

  const handleChange = (value) => {
    setPage(value);
  };

  const handleOnFilter = (value) => {
    setQuery(value);
  };

  return (
    <>
      <Box sx={{display: 'flex', justifyContent: 'space-around'}}>
        <h1>LOST PETS</h1>
        <div>
          <AddPet option={'*AddLost'}/>
        </div>
      </Box>
      <Filter buttonFilter={handleOnFilter} page='lost-pets' />
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {lostPets.length !== 0 && lostPetsGroups.length > 0 ? (
          lostPetsGroups[page - 1].map((item, index) => {
            if (page === maxPage && index === 8 - skeletonCount.length) {
              if (skeletonCount.length === 8) {
                skeletonCount[0] = true;
              }

              return (
                <Fragment key={index}>
                  <CardsPet
                    key={index}
                    title={item.petName}
                    description={item.date + ' - \n' + item.description}
                    button={'More Details'}
                    img_src={item.imageURL}
                    filter={item.filter}
                    addressRoad={item.addressRoad}
                    addressNumber={item.addressNumber}
                    phone={item.phone}
                    position={item.latLng}
                    page='lost-pets'
                  />
                  {skeletonCount.map((content, subIndex) => {
                    return (
                      <CardsPetsSkeleton
                        key={`${page}${subIndex}`}
                        flexVariant={content}
                      />
                    );
                  })}
                </Fragment>
              );
            }

            return (
              <Fragment key={index}>
                <CardsPet
                  key={index}
                  tile={item.petName}
                  description={item.date + ' - \n' + item.description}
                  button={'More Details'}
                  img_src={item.imageURL}
                  filter={item.filter}
                  addressRoad={item.addressRoad}
                  addressNumber={item.addressNumber}
                  phone={item.phone}
                  position={item.latLng}
                  page='lost-pets'
                />
              </Fragment>
            );
          })
        ) : (
          <Box
            sx={{
              height: '500px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography
              variant="h1"
              sx={{ fontWeight: '500', marginBottom: '50px' }}
            >
              Pets Not Found
            </Typography>
            <img
              src="https://cdn-icons-png.flaticon.com/512/21/21656.png"
              width="250px"
              height="250px"
            />
          </Box>
        )}
      </Container>
      <Pagination
        page={page}
        count={maxPage}
        color="primary"
        onChange={(event, value) => {
          handleChange(value);
          window.scrollTo(0, 0);
        }}
        sx={{ display: 'flex', justifyContent: 'center' }}
      />
    </>
  );
};

export default LostPets;
