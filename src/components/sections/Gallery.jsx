import {
    Box,
    Container,
    Grid,
    Paper,
    Typography
} from "@mui/material";

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

                    {[1,2,3,4,5,6].map((item)=>(

                        <Grid
                            key={item}
                            size={{ xs:12, sm:6, md:4 }}
                        >

                            <Paper
                                elevation={3}
                                sx={{
                                    height:260,
                                    borderRadius:4,
                                    overflow:"hidden",
                                    display:"flex",
                                    justifyContent:"center",
                                    alignItems:"center",
                                    bgcolor:"#e0e0e0",
                                    transition:"0.3s",

                                    "&:hover":{
                                        transform:"scale(1.03)"
                                    }
                                }}
                            >

                                <Typography
                                    variant="h6"
                                >
                                    Image {item}
                                </Typography>

                            </Paper>

                        </Grid>

                    ))}

                </Grid>

            </Container>

        </Box>

    );

}

export default Gallery;