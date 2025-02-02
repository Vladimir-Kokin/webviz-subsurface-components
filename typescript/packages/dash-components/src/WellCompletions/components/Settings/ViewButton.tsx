import { Button, Icon, Tooltip } from "@equinor/eds-core-react";
import { styled } from "@mui/material/styles";
import { view_column } from "@equinor/eds-icons";
import { Box, Menu } from "@mui/material";
import React from "react";
import SortButton from "./SortButton";
import TimeAggregationSelector from "./TimeAggregationSelector";
import WellsPerPageSelector from "./WellsPerPageSelector";

const PREFIX = "ViewButton";

const classes = {
    paper: `${PREFIX}-paper`,
};

const Root = styled("div")(({ theme }) => ({
    [`& .${classes.paper}`]: {
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
        alignSelf: "center",
        width: "200px",
    },
}));

Icon.add({ view_column }); // (this needs only be done once)
/**
 * A menu button that shows a list of viewing options
 */
const ViewButton: React.FC = React.memo(() => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    // Handlers
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    // Render
    return (
        <Root>
            <Tooltip title="View">
                <Button variant="ghost_icon" onClick={handleClick}>
                    <Icon color="currentColor" name="view_column" />
                </Button>
            </Tooltip>
            <Menu
                id="view-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                classes={{ paper: classes.paper }}
            >
                <Box marginY={1}>
                    <SortButton />
                    <TimeAggregationSelector />
                    <WellsPerPageSelector />
                </Box>
            </Menu>
        </Root>
    );
});

ViewButton.displayName = "ViewMenu";
export default ViewButton;
