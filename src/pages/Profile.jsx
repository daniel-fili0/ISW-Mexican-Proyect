import { Box, Container, Typography, Paper } from "@mui/material";
import ProfileBox from "../components/ProfileBox";
import React from "react";

// Imágenes
import fondo from "../assets/Cel.jpg";
import perfil from "../assets/profile.jpg";

const Profile = () => {
  return (
    <Container
      disableGutters
      sx={{
        width: "412px",
        height: "100vh",
      }}
    >
      {/* Header */}
      <Box
        fullwidth
        sx={{
          height: "25vh",
          backgroundImage: `url(${fondo})`,
          backgroundSize: "cover",
          backgroundPosition: "50% 50%",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "rgba(0, 34, 80, 0.7)",
            height: "60px",
            px: 2,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "white",
              fontFamily: "Orbitron, sans-serif",
              fontSize: "18px",
            }}
          >
            Perfil
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography
              variant="body1"
              sx={{
                color: "white",
                fontFamily: "Inter, sans-serif",
                fontSize: "15px",
              }}
            >
              Ale
            </Typography>

            <Box
              component="img"
              src={perfil}
              alt="Perfil"
              sx={{
                borderRadius: "50%",
                width: "37px",
                height: "37px",
                objectFit: "cover",
              }}
            />
          </Box>
        </Paper>

        <ProfileBox />
      </Box>
    </Container>
  );
};

export default Profile;
