import {
    Box,
    Container,
    Grid,
    Paper,
    Typography
} from "@mui/material";

import gallery from "../../data/gallery";

function Gallery() {

    return (

        <Box
            sx={{
                py: 10,
                bgcolor: "#ffffff"
            }}
        >

            <Container maxWidth="lg">

                <Typography
                    variant="overline"
                    color="primary"
                    fontWeight="bold"
                >
                    GALLERY
                </Typography>

                <Typography
                    variant="h3"
                    fontWeight={700}
                    mb={2}
                >
                    Our Scrap Collection
                </Typography>

                <Typography
                    color="text.secondary"
                    mb={6}
                >
                    A glimpse of our shop, vehicles and different types of scrap materials.
                </Typography>

                <Grid
                    container
                    spacing={3}
                >

                    {gallery.map((image, index)=>(

                        <Grid
                            key={index}
                            size={{ xs:12, sm:6, md:4 }}
                        >

                            <Paper
                                elevation={3}
                                sx={{
                                    height:260,
                                    borderRadius:4,
                                    overflow:"hidden",
                                    transition:"0.3s",

                                    "&:hover":{
                                        transform:"scale(1.03)"
                                    }
                                }}
                            >

                                <Box
                                    component="img"
                                    src={image}
                                    alt={`Scrap collection ${index + 1}`}
                                    sx={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover"
                                    }}
                                />

                            </Paper>

                        </Grid>

                    ))}

                </Grid>

            </Container>

        </Box>

    );

}

export default Gallery;