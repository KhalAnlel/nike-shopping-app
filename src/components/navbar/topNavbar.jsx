import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { FavoriteBorder } from "@mui/icons-material";
import WishList from "../collection/wishList";
import Cart from "../collection/cart";
import WishlistContext from "../../wishlistContext";
import CartContext from "../../cartContext";
import { useContext } from "react";
import { Stack } from "@mui/material";
import logo from "../../logo.png";

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
      <AppBar
        position="static"
        sx={{ height: "60px", bgcolor: "rgb(59, 113, 202)" }}
      >
        <Toolbar>
          <Box
            width={"80px"}
            sx={{
              ":hover": {
                transform: "scale(1.1)",
                transition: "0.3s linear",
              },
            }}
          >
            <Link to="/" className="logo">
              <img src={logo} width="100%" alt={logo}/>
            </Link>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
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
