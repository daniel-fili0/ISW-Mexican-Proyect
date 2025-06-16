import { useState } from "react";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  InputAdornment,
  Paper,
  TextField,
  Typography,
  IconButton,
} from "@mui/material";

// Imágenes
import fondo from "../assets/Cel.jpg";
import logo from "../assets/logo.png";

const Login = () => {
  // Estados
  const [correo, setCorreo] = useState("");
  const [errorCorreo, setErrorCorreo] = useState(false);

  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Validación correo
  const handleCorreoChange = (e) => {
    const value = e.target.value;
    setCorreo(value);
    const correoValido = /^[\w-.]+@alumno\.ipn\.mx$|^\d{10}$/;
    setErrorCorreo(!correoValido.test(value));
  };

  // Validación contraseña
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setErrorPassword(value.length < 8);
  };

  return (
    <Container
      sx={{
        width: "412px",
        height: "100vh",
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
          top: "25px",
          right: 6,
        }}
      >
        <Paper
          sx={{
            position: "absolute",
            width: "373px",
            height: "612px",
            top: "22px",
            bgcolor: "#333333ab",
            borderRadius: (theme) => theme.shape.borderRadius,
          }}
        >
          {/* Campo correo */}
          <Box
            sx={{
              position: "absolute",
              width: "328px",
              top: "313px",
              left: "24px",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Audiowide, sans-serif",
                fontWeight: 400,
                color: "white",
                fontSize: "13px",
                mb: "2px",
              }}
            >
              Correo institucional o número de boleta
            </Typography>
            <TextField
              fullWidth
              value={correo}
              onChange={handleCorreoChange}
              placeholder="Ingrese un correo o boleta válidos"
              error={errorCorreo}
              sx={{
                "& .MuiOutlinedInput-root": {
                  height: "34px",
                  bgcolor: "white",
                  "& input": {
                    padding: "8px 16px",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 400,
                    fontSize: "12px",
                    color: "grey",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#770275",
                    borderWidth: "2px",
                  },
                },
              }}
            />
            {errorCorreo && (
              <Typography
                sx={{
                  mt: "2px",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 400,
                  color: "#ffa4fd",
                  fontSize: "10.5px",
                }}
              >
                Correo institucional no válido
              </Typography>
            )}
          </Box>

          {/* Campo contraseña */}
          <Box
            sx={{
              position: "absolute",
              width: "291px",
              top: "393px",
              left: "24px",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Audiowide, sans-serif",
                fontWeight: 400,
                color: "white",
                fontSize: "13px",
                lineHeight: "19.6px",
                my: "2px",
              }}
            >
              Contraseña
            </Typography>
            <TextField
              name="password"
              fullWidth
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={handlePasswordChange}
              error={errorPassword}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      size="small"
                      onClick={() => setShowPassword((prev) => !prev)}
                    >
                      {showPassword ? (
                        <VisibilityIcon sx={{ width: 20, height: 20 }} />
                      ) : (
                        <VisibilityOffIcon sx={{ width: 20, height: 20 }} />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  height: "34px",
                  bgcolor: "white",
                  "& input": {
                    padding: "8px 16px",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 400,
                    fontSize: "14px",
                    color: "#00000066",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#770275",
                    borderWidth: "2px",
                  },
                },
              }}
            />
            {errorPassword && (
              <Typography
                sx={{
                  mt: "2px",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 400,
                  color: "#ffa4fd",
                  fontSize: "10.5px",
                }}
              >
                Contraseña incorrecta
              </Typography>
            )}
          </Box>

          {/* Botón Ingresar */}
          <Box
            sx={{
              position: "absolute",
              width: "252px",
              height: "32px",
              top: "480px",
              left: "61px",
            }}
          >
            <Link to="/Profile">
              <Button
                variant="contained"
                fullWidth
                sx={{
                  bgcolor: "#08001b",
                  fontWeight: 700,
                  fontFamily: "'Orbitron', sans-serif",
                  fontSize: 15,
                  height: 40,
                  mb: 1,
                  "&:hover": { bgcolor: "#770275" },
                }}
              >
                Ingresar
              </Button>
            </Link>
          </Box>

          {/* Link a Registro */}
          <Typography
            sx={{
              position: "absolute",
              top: "530px",
              left: "50px",
              fontFamily: "Orbitron, sans-serif",
              fontWeight: 700,
              fontSize: "12px",
              WebkitTextStroke: "0.5px #770275",
            }}
          >
            <Box component="span" sx={{ color: "white" }}>
              ¿Aún no tienes una cuenta?{" "}
            </Box>
            <Link
              to="/register"
              style={{
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
            top: "50px",
            left: "40px",
            objectFit: "cover",
          }}
        />

        {/* Título */}
        <Typography
          variant="h1"
          sx={{
            position: "absolute",
            top: 5,
            left: "60px",
            fontFamily: "Orbitron, sans-serif",
            fontWeight: 900,
            color: "white",
            fontSize: "30px",
            WebkitTextStroke: "1.5px #770275",
          }}
        >
          INICIAR SESIÓN
        </Typography>

        {/* Recuperar contraseña */}
        <Link to="/reset-password">
          <HelpOutlineIcon
            sx={{
              position: "absolute",
              width: "40px",
              top: "443px",
              left: "315px",
              color: "#ffa4fd",
            }}
          />
        </Link>
      </Box>
    </Container>
  );
};

export default Login;
