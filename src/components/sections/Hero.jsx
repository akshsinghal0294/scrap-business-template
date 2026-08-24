import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";

import business from "../../data/business";
import heroPhoto from "../../assets/hero-photo.jpg";

function Hero() {
  return (
    <Box
      sx={{
        minHeight: {
          xs: "auto",
          md: "85vh",
        },
        py: {
          xs: 8,
          md: 10,
        },
        display: "flex",
        alignItems: "center",
        bgcolor: "#f8f9fa",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
          {/* Left Section */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="overline" color="primary" fontWeight="bold">
              Welcome To
            </Typography>

            <Typography variant="h2" fontWeight={700} gutterBottom>
              {business.name}
            </Typography>

            <Typography variant="h5" color="primary" gutterBottom>
              {business.tagline}
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mt: 3, mb: 4 }}
            >
              {business.description}
            </Typography>

            <Stack spacing={1} mb={4}>
              <Typography>✔ Corrugated Boxes</Typography>
              <Typography>✔ Paper Tubes & Cores</Typography>
              <Typography>✔ Old Books</Typography>
              <Typography>✔ Old Newspapers</Typography>
              <Typography>✔ Brown Paper</Typography>
              <Typography>✔ All Types of Waste Paper & Paper Scrap</Typography>
            </Stack>

            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                size="large"
                href={`tel:${business.phone}`}
              >
                Call Now
              </Button>

              <Button
                variant="outlined"
                size="large"
                href={`https://wa.me/${business.whatsapp}`}
                target="_blank"
              >
                WhatsApp
              </Button>
            </Stack>
          </Grid>

          {/* Right Section */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              component="img"
              src={heroPhoto}
              alt={business.name}
              sx={{
                width: "100%",
                height: 450,
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

export default Hero;
