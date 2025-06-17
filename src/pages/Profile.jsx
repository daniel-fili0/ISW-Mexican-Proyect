import { Box, Container } from "@mui/material";

// Imágenes
import fondo from "../assets/Cel.jpg";

//componentes
import Header from "../components/General/Header";
import ProfileBox from "../components/Profile/ProfileBox";
import NavegationBar from "../components/General/NavegationBar";

const Profile = () => {
  return (
    <Container
      disableGutters
      sx={{
        width: "412px",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "white",
      }}
    >
      {/* Header y perfil */}
      <Box>
        <Box
          sx={{
            height: "25vh",
            backgroundImage: `url(${fondo})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Header sectionTitle="Perfil" userName="Ale" />
        </Box>

        <ProfileBox />
      </Box>

      {/* Navbar */}
      <NavegationBar />
    </Container>
  );
};

export default Profile;
