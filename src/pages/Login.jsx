import React, { useState } from "react";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {
  Box,
  Button,
  Container,
  InputAdornment,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

// 👉 Importa imágenes locales
import fondo from "../assets/Cel.jpg";
import logo from "../assets/logo.jpg";

const Login = () => {
  return (
    <Container
      sx={{
        width: "412px",
        height: "917px",
        backgroundImage: `url(${fondo})`,
        backgroundSize: "cover",
        backgroundPosition: "50% 50%",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "373px",
          height: "634px",
          top: "131px",
          left: "19px",
        }}
      >
        <Paper
          sx={{
            position: "absolute",
            width: "373px",
            height: "612px",
            top: "22px",
            left: 0,
            bgcolor: "#333333ab",
            borderRadius: (theme) => theme.shape.borderRadius,
            gap: 6,
          }}
          data-color-mode="SDS-dark"
        >
          <Box
            sx={{
              position: "absolute",
              width: "252px",
              height: "32px",
              top: "483px",
              left: "61px",
            }}
          >
            <Button
              variant="contained"
              fullWidth
              sx={{
                height: "32px",
                bgcolor: "#08001b",
                borderRadius: (theme) => theme.shape.borderRadius,
                fontFamily: "'Orbitron-Bold', Helvetica",
                fontWeight: 700,
                fontSize: "15px",
                lineHeight: "15px",
              }}
            >
              Ingresar
            </Button>
          </Box>

          <Box
            sx={{
              width: "326px",
              top: "313px",
              position: "absolute",
              height: "73px",
              left: "24px",
              gap: 2,
            }}
          >
            <Typography
              sx={{
                position: "absolute",
                top: "-1px",
                left: 0,
                fontFamily: "'Audiowide-Regular', Helvetica",
                fontWeight: 400,
                color: "text.primary",
                fontSize: "14px",
                lineHeight: "19.6px",
                whiteSpace: "nowrap",
              }}
            >
              Correo institucional o número de boleta
            </Typography>

            <Box
              sx={{
                position: "absolute",
                width: "328px",
                height: "46px",
                top: "23px",
                left: "-1px",
              }}
            >
              <TextField
                fullWidth
                placeholder="Ingrese un correo o boleta válidos"
                error={true}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    height: "34px",
                    bgcolor: "white",
                    borderRadius: (theme) => theme.shape.borderRadius,
                    "& input": {
                      padding: "8px 16px",
                      fontFamily: "'Inter-Regular', Helvetica",
                      fontWeight: 400,
                      fontSize: "14px",
                      lineHeight: "14px",
                      color: "#00000066",
                    },
                  },
                }}
              />

              <Typography
                sx={{
                  position: "absolute",
                  top: "32px",
                  left: "1px",
                  fontFamily: "'Inter-Regular', Helvetica",
                  fontWeight: 400,
                  color: "#ffa4fd",
                  fontSize: "10px",
                  lineHeight: "14px",
                  whiteSpace: "nowrap",
                }}
              >
                Correo institucional no válido
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              width: "289px",
              top: "393px",
              position: "absolute",
              height: "73px",
              left: "24px",
              gap: 2,
            }}
          >
            <Typography
              sx={{
                position: "absolute",
                top: "-1px",
                left: 0,
                fontFamily: "'Audiowide-Regular', Helvetica",
                fontWeight: 400,
                color: "text.primary",
                fontSize: "14px",
                lineHeight: "19.6px",
                whiteSpace: "nowrap",
              }}
            >
              Contraseña
            </Typography>

            <Box
              sx={{
                position: "absolute",
                width: "291px",
                height: "46px",
                top: "23px",
                left: "-1px",
              }}
            >
              <TextField
                fullWidth
                value="Value"
                type="password"
                error={true}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <VisibilityOffIcon
                        sx={{
                          width: "20px",
                          height: "20px",
                        }}
                      />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    height: "34px",
                    bgcolor: "white",
                    borderRadius: (theme) => theme.shape.borderRadius,
                    "& input": {
                      padding: "8px 16px",
                      fontFamily: "'Inter-Regular', Helvetica",
                      fontWeight: 400,
                      fontSize: "14px",
                      lineHeight: "14px",
                      color: "#00000066",
                    },
                  },
                }}
              />

              <Typography
                sx={{
                  position: "absolute",
                  top: "32px",
                  left: "1px",
                  fontFamily: "'Inter-Regular', Helvetica",
                  fontWeight: 400,
                  color: "#ffa4fd",
                  fontSize: "10px",
                  lineHeight: "14px",
                }}
              >
                Contraseña incorrecta
              </Typography>
            </Box>
          </Box>

          <Typography
            sx={{
              position: "absolute",
              top: "560px",
              left: "16px",
              fontFamily: "'Orbitron-Bold', Helvetica",
              fontWeight: 700,
              fontSize: "15px",
              lineHeight: "15px",
              whiteSpace: "nowrap",
              WebkitTextStroke: "0.5px #770275",
            }}
          >
            <Box component="span" sx={{ color: "white" }}>
              ¿Aún no tienes una cuenta?{" "}
            </Box>
            <Link
              component="span"
              sx={{
                color: "#ffa4fd",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              Registrarse
            </Link>
          </Typography>
        </Paper>

        {/* Logo */}
        <Box
          component="img"
          src={logo}
          alt="Logo"
          sx={{
            position: "absolute",
            width: "294px",
            height: "100px",
            top: "603px",
            left: "40px",
            objectFit: "cover",
          }}
        />

        <Typography
          variant="h1"
          sx={{
            position: "absolute",
            top: 0,
            left: "56px",
            fontFamily: "'Orbitron-Bold', Helvetica",
            fontWeight: 700,
            color: "white",
            fontSize: "30px",
            lineHeight: "30px",
            whiteSpace: "nowrap",
            WebkitTextStroke: "2px #770275",
          }}
        >
          INICIAR SESIÓN
        </Typography>

        <HelpOutlineIcon
          sx={{
            position: "absolute",
            width: "24px",
            height: "24px",
            top: "443px",
            left: "326px",
            color: "white",
          }}
        />
      </Box>
    </Container>
  );
};

export default Login;
