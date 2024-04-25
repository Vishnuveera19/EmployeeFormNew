import React from 'react'
import ServiceCard from './servicecard'
import BadgeIcon from '@mui/icons-material/Badge';
import BusinessIcon from '@mui/icons-material/Business';
import Grid from '@mui/material/Grid';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Container from '@mui/material/Container';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import { comparray } from './componentarray';
// import SearchIconWrapper from '@mui'
const Layoutcomp = ({ChildProps},{IconProps}) => {

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '20px', // Adjust border radius as needed
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: 'auto', // Align to the center
    marginLeft: 'auto', // Align to the center
    width: '550px', // Set the width to 500px
    border: '3px solid black', // Set border to solid 5px black
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    padding: '10px', // Adjust padding to match your design
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    borderRadius: '20px', // Adjust border radius as needed
  }));

  


  
  return(
    <><Container >
        <Grid container justifyContent="center">
        <Search>
          <StyledInputBase
            placeholder="Search…"
            ChildProps={{ 'aria-label': 'search' }}
          />
        </Search>
      </Grid>
      <br></br>
    <Grid  container justifyContent="center" alignItems="center" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <ServiceCard ChildProps={BadgeIcon}/>
             
    </Grid>
           
  
   </Container>
   </>
  )
}

export default Layoutcomp