import BookmarkIcon from "@mui/icons-material/Bookmark";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import EmailIcon from "@mui/icons-material/Email";
import StarIcon from "@mui/icons-material/Star";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
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
  name: "Alejandra Villegas",
  role: "Estudiante",
  department: "Sistemas computacionales",
  studentId: "2022630679",
  email: "avillegasg2101@alumno.ipn.mx",
  password: "*****************",
  profileImage: "https://example.com/image-1.png", // Replace with actual image URL in production
};

const ProfileBox = () => {
  return (
    <Box sx={{ width: "100%", position: "relative", my: 2 }}>
      <Card
        sx={{
          position: "relative",
          pt: 7,
          pb: 2,
          px: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: "5px",
          border: "0.5px solid",
          borderColor: "primary.main",
          boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.65)",
        }}
      >
        {/* Profile Avatar with Camera Icon */}
        <Box sx={{ position: "relative", mb: 1 }}>
          <Avatar
            src={userData.profileImage}
            alt={userData.name}
            sx={{
              width: 106,
              height: 106,
              position: "absolute",
              top: -106,
              left: "50%",
              transform: "translateX(-50%)",
              border: "3px solid white",
            }}
          />
          <IconButton
            sx={{
              position: "absolute",
              top: -36,
              right: -21,
              backgroundColor: "primary.main",
              width: 42,
              height: 42,
              border: "3px solid white",
              "&:hover": {
                backgroundColor: "primary.dark",
              },
            }}
          >
            <CameraAltIcon sx={{ color: "white", fontSize: 20 }} />
          </IconButton>
        </Box>

        {/* User Name and Role */}
        <Typography
          variant="h3"
          color="primary.main"
          sx={{ mt: 7, fontWeight: "bold", textAlign: "center" }}
        >
          {userData.name}
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ textAlign: "center", mb: 1 }}
        >
          {userData.role}
        </Typography>

        <Divider sx={{ width: "45%", my: 1 }} />

        {/* User Information */}
        <Box sx={{ width: "100%", mt: 2, px: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
            <BookmarkIcon sx={{ color: "text.secondary", mr: 1 }} />
            <Typography variant="body1" color="text.secondary">
              {userData.department}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
            <StarIcon sx={{ color: "text.secondary", mr: 1 }} />
            <Typography variant="subtitle2" color="text.secondary">
              Número de boleta:{" "}
              <Typography
                component="span"
                variant="body1"
                color="text.secondary"
              >
                {userData.studentId}
              </Typography>
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
            <EmailIcon sx={{ color: "text.secondary", mr: 1 }} />
            <Typography variant="body1" color="text.secondary">
              {userData.email}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
            <VpnKeyIcon sx={{ color: "text.secondary", mr: 1 }} />
            <Typography variant="subtitle2" color="text.secondary">
              Contraseña:{" "}
              <Typography
                component="span"
                variant="body1"
                color="text.secondary"
              >
                {userData.password}
              </Typography>
            </Typography>
          </Box>
        </Box>

        {/* Edit Button */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            width: "100%",
            mt: 2,
          }}
        >
          <Button
            variant="contained"
            color="primary"
            sx={{
              borderRadius: "var(--size-radius-200)",
              height: 36,
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
