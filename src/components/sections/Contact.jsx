import {
    Box,
    Button,
    Card,
    CardContent,
    Container,
    Grid,
    Stack,
    Typography
} from "@mui/material";

import CallIcon from "@mui/icons-material/Call";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import business from "../../data/business";

function Contact() {

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
                    CONTACT US
                </Typography>

                <Typography
                    variant="h3"
                    fontWeight={700}
                    mb={6}
                >
                    Get In Touch
                </Typography>

                <Grid
                    container
                    spacing={4}
                >

                    {/* Left */}

                    <Grid size={{ xs: 12, md: 6 }}>

                        <Card elevation={2}>

                            <CardContent>

                                <Stack spacing={3}>

                                    <Box>

                                        <Typography
                                            variant="h6"
                                        >
                                            <CallIcon sx={{ mr: 1 }} />

                                            Phone
                                        </Typography>

                                        <Typography>

                                            {business.phone}

                                        </Typography>

                                    </Box>

                                    <Box>

                                        <Typography
                                            variant="h6"
                                        >
                                            <WhatsAppIcon sx={{ mr: 1 }} />

                                            WhatsApp
                                        </Typography>

                                        <Typography>

                                            {business.phone}

                                        </Typography>

                                    </Box>

                                    <Box>

                                        <Typography
                                            variant="h6"
                                        >
                                            <LocationOnIcon sx={{ mr: 1 }} />

                                            Address
                                        </Typography>

                                        <Typography>

                                            {business.address}

                                        </Typography>

                                    </Box>

                                    <Box>

                                        <Typography
                                            variant="h6"
                                        >
                                            <AccessTimeIcon sx={{ mr: 1 }} />

                                            Working Hours
                                        </Typography>

                                        {
                                            business.timings.map((item) => (

                                                <Typography key={item}>
                                                    {item}
                                                </Typography>

                                            ))
                                        }

                                    </Box>

                                    <Stack
                                        direction="row"
                                        spacing={2}
                                        mt={2}
                                    >

                                        <Button
                                            variant="contained"
                                            startIcon={<CallIcon />}
                                            href={`tel:${business.phone}`}
                                        >
                                            Call Now
                                        </Button>

                                        <Button
                                            variant="outlined"
                                            startIcon={<WhatsAppIcon />}
                                            href={`https://wa.me/${business.whatsapp}`}
                                            target="_blank"
                                        >
                                            WhatsApp
                                        </Button>

                                    </Stack>

                                </Stack>

                            </CardContent>

                        </Card>

                    </Grid>

                    {/* Right */}

                    <Grid size={{ xs: 12, md: 6 }}>

                        <Card
                            elevation={2}
                            sx={{
                                height: "100%"
                            }}
                        >

                            <CardContent>

                                <Box
                                    sx={{
                                        height: 400,
                                        overflow: "hidden",
                                        borderRadius: 3,
                                    }}
                                >
                                    <iframe
                                        title="Business Location"
                                        src={business.mapEmbedUrl}
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        loading="lazy"
                                    />
                                </Box>

                            </CardContent>

                        </Card>

                    </Grid>

                </Grid>

            </Container>

        </Box>

    );

}

export default Contact;