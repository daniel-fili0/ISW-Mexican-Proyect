import BarChartIcon from "@mui/icons-material/BarChart";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import React, { useState } from "react";

export default function StatusButton() {
  const [value, setValue] = useState(4);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <BottomNavigation value={value} onChange={handleChange} showLabels>
        <BottomNavigationAction label="Inicio" icon={<HomeIcon />} />
        <BottomNavigationAction
          label="Vehículos"
          icon={<DirectionsCarIcon />}
        />
        <BottomNavigationAction label="E/S" icon={<VpnKeyIcon />} />
        <BottomNavigationAction label="Mi status" icon={<BarChartIcon />} />
        <BottomNavigationAction label="Perfil" icon={<PersonIcon />} />
      </BottomNavigation>
    </Box>
  );
}
