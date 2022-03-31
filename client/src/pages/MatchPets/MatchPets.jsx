import { useEffect, useState, Fragment } from 'react';
// ROUTER
import { useNavigate } from 'react-router-dom';
// MATERIAL UI
import { Box, Pagination, CssBaseline } from '@mui/material';
// COMPONENTS
import MatchPet from '../../components/MatchPet/MatchPet';
import MatchPetSkeleton from '../../components/MatchPet/utils/MatchPetSkeleton';
import AddPet from '../../components/AddPet/AddPet';
// SERVICES
import { fetchMatchPetsData } from '../../services';
// STYLES
import styles from './styles';

const MatchPets = () => {
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const [matchPets, setMatchPets] = useState([]);
  const [matchPetsGroups, setMatchPetsGroups] = useState([[1]]);
  const skeletonCount = new Array(4 - (matchPets.length % 4)).fill(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchMatchPetsData({ setMatchPets });
  }, []);

  useEffect(() => {
    navigate(`/testimony-pets/${page}`);
  }, [page]);

  useEffect(() => {
    const splitArrayIntoSubArrays = () => {
      let subArray = [];
      let i = 0;

      while (i < matchPets.length) {
        subArray.push(matchPets.slice(i, (i += 4)));
      }

      return subArray;
    };

    const subArray = splitArrayIntoSubArrays();

    setMatchPetsGroups(subArray);
    setMaxPage(subArray.length);
  }, [matchPets]);

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <>
      <CssBaseline />
      <Box sx={styles.box_title}>
        <h1 style={styles.title}>TESTIMONY</h1>
        <div style={styles.addPet}>
          <AddPet option={'*AddMatch'} />
        </div>
      </Box>
      <Pagination
        count={maxPage}
        onChange={handleChange}
        color={'secondary'}
        sx={styles.pagination}
      />
      <Box sx={styles.box_container}>
        {matchPets.length !== 0 && matchPetsGroups.length > 0 ? (
          matchPetsGroups[page - 1].map((item, index) => {
            if (page === maxPage && index === 3 - skeletonCount.length) {
              if (skeletonCount.length === 3) {
                skeletonCount[0] = true;
              }

              return (
                <Fragment key={index}>
                  <MatchPet
                    testimonyData={item}
                    key={index}
                    flexVariant={index === 0 || index === 1}
                  />
                  {skeletonCount.map((content, subIndex) => {
                    return (
                      <MatchPetSkeleton key={subIndex} flexVariant={content} />
                    );
                  })}
                </Fragment>
              );
            }

            return (
              <Fragment key={index}>
                <MatchPet
                  testimonyData={item}
                  key={index}
                  flexVariant={index === 0 || index === 1}
                />
              </Fragment>
            );
          })
        ) : (
          <>
            <MatchPetSkeleton key={1} flexVariant={true} />
            <MatchPetSkeleton key={2} flexVariant={true} />
            <MatchPetSkeleton key={3} flexVariant={false} />
            <MatchPetSkeleton key={4} flexVariant={false} />
          </>
        )}
      </Box>
    </>
  );
};

export default MatchPets;
