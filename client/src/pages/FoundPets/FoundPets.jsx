import { useEffect, useState, Fragment } from 'react';
// ROUTER
import { useNavigate } from 'react-router-dom';
// MATERIAL UI
import { Box, Pagination, Typography, CssBaseline } from '@mui/material';
// COMPONENTS
import CardsPet from '../../components/CardsPets/CardsPets';
import CardsPetsSkeleton from '../../components/CardsPets/util/CardsPetsSkeleton';
import AddPet from '../../components/AddPet/AddPet';
import Progress from '../../components/Progress/Progress';
import Filter from '../../components/Filters/Filters';
// SERVICES
import { fetchFoundPetsData, fetchFilterFoundPetsData } from '../../services';
// STYLES
import styles from './styles';

const FoundPets = () => {
  const [foundPets, setFoundPets] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const [foundPetsGroups, setFoundPetsGroups] = useState([[1]]);
  const navigate = useNavigate();
  const skeletonCount = new Array(9 - (foundPets.length % 9)).fill(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchFoundPetsData({ setFoundPets, setLoading });
  }, []);

  useEffect(() => {
    const reg = /filter./g;
    navigate(
      `/found-pets/${page}?${query.replace(reg, '').toLocaleLowerCase()}`
    );
  }, [page, query]);

  useEffect(() => {
    fetchFilterFoundPetsData({ query, setFoundPets });
    setPage(1);
    setMaxPage(foundPets.length);
  }, [query]);

  useEffect(() => {
    const splitArrayIntoSubArrays = () => {
      let subArray = [];
      let i = 0;

      while (i < foundPets.length) {
        subArray.push(foundPets.slice(i, (i += 9)));
      }

      return subArray;
    };

    const subArray = splitArrayIntoSubArrays();

    setFoundPetsGroups(subArray);
    setMaxPage(subArray.length);
  }, [foundPets]);

  const handleChange = (value) => {
    setPage(value);
  };

  const handleOnFilter = (value) => {
    setQuery(value);
  };

  return (
    <Box style={styles.page}>
      <CssBaseline/>
      <Box sx={styles.box_title}>
        <h1 style={styles.title}>FOUND</h1>
        <div style={styles.addPet}>
          <AddPet option={'*AddFound'} />
        </div>
      </Box>
      <Filter buttonFilter={handleOnFilter} page="found-pets" />
      <Pagination
        page={page}
        count={maxPage}
        color="secondary"
        onChange={(event, value) => {
          handleChange(value);
        }}
        sx={styles.pagination}
      />
      <Box sx={styles.container}>
        {loading ? (
          <Progress />
        ) : foundPets.length !== 0 && foundPetsGroups.length > 0 ? (
          foundPetsGroups[page - 1].map((item, index) => {
            if (page === maxPage && index === 8 - skeletonCount.length) {
              if (skeletonCount.length === 8) {
                skeletonCount[0] = true;
              }

              return (
                <Fragment key={index}>
                  <CardsPet
                    key={index}
                    title={item.date}
                    description={item.description}
                    date={item.date}
                    button={'More Details'}
                    img_src={item.imageURL}
                    filter={item.filter}
                    addressRoad={item.addressRoad}
                    addressNumber={item.addressNumber}
                    phone={item.phone}
                    position={item.latLng}
                    page="found-pets"
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
                  title={item.date}
                  description={item.description}
                  date={item.date}
                  button={'More Details'}
                  img_src={item.imageURL}
                  filter={item.filter}
                  addressRoad={item.addressRoad}
                  addressNumber={item.addressNumber}
                  phone={item.phone}
                  position={item.latLng}
                  page="found-pets"
                />
              </Fragment>
            );
          })
        ) : (
          <Box sx={styles.box_notFound}>
            <Typography variant="h1" sx={styles.typography}>
              Pets Not Found
            </Typography>
            <img
              src="https://cdn-icons-png.flaticon.com/512/21/21656.png"
              width="250px"
              height="250px"
              alt='No-Results'
            />
          </Box>
        )}
      </Box>
      
    </Box>
  );
};

export default FoundPets;
