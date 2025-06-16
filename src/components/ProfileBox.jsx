import BookmarkIcon from "@mui/icons-material/Bookmark";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import EmailIcon from "@mui/icons-material/Email";
import StarIcon from "@mui/icons-material/Star";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import ProfileImage from "../assets/profile.jpg";
import {
  Avatar,
  Box,
  Button,
  Card,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";

// Mock data for the user profile
const userData = {
  name: "Ale Villegas",
  role: "Estudiante",
  department: "Sistemas computacionales",
  studentId: "2022630679",
  email: "avillegasg2101@alumno.ipn.mx",
  password: "*****************",
};

const ProfileBox = () => {
  return (
    <Box sx={{ width: "80%", position: "relative", top: "50px", left: "10%" }}>
      <Card
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: "5px",
          border: "0.5px solid",
          borderColor: "white",
          boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.65)",
        }}
      >
        {/* Perfil */}
        <Box sx={{ position: "relative", mb: 1 }}>
          <Avatar
            src={ProfileImage}
            alt={userData.name}
            sx={{
              width: 100,
              height: 100,
              position: "absolute",
              top: -50,
              left: "50%",
              transform: "translateX(-50%)",
            }}
          />
          <IconButton
            sx={{
              position: "absolute",
              top: 20,
              right: -51,
              backgroundColor: "#002250",
              width: 38,
              height: 38,
              border: "2.5px solid white",
              "&:hover": {
                backgroundColor: "#0090A4",
              },
            }}
          >
            <CameraAltIcon sx={{ color: "white", fontSize: 20 }} />
          </IconButton>
        </Box>

        {/* Nombre y rol */}
        <Typography
          variant="h3"
          color="#002250"
          sx={{
            mt: 7,
            fontWeight: "bold",
            textAlign: "center",
            fontSize: "20px",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          {userData.name}
        </Typography>

        <Typography
          variant="body1"
          color="#0090A4"
          sx={{ textAlign: "center", mb: 1 }}
        >
          {userData.role}
        </Typography>

        <Divider sx={{ width: "50%", my: 0.5 }} />

        {/* User Information */}
        <Box sx={{ width: "100%", mt: 2, ml: 8 }}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
            <BookmarkIcon sx={{ color: "#0090a4", mr: 1 }} />
            <Typography variant="body1" color="grey.700">
              {userData.department}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
            <StarIcon sx={{ color: "#0090A4", mr: 1 }} />
            <Typography variant="subtitle2" color="grey.700">
              Número de boleta:{" "}
              <Typography component="span" variant="subtitle2" color="grey.700">
                {userData.studentId}
              </Typography>
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
            <EmailIcon sx={{ color: "#0090A4", mr: 1 }} />
            <Typography variant="body1" color="grey.700">
              {userData.email}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
            <VpnKeyIcon sx={{ color: "#0090A4", mr: 1 }} />
            <Typography variant="subtitle2" color="grey.700">
              Contraseña:{" "}
              <Typography component="span" variant="body1" color="grey.700">
                {userData.password}
              </Typography>
            </Typography>
          </Box>
        </Box>

        {/* Botón de editar */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            width: "100%",
            my: 3,
          }}
        >
          <Button
            variant="contained"
            sx={{
              bgcolor: "#002250",
              fontWeight: 600,
              fontFamily: "'Orbitron', sans-serif",
              fontSize: 15,
              height: 40,
              mr: 5,
              "&:hover": { bgcolor: "#0090a4" },
            }}
          >
            Editar
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

export default ProfileBox;
