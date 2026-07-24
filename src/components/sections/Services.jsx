import {
    Box,
    Card,
    CardContent,
    Container,
    Grid,
    Typography
} from "@mui/material";

const services = [
    {
        title: "Iron Scrap",
        description: "Buying all types of iron scrap at the best market price."
    },
    {
        title: "Steel Scrap",
        description: "Purchase of steel scrap from homes, shops and industries."
    },
    {
        title: "Copper Scrap",
        description: "Best price for copper wires, pipes and industrial copper."
    },
    {
        title: "Brass Scrap",
        description: "Buying brass scrap with transparent weighing."
    },
    {
        title: "Aluminium Scrap",
        description: "Purchase of aluminium scrap from commercial and industrial sources."
    },
    {
        title: "Industrial Scrap",
        description: "Complete industrial scrap pickup and instant payment."
    }
];

function Services() {

    return (

        <Box
            sx={{
                py: 10,
                bgcolor: "#f8f9fa"
            }}
        >

            <Container maxWidth="lg">

                <Typography
                    variant="overline"
                    color="primary"
                    fontWeight="bold"
                >
                    OUR SERVICES
                </Typography>

                <Typography
                    variant="h3"
                    fontWeight={700}
                    mb={2}
                >
                    What We Buy
                </Typography>

                <Typography
                    color="text.secondary"
                    mb={6}
                >
                    We purchase all kinds of metal and industrial scrap at the best market price.
                </Typography>

                <Grid
                    container
                    spacing={3}
                >

                    {
                        services.map((service, index) => (

                            <Grid
                                key={index}
                                size={{ xs: 12, sm: 6, md: 4 }}
                            >

                                <Card
                                    elevation={2}
                                    sx={{
                                        height: "100%",
                                        borderRadius: 3,
                                        transition: "0.3s",
                                        "&:hover": {
                                            transform: "translateY(-6px)"
                                        }
                                    }}
                                >

                                    <CardContent>

                                        <Typography
                                            variant="h5"
                                            fontWeight={600}
                                            mb={2}
                                        >
                                            {service.title}
                                        </Typography>

                                        <Typography
                                            color="text.secondary"
                                        >
                                            {service.description}
                                        </Typography>

                                    </CardContent>

                                </Card>

                            </Grid>

                        ))
                    }

                </Grid>

            </Container>

        </Box>

    );

}

export default Services;