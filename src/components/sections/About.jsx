import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import aboutPhoto from "../../assets/about-photo.jpg";

function About() {
  return (
    <Box
      sx={{
        py: 10,
        bgcolor: "#ffffff",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          {/* Left Side */}

          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="overline" color="primary" fontWeight="bold">
              ABOUT US
            </Typography>

            <Typography variant="h3" fontWeight={700} gutterBottom>
              Trusted Waste Paper Buyer in Bhilwara
            </Typography>

            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
              We purchase all types of waste and recyclable paper, including:
              Corrugated boxes , Paper tubes/cores , Old books , Old newspapers
              , Brown paper , All other types of waste paper and paper scrap
            </Typography>

            <Stack spacing={2}>
              <Typography>✔ Honest Weight</Typography>

              <Typography>✔ Best Market Price</Typography>

              <Typography>✔ Instant Payment</Typography>
            </Stack>
          </Grid>

          {/* Right Side */}

          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              component="img"
              src={aboutPhoto}
              alt="Waste paper storage warehouse"
              sx={{
                width: "100%",
                height: 350,
                borderRadius: 4,
                objectFit: "cover",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default About;
