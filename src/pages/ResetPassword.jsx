import React, { useState } from "react";
import {
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

// 👉 Importa imágenes locales
import fondo from "../assets/Cel.jpg";
import logo from "../assets/logo.jpg";

const ResetPassword = () => {
  // Data for the form
  const formData = {
    title: "RECUPERAR\nCONTRASEÑA",
    label: "Correo institucional o número de boleta",
    placeholder: "Ingrese un correo o boleta válidos",
    errorMessage: "Correo/boleta no registrado",
    buttons: [
      { text: "Cancelar", color: "secondary", width: 144 },
      { text: "Recuperar", color: "primary", width: 144 },
    ],
  };

  return (
    <Box
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
          position: "absolute",
          width: "373px",
          height: "273px",
          top: "290px",
          left: "19px",
        }}
      >
        <Paper
          sx={{
            position: "absolute",
            width: "373px",
            height: "249px",
            top: "24px",
            left: 0,
            bgcolor: "background.paper",
            borderRadius: (theme) => theme.shape.borderRadius,
            padding: 0,
          }}
          data-color-mode="SDS-dark"
        >
          <Stack
            direction="row"
            spacing={3}
            sx={{
              position: "absolute",
              top: "169px",
              left: "24px",
            }}
          >
            <Button
              variant="contained"
              color="secondary"
              sx={{
                width: formData.buttons[0].width,
                height: "32px",
              }}
            >
              {formData.buttons[0].text}
            </Button>

            <Button
              variant="contained"
              color="primary"
              sx={{
                width: formData.buttons[1].width,
                height: "32px",
              }}
            >
              {formData.buttons[1].text}
            </Button>
          </Stack>

          <Box
            sx={{
              position: "absolute",
              width: "326px",
              height: "73px",
              top: "59px",
              left: "24px",
            }}
          >
            <Typography
              variant="h2"
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                color: "text.primary",
              }}
            >
              {formData.label}
            </Typography>

            <Box
              sx={{
                position: "absolute",
                width: "328px",
                top: "23px",
              }}
            >
              <TextField
                fullWidth
                placeholder={formData.placeholder}
                error={true}
                helperText={formData.errorMessage}
                InputProps={{
                  sx: {
                    height: "34px",
                  },
                }}
                FormHelperTextProps={{
                  sx: {
                    color: "error.main",
                  },
                }}
              />
            </Box>
          </Box>
        </Paper>

        <Typography
          variant="h1"
          sx={{
            position: "absolute",
            top: 0,
            left: "53px",
            color: "text.primary",
            WebkitTextStroke: "2px #770275",
            whiteSpace: "pre-line",
          }}
        >
          {formData.title}
        </Typography>
      </Box>

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
    </Box>
  );
};

export default ResetPassword;
