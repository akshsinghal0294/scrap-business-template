import {
    Box,
    Container,
    Grid,
    Paper,
    Stack,
    Typography
} from "@mui/material";

function About() {
    return (
        <Box
            sx={{
                py: 10,
                bgcolor: "#ffffff"
            }}
        >
            <Container maxWidth="lg">

                <Grid
                    container
                    spacing={6}
                    alignItems="center"
                >

                    {/* Left Side */}

                    <Grid size={{ xs: 12, md: 6 }}>

                        <Typography
                            variant="overline"
                            color="primary"
                            fontWeight="bold"
                        >
                            ABOUT US
                        </Typography>

                        <Typography
                            variant="h3"
                            fontWeight={700}
                            gutterBottom
                        >
                            Trusted Scrap Buyer in Bhilwara
                        </Typography>

                        <Typography
                            variant="body1"
                            color="text.secondary"
                            sx={{ mb: 4 }}
                        >
                            We purchase all types of metal, industrial and
                            commercial scrap at the best market price.
                            Our focus is transparent weighing,
                            instant payment and quick pickup service.
                        </Typography>

                        <Stack spacing={2}>

                            <Typography>
                                ✔ Honest Weight
                            </Typography>

                            <Typography>
                                ✔ Best Market Price
                            </Typography>

                            <Typography>
                                ✔ Instant Payment
                            </Typography>

                            <Typography>
                                ✔ Doorstep Pickup
                            </Typography>

                        </Stack>

                    </Grid>

                    {/* Right Side */}

                    <Grid size={{ xs: 12, md: 6 }}>

                        <Paper
                            elevation={2}
                            sx={{
                                height: 350,
                                borderRadius: 4,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                bgcolor: "#eeeeee"
                            }}
                        >

                            <Typography variant="h6">
                                About Image
                            </Typography>

                        </Paper>

                    </Grid>

                </Grid>

            </Container>
        </Box>
    );
}

export default About;