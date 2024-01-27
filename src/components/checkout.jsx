import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import emailjs from "@emailjs/browser";
import CartContext from "../cartContext";
import data from "../data/allProducts.json";
import PaidIcon from "@mui/icons-material/Paid";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import DeleteIcon from "@mui/icons-material/Delete";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

const Checkout = () => {
  const { cartItems, handleRemoveItem } = useContext(CartContext);
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

  const handleDelete = (itemId) => {
    handleRemoveItem(itemId);
  };

  const form = useRef();

  // Create a new array containing only the desired properties
  const selectedData = filteredData.map((item) => ({
    title: item.title,
    color: item.color,
    size: item.size,
    quantity: item.quantity,
  }));

  const notify = () =>
    toast.success("Your purchase was successful!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9ilfzy2",
        "template_me2rbgl",
        form.current,
        "sszBIyYRSm_3x7Srf"
      )
      .then(
        (result) => {
          notify();
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <Box>
        <Box>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </Box>

        {filteredData.length === 0 ? (
          <Box p={5} height={"70vh"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
            <Box>

            <Typography
              textAlign="center"
              color="primary"
              fontSize={30}
              fontWeight={700}
              >
              Empty Cart
            </Typography>
            <Typography
              textAlign="center"
              width={"100%"}
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
          </Box>
        ) : (
          <Box
            display={"flex"}
            sx={{ flexDirection: { xs: "column", md: "row" } }}
          >
            <Box p={3} sx={{ width: { xs: "90%", md: "60%" } }}>
              {filteredData.map((item) => (
                <Box
                  key={item.index}
                  borderBottom={1}
                  display={"flex"}
                  flexDirection={"column"}
                >
                  <Typography mb={2} fontSize={18}>
                    {item.title}
                  </Typography>
                  <Box>
                    <img
                      src={item["images"][0].url}
                      width="200px"
                      height="200px"
                      alt={item["images"][0].url}
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
                  <Button
                    variant="outlined"
                    sx={{ mb: "10px", marginLeft: "auto" }}
                    startIcon={<DeleteIcon />}
                    color="error"
                    onClick={() => handleDelete(item.index)}
                  >
                    Delete
                  </Button>
                </Box>
              ))}
            </Box>
            <Box sx={{ width: { xs: "90%", md: "60%" }, p: 3 }}>
              <Typography
                sx={{
                  textAlign: { xs: "left", md: "center" },
                  margin: "auto",
                }}
                mt={3}
                fontSize={20}
                fontWeight={700}
                color="#3b71ca"
              >
                Insert Your Information
              </Typography>
              <form ref={form} onSubmit={sendEmail}>
                <Box
                  display="flex"
                  flexDirection="column"
                  sx={{ p: { xs: 0, md: 3 } }}
                  gap={2}
                >
                  <TextField
                    id="standard-basic"
                    label="Full Name:"
                    variant="standard"
                    sx={{ width: "70%" }}
                    color="success"
                    required
                    name="user_name"
                  />
                  <TextField
                    id="standard-basic"
                    label="Email:"
                    variant="standard"
                    sx={{ width: "70%" }}
                    color="success"
                    required
                    name="user_email"
                  />

                  <TextField
                    id="standard-basic"
                    label="Phone No. 1:"
                    variant="standard"
                    sx={{ width: "70%" }}
                    color="success"
                    required
                    name="user_phone_no1"
                  />

                  <TextField
                    id="standard-basic"
                    label="Phone No. 2 (optional):"
                    variant="standard"
                    sx={{ width: "70%" }}
                    color="success"
                    name="user_phone_no2"
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
                      name="user_city"
                    >
                      <MenuItem value="Al-Anbar">Al-Anbar</MenuItem>
                      <MenuItem value="Babil">Babil</MenuItem>
                      <MenuItem value="Baghdad">Baghdad</MenuItem>
                      <MenuItem value="Basra">Basra</MenuItem>
                      <MenuItem value="Dhi Qar">Dhi Qar</MenuItem>
                      <MenuItem value="Al-Qādisiyyah">Al-Qādisiyyah</MenuItem>
                      <MenuItem value="Diyala">Diyala</MenuItem>
                      <MenuItem value="Duhok">Duhok</MenuItem>
                      <MenuItem value="Erbil">Erbil</MenuItem>
                      <MenuItem value="Halabja">Halabja</MenuItem>
                      <MenuItem value="Karbala">Karbala</MenuItem>
                      <MenuItem value="Kirkuk">Kirkuk</MenuItem>
                      <MenuItem value="Maysan">Maysan</MenuItem>
                      <MenuItem value="Muthanna">Muthanna</MenuItem>
                      <MenuItem value="Najaf">Najaf</MenuItem>
                      <MenuItem value="Ninawa">Ninawa</MenuItem>
                      <MenuItem value="Salah Al-Din">Salah Al-Din</MenuItem>
                      <MenuItem value="Sulaymaniyah">Sulaymaniyah</MenuItem>
                      <MenuItem value="Wasit">Wasit</MenuItem>
                    </Select>
                  </FormControl>

                  <TextField
                    id="standard-basic"
                    label="Address:"
                    variant="standard"
                    sx={{ width: "70%" }}
                    color="success"
                    required
                    name="user_address"
                  />
                  <Typography display="flex" alignContent="center">
                    <PaidIcon sx={{ mr: "6px" }} />
                    Total Price:{"  "}
                    <span style={{ color: "red", marginLeft: "3px" }}>
                      ${Math.ceil(totalPrice)}
                    </span>
                    <input
                      type="hidden"
                      value={`$${Math.ceil(totalPrice)}`}
                      name="total_price"
                    />
                    <input
                      type="hidden"
                      value={JSON.stringify(selectedData)}
                      name="items"
                    />
                  </Typography>
                  <Typography display="flex" alignContent="center">
                    <LocalShippingIcon sx={{ mr: "6px" }} />
                    Shipping Fee:{" "}
                    <span style={{ color: "red", marginLeft: "3px" }}>
                      Free
                    </span>
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{ mt: "30px" }}
                    type="submit"
                    value="Send"
                  >
                    Submit and Buy
                  </Button>
                </Box>
              </form>
            </Box>
          </Box>
        )}
      </Box>
    </>
  );
};

export default Checkout;
