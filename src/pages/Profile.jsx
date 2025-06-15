import divisor2 from "@mui/icons-material/Star";
import header from "@mui/icons-material/Star";
import perfil from "@mui/icons-material/Star";
import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { StatusButton } from "../Components/StatusButton";
import { Graph } from "../Components/Graph";
import { ProfileBox } from "../Components/ProfileBox";
import aver1 from "./aver-1.png";
import image3 from "./image-3.png";

// 👉 Importa imágenes locales
import fondo from "../assets/Cel.jpg";
import logo from "../assets/logo.jpg";

const Profile = () => {
  return (
    <ThemeProvider>
      <Box
        sx={{
          width: "100%",
          bgcolor: "background.default",
          position: "relative",
        }}
      >
        {/* Header and User Profile Section */}
        <Box sx={{ position: "relative", width: "100%" }}>
          <Box
            component="img"
            src={aver1}
            alt="Aver"
            sx={{ width: "100%", height: "179px" }}
          />
          <Box
            component="img"
            src={header}
            alt="Header"
            sx={{
              width: "100%",
              height: "72px",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />

          <Typography
            variant="h1"
            sx={{
              position: "absolute",
              top: "26px",
              left: "42px",
              color: "white",
              fontFamily: "'Orbitron-Bold', Helvetica",
            }}
          >
            Perfil
          </Typography>

          <Box
            sx={{
              position: "absolute",
              top: "2px",
              right: "35px",
              textAlign: "center",
            }}
          >
            <Box
              component="img"
              src={image3}
              alt="Profile"
              sx={{
                width: "45px",
                height: "45px",
                objectFit: "cover",
              }}
            />
            <Typography
              variant="body1"
              sx={{
                color: "white",
                fontFamily: "'Inter-Regular', Helvetica",
              }}
            >
              Ale
            </Typography>
          </Box>

          <ProfileBox />
        </Box>

        {/* Statistics Chart Section */}
        <Box sx={{ width: "100%", mt: 2, position: "relative" }}>
          <Box
            component="img"
            src={perfil}
            alt="Perfil"
            sx={{ width: "100%", height: "279px" }}
          />

          <Box sx={{ position: "relative", zIndex: 1 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                px: 3,
                pt: 1,
              }}
            >
              <Box>
                <Typography
                  variant="h2"
                  sx={{
                    color: "primary.main",
                    fontFamily: "'Orbitron-Bold', Helvetica",
                  }}
                >
                  Estadísticas
                </Typography>
                <Box
                  component="img"
                  src={divisor2}
                  alt="Divisor"
                  sx={{ width: "113px", mt: 1 }}
                />
              </Box>

              <Typography
                variant="subtitle1"
                sx={{
                  color: "secondary.main",
                  fontFamily: "'Inter-Bold', Helvetica",
                }}
              >
                Uso semanal
              </Typography>
            </Box>

            <Graph />

            <Stack alignItems="center" sx={{ mt: 2, mb: 2 }}>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  borderRadius: "var(--size-radius-200)",
                  fontFamily: "'Orbitron-Bold', Helvetica",
                  fontWeight: "bold",
                  fontSize: "15px",
                  lineHeight: "15px",
                  py: "9px",
                  px: "30px",
                }}
              >
                Reporte completo
              </Button>
            </Stack>
          </Box>
        </Box>

        {/* Report Button Section */}
        <StatusButton />
      </Box>
    </ThemeProvider>
  );
};

export default Profile;
