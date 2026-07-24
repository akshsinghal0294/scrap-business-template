import { Typography } from "@mui/material";

function SectionTitle({ title, subtitle }) {
    return (
        <>
            <Typography
                variant="h4"
                textAlign="center"
                fontWeight="bold"
                gutterBottom
            >
                {title}
            </Typography>

            {subtitle && (
                <Typography
                    variant="body1"
                    textAlign="center"
                    color="text.secondary"
                    mb={5}
                >
                    {subtitle}
                </Typography>
            )}
        </>
    );
}

export default SectionTitle;