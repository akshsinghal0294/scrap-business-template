import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";

const services = [
  {
    title: "Corrugated Boxes",
    description:
      "We purchase used and waste corrugated boxes of all sizes and types for recycling and reuse",
  },
  {
    title: "Paper Tubes / Cores",
    description:
      "We purchase used and waste paper tubes and cores from various industries for recycling and responsible reuse.",
  },
  {
    title: " Old Books ",
    description:
      "We purchase old, used, and unwanted books of all types for recycling and proper processing. 📚",
  },
  {
    title: "Old newspapers",
    description:
      "We purchase old newspapers, magazines, and other discarded printed paper materials for recycling and responsible disposal. 📰",
  },
  {
    title: "Brown paper",
    description:
      "We purchase used and waste brown paper, kraft paper, and other similar paper materials for recycling and reuse. 📦",
  },
];

function Services() {
  return (
    <Box
      sx={{
        py: 10,
        bgcolor: "#f8f9fa",
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="overline" color="primary" fontWeight="bold">
          OUR SERVICES
        </Typography>

        <Typography variant="h3" fontWeight={700} mb={2}>
          What We Buy
        </Typography>

        <Typography color="text.secondary" mb={6}>
          We purchase all kinds of paper waste including industrial paper waste
          at the best market price .
        </Typography>

        <Grid container spacing={3}>
          {services.map((service, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card
                elevation={2}
                sx={{
                  height: "100%",
                  borderRadius: 3,
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-6px)",
                  },
                }}
              >
                <CardContent>
                  <Typography variant="h5" fontWeight={600} mb={2}>
                    {service.title}
                  </Typography>

                  <Typography color="text.secondary">
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Services;
