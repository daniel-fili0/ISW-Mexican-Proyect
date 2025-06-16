import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  InputAdornment,
  Paper,
  TextField,
  Typography,
  IconButton,
  FormControl,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Link,
} from "@mui/material";

// Imágenes
import fondo from "../assets/Cel.jpg";
import logo from "../assets/logo.png";

const Register = () => {
  // Estados
  const [nombre, setNombre] = useState("");
  const [errorNombre, setErrorNombre] = useState(false);
  const [apellidoP, setApellidoP] = useState("");
  const [apellidoM, setApellidoM] = useState("");
  const [career, setCareer] = useState("");
  const [boleta, setBoleta] = useState("");
  const [comprobante, setComprobante] = useState(null);
  const [correo, setCorreo] = useState("");
  const [errorCorreo, setErrorCorreo] = useState(false);

  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState(false);

  const [acceptTerms, setAcceptTerms] = useState(false);

  // Validación nombre
  const handleNombreChange = (e) => {
    const value = e.target.value;
    setNombre(value);
    const nombreValido = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
    setErrorNombre(!nombreValido.test(value));
  };

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
    setErrorConfirmPassword(value !== confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    setErrorConfirmPassword(password !== value);
  };

  // Toggle visibilidad contraseña
  const toggleShowPassword = () => setShowPassword((show) => !show);

  // Manejar archivo comprobante
  const handleFileChange = (e) => {
    setComprobante(e.target.files[0]);
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
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          {/* FORM */}
          <Box
            sx={{
              px: 3,
            }}
          >
            {/* Nombre */}
            <FormControl fullWidth sx={{ mt: 3 }}>
              <Typography
                sx={{
                  fontFamily: "Audiowide, sans-serif",
                  fontWeight: 400,
                  color: "white",
                  fontSize: "13px",
                  my: "2px",
                }}
              >
                Nombre(s)
              </Typography>
              <TextField
                placeholder="Ingrese un nombre válido"
                error={errorNombre}
                value={nombre}
                onChange={handleNombreChange}
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
              {errorNombre && (
                <Typography
                  sx={{
                    mt: "2px",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 400,
                    color: "#ffa4fd",
                    fontSize: "10.5px",
                  }}
                >
                  Nombre inválido
                </Typography>
              )}
            </FormControl>
            {/* Apellidos */}
            <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
              <FormControl sx={{ flex: 1, mt: 2 }}>
                <Typography
                  sx={{
                    fontFamily: "Audiowide, sans-serif",
                    fontWeight: 400,
                    color: "white",
                    fontSize: "13px",
                    mb: "2px",
                  }}
                >
                  Apellido paterno
                </Typography>
                <TextField
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
                  value={apellidoP}
                  onChange={(e) => setApellidoP(e.target.value)}
                />
              </FormControl>
              <FormControl sx={{ flex: 1, mt: 2 }}>
                <Typography
                  sx={{
                    fontFamily: "Audiowide, sans-serif",
                    fontWeight: 400,
                    color: "white",
                    fontSize: "13px",
                    mb: "2px",
                  }}
                >
                  Apellido materno
                </Typography>
                <TextField
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
                  value={apellidoM}
                  onChange={(e) => setApellidoM(e.target.value)}
                />
              </FormControl>
            </Box>
            {/* Carrera */}
            <FormControl fullWidth sx={{ mb: 2 }}>
              <Typography
                sx={{
                  fontFamily: "Audiowide, sans-serif",
                  fontWeight: 400,
                  color: "white",
                  fontSize: "13px",
                }}
              >
                Carrera en curso
              </Typography>
              <Select
                value={career}
                onChange={(e) => setCareer(e.target.value)}
                displayEmpty
                IconComponent={ArrowDropDownIcon}
                size="small"
                renderValue={(selected) =>
                  selected === "" ? "Seleccionar" : selected
                }
                sx={{
                  bgcolor: "white",
                  borderRadius: 1,
                  "& .MuiSelect-select": {
                    padding: "8px 16px",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 400,
                    fontSize: "12px",
                    color: "GREY",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#770275",
                    borderWidth: "2px",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "transparent",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#770275",
                  },
                }}
              >
                <MenuItem value="" sx={{ color: "grey", fontSize: "13px" }}>
                  <em>Seleccionar</em>
                </MenuItem>
                <MenuItem
                  value="Ingeniería en Sistemas Computacionales"
                  sx={{ fontSize: "13px" }}
                >
                  Ingeniería en Sistemas Computacionales
                </MenuItem>
                <MenuItem
                  value="Ingeniería en Inteligencia Artificial"
                  sx={{ fontSize: "13px" }}
                >
                  Ingeniería en Inteligencia Artificial
                </MenuItem>
                <MenuItem
                  value="Licenciatura en Ciencia de Datos"
                  sx={{ fontSize: "13px" }}
                >
                  Licenciatura en Ciencia de Datos
                </MenuItem>
              </Select>
            </FormControl>
            {/* Boleta y Comprobante */}
            <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
              <FormControl sx={{ flex: 1 }}>
                <Typography
                  sx={{
                    fontFamily: "Audiowide, sans-serif",
                    fontWeight: 400,
                    color: "white",
                    fontSize: "13px",
                    mb: "2px",
                  }}
                >
                  No. de boleta
                </Typography>
                <TextField
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
                  value={boleta}
                  onChange={(e) => setBoleta(e.target.value)}
                />
              </FormControl>

              <FormControl sx={{ flex: 1 }}>
                <Typography
                  sx={{
                    fontFamily: "Audiowide, sans-serif",
                    fontWeight: 400,
                    color: "white",
                    fontSize: "13px",
                    mb: "2px",
                  }}
                >
                  Comprobante
                </Typography>
                <Button
                  variant="contained"
                  component="label"
                  endIcon={<FileUploadIcon />}
                  sx={{
                    height: "36px",
                    bgcolor: "#770275",
                    textTransform: "none",
                    fontFamily: "Audiowide, sans-serif",
                    fontWeight: 500,
                    fontSize: "14px",
                    "&:hover": {
                      bgcolor: "#FFA5FD",
                      color: "#770275",
                    },
                  }}
                >
                  Subir
                  <input
                    hidden
                    type="file"
                    onChange={handleFileChange}
                    accept="image/*,application/pdf"
                  />
                </Button>
                {comprobante && (
                  <Typography
                    variant="caption"
                    sx={{
                      fontFamily: "inter, sans-serif",
                      fontWeight: 100,
                      fontSize: "11px",
                      color: "white",
                    }}
                  >
                    {comprobante.name}
                  </Typography>
                )}
              </FormControl>
            </Box>
            {/* Correo */}
            <FormControl fullWidth>
              <Typography
                sx={{
                  fontFamily: "Audiowide, sans-serif",
                  fontWeight: 400,
                  color: "white",
                  fontSize: "13px",
                  my: "2px",
                }}
              >
                Correo institucional
              </Typography>
              <TextField
                fullWidth
                value={correo}
                onChange={handleCorreoChange}
                placeholder="correo@alumno.ipn.mx"
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
            </FormControl>

            {/* Contraseña y Confirmar */}
            <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
              <FormControl sx={{ flex: 1, mt: 2 }}>
                <Typography
                  sx={{
                    fontFamily: "Audiowide, sans-serif",
                    fontWeight: 400,
                    color: "white",
                    fontSize: "13px",
                    mb: "2px",
                  }}
                >
                  Contraseña
                </Typography>
                <TextField
                  name="password"
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
                    Al menos 8 caracteres
                  </Typography>
                )}
              </FormControl>

              <FormControl sx={{ flex: 1, mt: 2 }}>
                <Typography
                  sx={{
                    fontFamily: "Audiowide, sans-serif",
                    fontWeight: 400,
                    color: "white",
                    fontSize: "13px",
                    mb: "2px",
                  }}
                >
                  Confirmar
                </Typography>
                <TextField
                  name="confirmPassword"
                  type={showPassword ? "text" : "password"}
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
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  error={errorConfirmPassword}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={toggleShowPassword} edge="end">
                          {showPassword ? (
                            <VisibilityIcon sx={{ width: 20, height: 20 }} />
                          ) : (
                            <VisibilityOffIcon sx={{ width: 20, height: 20 }} />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                {errorConfirmPassword && (
                  <Typography
                    sx={{
                      mt: "2px",
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 400,
                      color: "#ffa4fd",
                      fontSize: "10.5px",
                    }}
                  >
                    Las contraseñas no coinciden
                  </Typography>
                )}
              </FormControl>
            </Box>

            {/* Términos y condiciones */}
            <FormControlLabel
              control={
                <Checkbox
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                  sx={{
                    color: "white",
                    "&.Mui-checked": {
                      color: "#770275",
                    },
                  }}
                />
              }
              label={
                <Typography sx={{ fontSize: 12, color: "white", opacity: 0.7 }}>
                  Acepto los{" "}
                  <Link href="#" underline="always" sx={{ color: "white" }}>
                    términos y condiciones
                  </Link>
                  .
                </Typography>
              }
              sx={{ mb: 1 }}
            />
          </Box>

          {/* Botón y enlace final */}
          <Box sx={{ px: 2, pb: 2 }}>
            <Button
              variant="contained"
              fullWidth
              disabled={
                !acceptTerms ||
                !nombre ||
                !apellidoP ||
                !apellidoM ||
                !career ||
                !boleta ||
                !correo ||
                !password ||
                !confirmPassword ||
                errorNombre ||
                errorCorreo ||
                errorPassword ||
                errorConfirmPassword
              }
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
              Registrarse
            </Button>

            {/* Link a Login */}
            <Typography
              align="center"
              sx={{
                fontFamily: "Orbitron, sans-serif",
                fontWeight: 700,
                fontSize: "12px",
                WebkitTextStroke: "0.5px #770275",
                color: "white",
              }}
            >
              Ya tengo una cuenta.{" "}
              <RouterLink
                to="/login"
                style={{
                  color: "#ffa4fd",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                Ingresar
              </RouterLink>
            </Typography>
          </Box>
        </Paper>

        {/* Título */}
        <Typography
          variant="h1"
          sx={{
            position: "absolute",
            top: 5,
            left: "110px",
            fontFamily: "Orbitron, sans-serif",
            fontWeight: 900,
            color: "white",
            fontSize: "30px",
            WebkitTextStroke: "1.5px #770275",
          }}
        >
          REGISTRO
        </Typography>
      </Box>
    </Container>
  );
};

export default Register;
