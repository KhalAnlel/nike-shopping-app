import React, { useEffect, useState } from "react";
import { useContext } from "react";
import CartContext from "../cartContext";
import data from "../data/allProducts.json";
import PaidIcon from "@mui/icons-material/Paid";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { cartItems } = useContext(CartContext);
  const filteredData = cartItems.map((item) => {
    const product = data.find((product) => product.id === item.id);
    return {
      ...product,
      quantity: item.quantity,
      color: item.selectedColor,
      size: item.selectedSize,
      index: item.index,
    };
  });

  const [city, setCity] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const totalPrice = filteredData.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotalPrice(totalPrice);
  }, [filteredData]);

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <>
      {filteredData.length === 0 ? (
        <Box p={20}>
          <Typography
            textAlign="center"
            color="darkblue"
            fontSize={30}
            fontWeight={700}
          >
            Empty Cart
          </Typography>
          <Typography
            textAlign="center"
            sx={{
              "& a": {
                color: "darkgrey",
                transition: "color 0.3s ease",
                "&:hover": {
                  color: "#3b71ca",
                },
              },
            }}
          >
            <Link to={"/collection/all"}>Try to add something in cart</Link>
          </Typography>
        </Box>
      ) : (
        <Box display={"flex"}>
          <Box p={3} width="60%">
            {filteredData.map((item) => (
              <Box key={item.index} borderBottom={1}>
                <Typography mb={2} fontSize={20}>
                  {item.title}
                </Typography>
                <Box>
                  <img
                    src={item["images"][0].url}
                    width="200px"
                    height="200px"
                  />
                </Box>
                <Typography color={"#333"} fontWeight={700}>
                  Quantity: {item.quantity}
                </Typography>
                <Typography color={"#333"} fontWeight={700}>
                  Final Price: ${Math.ceil(item.price * item.quantity)}
                </Typography>
                <Typography color={"#333"} fontWeight={700}>
                  Color Selected: {item.color}
                </Typography>
                <Typography color={"#333"} fontWeight={700}>
                  Size Selected: {item.size}
                </Typography>
              </Box>
            ))}
          </Box>
          <Box width="40%">
            <Typography
              textAlign="center"
              mt={3}
              fontSize={20}
              fontWeight={700}
              color="#3b71ca"
            >
              Insert Your Information
            </Typography>
            <Box display="flex" flexDirection="column" p={3} gap={2}>
              <TextField
                id="standard-basic"
                label="Full Name:"
                variant="standard"
                sx={{ width: "70%" }}
                color="success"
                required
              />

              <TextField
                id="standard-basic"
                label="Phone No. 1:"
                variant="standard"
                sx={{ width: "70%" }}
                color="success"
                required
              />

              <TextField
                id="standard-basic"
                label="Phone No. 2 (optional):"
                variant="standard"
                sx={{ width: "70%" }}
                color="success"
              />

              <FormControl variant="standard">
                <InputLabel id="demo-simple-select-label">City:</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={city}
                  label="City:"
                  onChange={handleChange}
                  sx={{ width: "70%" }}
                  required
                >
                  <MenuItem value="Duhok">Duhok</MenuItem>
                  <MenuItem value="Erbil">Erbil</MenuItem>
                  <MenuItem value="Baghdad">Baghdad</MenuItem>
                </Select>
              </FormControl>

              <TextField
                id="standard-basic"
                label="Address:"
                variant="standard"
                sx={{ width: "70%" }}
                color="success"
                required
              />
              <Typography display="flex" alignContent="center">
                <PaidIcon sx={{ mr: "6px" }} />
                Total Price:{"  "}
                <span style={{ color: "red", marginLeft: "3px" }}>
                  ${Math.ceil(totalPrice)}
                </span>
              </Typography>
              <Typography display="flex" alignContent="center">
                <LocalShippingIcon sx={{ mr: "6px" }} />
                Shipping Fee:{" "}
                <span style={{ color: "red", marginLeft: "3px" }}>Free</span>
              </Typography>
              <Button variant="contained" sx={{ mt: "30px" }}>
                Submit and Buy
              </Button>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Checkout;
