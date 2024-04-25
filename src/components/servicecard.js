import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {   Modal, Box } from '@mui/material';
import BasicDateCalendar from '../NAttendance/Nattendance';
import { CheckBox as CheckBoxIcon } from '@mui/icons-material';
function ServiceCard({ChildProps}) {
  const navigate=useNavigate()
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Card variant="outlined" sx={{ maxWidth: 1000, p: 1, display: 'inline-block', m: 1 }}>
        <CardContent>
          <IconButton color="primary" aria-label="check box" onClick={()=>{
            navigate("/calendar")
          }} >
            <AddShoppingCartIcon />
          </IconButton>
          <Typography variant="body2" color="text.secondary" onClick={handleOpen}>
            Business
          </Typography>
        </CardContent>
      </Card>
   
     </div>
  )
}

export default ServiceCard