import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { FavoriteBorder } from "@mui/icons-material";
import { styled, alpha } from "@mui/material/styles";
import WishList from "../collection/wishList";
import Cart from "../collection/cart";
import WishlistContext from "../../wishlistContext";
import CartContext from "../../cartContext";
import { useContext } from "react";
import { Stack } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  width: "auto",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function TopNavbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openLiked = Boolean(anchorEl);
  const handleOpenLiked = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseLiked = () => {
    setAnchorEl(null);
  };

  const [anchorE2, setAnchorE2] = React.useState(null);
  const openCart = Boolean(anchorE2);
  const handleOpenCart = (event) => {
    setAnchorE2(event.currentTarget);
  };
  const handleCloseCart = () => {
    setAnchorE2(null);
  };

  const { countLiked } = useContext(WishlistContext);
  const { countCart } = useContext(CartContext);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#333" }}>
        <Toolbar>
          <Link to="/" className="logo">
            <Typography variant="a" noWrap component="div">
              Anime Shop
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Stack flexDirection="row">
            <IconButton
              size="large"
              aria-label="show cart"
              color="inherit"
              onClick={handleOpenCart}
            >
              <Badge badgeContent={countCart} color="error">
                <AddShoppingCartIcon />
              </Badge>
            </IconButton>
            <Box>
              <Menu
                id="basic-menu"
                anchorEl={anchorE2}
                open={openCart}
                onClose={handleCloseCart}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <Cart />
              </Menu>
            </Box>
            <IconButton
              size="large"
              aria-label="show cart"
              color="inherit"
              onClick={handleOpenLiked}
            >
              <Badge badgeContent={countLiked} color="error">
                <FavoriteBorder />
              </Badge>
            </IconButton>
            <Box>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={openLiked}
                onClose={handleCloseLiked}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <WishList />
              </Menu>
            </Box>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
