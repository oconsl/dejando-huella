import { useState, useEffect } from 'react';
// MATERIAL UI
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Avatar,
  Grid,
  CssBaseline,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
// MATERIAL ICONS
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
// COMPONENTS
import DialogFS from '../../components/DialogFS/DialogFS';
import UserDeleteDialog from '../../components/UserDeleteDialog/UserDeleteDialog';
import ConfirmDialog from '../../components/ConfirmDialog/ConfirmDialog';
// SERVICES
import { fetchAllPetDataByUsername, fetchUserData } from '../../services';
// STYLES
import styles from './styles';

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
          sx={styles.editIcon}
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
          sx={styles.deleteForeverIcon}
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
    <Box sx={styles.page}>
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
      <CssBaseline />
      <Box sx={styles.box_container}>
        <Box sx={styles.box_user}>
          <Card sx={styles.card}>
            <CardContent sx={styles.cardContent}>
              <Box sx={styles.box_title}>
                <Typography variant='h5' component='div' sx={styles.typography}>
                  PROFILE
                </Typography>
              </Box>
              <Box sx={styles.box_avatar}>
                <Avatar sx={styles.avatar} aria-label='recipe'>
                  {letter}
                </Avatar>
              </Box>
              <Box sx={styles.box_profile}>
                <Box sx={styles.box_grid}>
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
                      <Typography color='text.secondary'>
                        First Name:
                      </Typography>
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
            <CardActions sx={styles.cardAction}>
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
        <Box sx={styles.box_table}>
          <DataGrid
            sx={styles.dataGrid}
            rows={data}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            disableSelectionOnClick
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
