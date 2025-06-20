import { Paper, Typography, Box } from "@mui/material";

// Imágenes
import perfil from "../../assets/profile.jpg";
const avatar = localStorage.getItem("avatar");

const Header = ({ sectionTitle = "Sección", userName = "Usuario" }) => {
  return (
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
        {sectionTitle}
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
          {userName}
        </Typography>

        <Box
          component="img"
          src={avatar || perfil}
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
  );
};

export default Header;
