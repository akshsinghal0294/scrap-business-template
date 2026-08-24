import {
    Box,
    Container,
    Divider,
    Grid,
    Link,
    Stack,
    Typography
} from "@mui/material";

import CallIcon from "@mui/icons-material/Call";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";

import business from "../../data/business";

function Footer() {
    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth"
        });
    };

    return (
        <Box
            sx={{
                bgcolor: "#0f172a",
                color: "#ffffff",
                pt: 6,
                pb: 3,
                mt: 8
            }}
        >
            <Container maxWidth="lg">

                <Grid container spacing={4}>

                    {/* Company */}

                    <Grid size={{ xs: 12, md: 5 }}>

                        <Typography
                            variant="h5"
                            fontWeight="bold"
                            gutterBottom
                        >
                            {business.name}
                        </Typography>

                        <Typography color="grey.400">
                            {business.description}
                        </Typography>

                    </Grid>

                    {/* Quick Links */}

                    <Grid size={{ xs: 12, md: 3 }}>

                        <Typography
                            variant="h6"
                            gutterBottom
                        >
                            Quick Links
                        </Typography>

                        <Stack spacing={1}>

                            <Link
                                component="button"
                                underline="none"
                                color="inherit"
                                onClick={() => scrollToSection("home")}
                            >
                                Home
                            </Link>

                            <Link
                                component="button"
                                underline="none"
                                color="inherit"
                                onClick={() => scrollToSection("services")}
                            >
                                Services
                            </Link>

                            <Link
                                component="button"
                                underline="none"
                                color="inherit"
                                onClick={() => scrollToSection("gallery")}
                            >
                                Gallery
                            </Link>

                            <Link
                                component="button"
                                underline="none"
                                color="inherit"
                                onClick={() => scrollToSection("contact")}
                            >
                                Contact
                            </Link>

                        </Stack>

                    </Grid>

                    {/* Contact */}

                    <Grid size={{ xs: 12, md: 4 }}>

                        <Typography
                            variant="h6"
                            gutterBottom
                        >
                            Contact
                        </Typography>

                        <Stack spacing={1.5}>

                            <Stack direction="row" spacing={1.5} alignItems="flex-start">
                                <LocationOnIcon fontSize="small" sx={{ mt: "2px" }} />
                                <Typography color="grey.400">
                                    {business.address}
                                </Typography>
                            </Stack>

                            <Stack direction="row" spacing={1.5} alignItems="center">
                                <CallIcon fontSize="small" />
                                <Link
                                    href={`tel:${business.phone}`}
                                    underline="none"
                                    color="inherit"
                                >
                                    {business.phone}
                                </Link>
                            </Stack>

                            <Stack direction="row" spacing={1.5} alignItems="center">
                                <WhatsAppIcon fontSize="small" />
                                <Link
                                    href={`https://wa.me/${business.whatsapp}`}
                                    target="_blank"
                                    underline="none"
                                    color="inherit"
                                >
                                    {business.whatsapp}
                                </Link>
                            </Stack>

                            <Stack direction="row" spacing={1.5} alignItems="center">
                                <EmailIcon fontSize="small" />
                                <Link
                                    href={`mailto:${business.email}`}
                                    underline="none"
                                    color="inherit"
                                >
                                    {business.email}
                                </Link>
                            </Stack>

                        </Stack>

                    </Grid>

                </Grid>

                <Divider
                    sx={{
                        my: 4,
                        bgcolor: "grey.700"
                    }}
                />

                <Typography
                    textAlign="center"
                    color="grey.500"
                >
                    © {new Date().getFullYear()} {business.name}. All Rights Reserved.
                </Typography>

                {business.gstNumber && (
                    <Typography
                        textAlign="center"
                        color="grey.500"
                        variant="body2"
                        mt={1}
                    >
                        GSTIN: {business.gstNumber}
                    </Typography>
                )}

            </Container>
        </Box>
    );
}

export default Footer;