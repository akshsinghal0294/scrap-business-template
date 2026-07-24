import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    Button
} from "@mui/material";

import menu from "../../data/menu";
import business from "../../data/business";

function Navbar() {

    const handleScroll = (id) => {
        document
            .getElementById(id)
            ?.scrollIntoView({
                behavior: "smooth"
            });
    };

    return (
        <AppBar
            position="sticky"
            color="inherit"
            elevation={1}
        >
            <Toolbar>

                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: 700
                    }}
                >
                    {business.name}
                </Typography>

                <Box sx={{ flexGrow: 1 }} />

                <Box>

                    {
                        menu.map((item) => (

                            <Button
                                key={item.id}
                                color="inherit"
                                onClick={() => handleScroll(item.id)}
                            >
                                {item.label}
                            </Button>

                        ))
                    }

                </Box>

            </Toolbar>
        </AppBar>
    );
}

export default Navbar;