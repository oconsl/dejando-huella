import React, { useEffect, useState, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';
import Typography from '@mui/material/Typography';
import MatchPet from '../../components/MatchPet/MatchPet';
import MatchPetSkeleton from '../../components/MatchPet/utils/MatchPetSkeleton';
import { fetchMatchPetsData } from '../../services';
import AddPet from '../../components/AddPet/AddPet';

const MatchPets = () => {
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const [matchPets, setMatchPets] = useState([]);
  const [matchPetsGroups, setMatchPetsGroups] = useState([[1]]);
  const skeletonCount = new Array(4 - (matchPets.length % 4)).fill(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchMatchPetsData({ setMatchPets });
  }, []);

  useEffect(() => {
    navigate(`/match-pets/${page}`);
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
      <Box sx={{display: 'flex', justifyContent: 'space-around'}}>
        <h1>MATCH PETS</h1>
        <div>
          <AddPet option={'*AddMatch'}/>
        </div>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
        }}
      >
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
      <Pagination
        count={maxPage}
        onChange={handleChange}
        color={'primary'}
        sx={{ display: 'flex', justifyContent: 'center' }}
      />
    </>
  );
};

export default MatchPets;
