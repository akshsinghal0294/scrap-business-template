import {
    Box,
    Button,
    Container,
    Grid,
    Stack,
    Typography
} from "@mui/material";

import business from "../../data/business";

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
                <Grid
                    container
                    spacing={{ xs: 4, md: 6 }}
                    alignItems="center"
                >
                    {/* Left Section */}
                    <Grid size={{ xs: 12, md: 6 }}>

                        <Typography
                            variant="overline"
                            color="primary"
                            fontWeight="bold"
                        >
                            Welcome To
                        </Typography>

                        <Typography
                            variant="h2"
                            fontWeight={700}
                            gutterBottom
                        >
                            {business.name}
                        </Typography>

                        <Typography
                            variant="h5"
                            color="primary"
                            gutterBottom
                        >
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
                            <Typography>✔ Iron Scrap</Typography>
                            <Typography>✔ Steel Scrap</Typography>
                            <Typography>✔ Copper Scrap</Typography>
                            <Typography>✔ Brass Scrap</Typography>
                            <Typography>✔ Aluminium Scrap</Typography>
                            <Typography>✔ Industrial Scrap</Typography>
                        </Stack>

                        <Stack
                            direction="row"
                            spacing={2}
                        >
                            <Button
                                variant="contained"
                                size="large"
                            >
                                Call Now
                            </Button>

                            <Button
                                variant="outlined"
                                size="large"
                            >
                                WhatsApp
                            </Button>
                        </Stack>

                    </Grid>

                    {/* Right Section */}
                    <Grid size={{ xs: 12, md: 6 }}>

                        <Box
                            sx={{
                                height: 450,
                                borderRadius: 4,
                                bgcolor: "#e0e0e0",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                fontSize: 28,
                                fontWeight: "bold"
                            }}
                        >
                            Hero Image
                        </Box>

                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Hero;