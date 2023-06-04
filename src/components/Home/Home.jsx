import img from "../../images/pictures/picture@2x.png";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme();

const Home = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid container component="main" sx={{ height: "80vh" }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={15}
            md={15}
            sx={{
              backgroundImage: `url(${img})`,
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: 8,
              marginBottom: 5,
            }}
          >
            <div style={styles.container}>
              <h1 style={styles.title}>
                "Use every little chance to become the best version of yourself"
              </h1>
            </div>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
};

export default Home;

const styles = {
  container: {
    minHeight: "calc(100vh - 50px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: 600,
    fontSize: 48,
    textAlign: "center",
    color: "#373737",
    backgroundColor: "rgba(100%, 100%, 100%, 80%)",
  },
};
