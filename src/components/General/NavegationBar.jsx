import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import BarChartIcon from "@mui/icons-material/BarChart";
import PersonIcon from "@mui/icons-material/Person";
import React, { useState } from "react";

const NavegationBar = () => {
  const [value, setValue] = useState(0);

  return (
    <Box
      sx={{
        width: "100%",
        bottom: 0,
        left: 0,
        bgcolor: "#002250",
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
        sx={{
          backgroundColor: "#002250",
        }}
      >
        <BottomNavigationAction
          label="Inicio"
          icon={<HomeIcon />}
          sx={{ color: "white", "&.Mui-selected": { color: "#00bcd4" } }}
        />
        <BottomNavigationAction
          label="Vehículos"
          icon={<DirectionsCarIcon />}
          sx={{ color: "white", "&.Mui-selected": { color: "#00bcd4" } }}
        />
        <BottomNavigationAction
          label="E/S"
          icon={<VpnKeyIcon />}
          sx={{ color: "white", "&.Mui-selected": { color: "#00bcd4" } }}
        />
        <BottomNavigationAction
          label="Mi status"
          icon={<BarChartIcon />}
          sx={{ color: "white", "&.Mui-selected": { color: "#00bcd4" } }}
        />
        <BottomNavigationAction
          label="Perfil"
          icon={<PersonIcon />}
          sx={{ color: "white", "&.Mui-selected": { color: "#00bcd4" } }}
        />
      </BottomNavigation>
    </Box>
  );
};

export default NavegationBar;
