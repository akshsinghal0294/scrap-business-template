import { createTheme } from "@mui/material/styles";
import branding from "../config/branding";

const theme = createTheme({
    palette: {
        primary: {
            main: branding.primaryColor,
        },

        secondary: {
            main: branding.secondaryColor,
        },

        success: {
            main: branding.accentColor,
        },

        background: {
            default: "#F8F9FA",
        },
    },

    typography: {
        fontFamily: "'Poppins','Roboto',sans-serif",

        h2: {
            fontWeight: 700,
        },

        h4: {
            fontWeight: 600,
        },

        h5: {
            fontWeight: 600,
        },

        h6: {
            fontWeight: 600,
        },
    },

    shape: {
        borderRadius: 12,
    },
});

export default theme;