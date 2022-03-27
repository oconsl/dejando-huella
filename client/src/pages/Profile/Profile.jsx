import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import { DataGrid } from '@mui/x-data-grid';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import DialogFS from '../../components/DialogFS/DialogFS';
import UserDeleteDialog from '../../components/UserDeleteDialog/UserDeleteDialog';

// SERVICES
import { fetchAllPetDataByUsername, fetchUserData } from '../../services';
import ConfirmDialog from '../../components/ConfirmDialog/ConfirmDialog';

const Profile = () => {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    id: 0,
  });
  const [letter, setLetter] = useState('');
  const [data, setData] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
  const [userDeleteOpen, setUserDeleteOpen] = useState(false);
  const [id, setId] = useState(0);
  const [option, setOption] = useState('');

  const columns = [
    {
      field: 'section',
      headerName: 'Section',
      width: 150,
    },
    {
      field: 'petName',
      headerName: 'Pet Name',
      width: 150,
    },
    {
      field: 'specie',
      headerName: 'Specie',
      width: 100,
    },
    {
      field: 'breed',
      headerName: 'Breed',
      width: 220,
    },
    {
      field: 'date',
      headerName: 'Date',
      width: 150,
    },
    {
      field: 'edit',
      headerName: 'Edit',
      width: 100,
      renderCell: (params) => (
        <EditIcon
          sx={{ color: 'green', cursor: 'pointer', transform: 'scale(1.5)' }}
          onClick={(event) => handlePetEditClick(event, params)}
        />
      ),
    },
    {
      field: 'delete',
      headerName: 'Delete',
      width: 100,
      renderCell: (params) => (
        <DeleteForeverIcon
          sx={{ color: 'red', cursor: 'pointer', transform: 'scale(1.5)' }}
          onClick={(event) => handlePetDeleteClick(event, params)}
        />
      ),
    },
  ];

  const handlePetEditClick = (event, params) => {
    event.preventDefault();
    event.stopPropagation();
    setId(params.id);
    setOption(params.row.section);
    setDialogOpen(true);
  };

  const handlePetDeleteClick = (event, params) => {
    event.preventDefault();
    event.stopPropagation();
    setId(params.id);
    setOption(params.row.section);
    setConfirmDialogOpen(true);
  };

  const handleEditClick = () => {
    // MODIFY USER
    setId(userData.id);
    setOption('User');
    setDialogOpen(true);
  };

  const handleDeleteClick = () => {
    // ASK FOR DELETE
    setUserDeleteOpen(true);
  };

  useEffect(() => {
    const username = JSON.parse(localStorage.getItem('username'));
    fetchUserData({ setUserData, username });
    setLetter(JSON.parse(localStorage.getItem('username'))[0].toUpperCase());
    fetchAllPetDataByUsername({ setData, username });
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {dialogOpen && (
        <DialogFS setOpen={setDialogOpen} option={option} id={id} />
      )}
      {confirmDialogOpen && (
        <ConfirmDialog
          setOpen={setConfirmDialogOpen}
          option={option}
          id={{ id }}
        />
      )}
      {userDeleteOpen && (
        <UserDeleteDialog setOpen={setUserDeleteOpen} id={userData.id} />
      )}
      <Box
        sx={{
          minWidth: 500,
          display: 'flex',
          justifyContent: 'center',
          my: 3,
        }}
      >
        <Card sx={{ width: '25%', border: 'solid 2px grey' }}>
          <CardContent>
            <Typography
              variant='h5'
              component='div'
              sx={{ textAlign: 'center', mb: 3 }}
            >
              PROFILE
            </Typography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  flex: 2,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Avatar
                  sx={{ bgcolor: 'orange', transform: 'scale(2.5)' }}
                  aria-label='recipe'
                >
                  {letter}
                </Avatar>
              </Box>
              <Box
                sx={{
                  ml: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  textAlign: 'center',
                  flex: 4,
                }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Typography color='text.secondary'>Username:</Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography>
                      {userData.username ? userData.username : '-'}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Typography color='text.secondary'>Email:</Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography>
                      {userData.email ? userData.email : '-'}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Typography color='text.secondary'>First Name:</Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography>
                      {userData.firstName ? userData.firstName : '-'}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Typography color='text.secondary'>Last Name:</Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography>
                      {userData.lastName ? userData.lastName : '-'}
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </CardContent>
          <CardActions sx={{ display: 'flex', justifyContent: 'space-around' }}>
            <Button
              size='large'
              variant='contained'
              color='success'
              onClick={handleEditClick}
            >
              Edit
            </Button>
            <Button
              size='large'
              variant='contained'
              color='error'
              onClick={handleDeleteClick}
            >
              Delete
            </Button>
          </CardActions>
        </Card>
      </Box>
      <div
        style={{
          height: 400,
          width: '52%',
          margin: 'auto',
          marginBottom: '2em',
        }}
      >
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
        />
      </div>
    </>
  );
};

export default Profile;
