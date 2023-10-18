import React from 'react';
import {
  Box,
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Badge,
} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';

interface NavBarInterface {
  itemsOnTheBag: number;
}

const NavBar = ({ itemsOnTheBag }: NavBarInterface) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Redux Practice
          </Typography>
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Badge badgeContent={itemsOnTheBag} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
