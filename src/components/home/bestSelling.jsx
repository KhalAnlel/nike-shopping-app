import React, { useState } from "react";
import { Link } from "react-router-dom";
import LaunchIcon from "@mui/icons-material/Launch";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, Chip } from "@mui/material";
import Pagination from "@mui/material/Pagination";

const cards = [
  {
    id: 1,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0610/0883/8824/products/S220a966ba02147a9863decfd1154b2e0b_940x.jpg?v=1679323776",
    title: "Hodie",
    description:
      "Best Spy X Family Anya And Bond Forger Sleeping Cute Anime Hoodie High Quality",
    price: "42$",
  },
  {
    id: 2,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0610/0883/8824/products/S62a7d4cf16ef4f7cbec26b43adbe564dj_940x.jpg?v=1679412470",
    title: "T-shirt",
    description:
      "Anime 3D Nagi BLUE LOCK T-Shirt Tops Hot Sale Summer T-Shirt Casual Boy Clothes",
    price: "29.9$",
  },
  {
    id: 3,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0610/0883/8824/products/Sc1fbab9ad7414c83885ab03e20770676X_785x.jpg?v=1679666513",
    title: "Cosplay",
    description:
      "Best Black Clover Fuegoreon Vermilion Cosplay Costume Outfit Uniform Anime Black Clover",
    price: "169.9$",
  },
  {
    id: 4,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0610/0883/8824/products/Sba8dbfddb0904a3ba2a321bfc64f8dc0p_785x.jpg?v=1679729222",
    title: "Figure",
    description:
      "Naruto Figure Shippuden GK Uzumaki Naruto Action Toy Figures Model Interchangeable Head Figma Decoration Collecting Toys",
    price: "100.9$",
  },
  {
    id: 5,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0610/0883/8824/products/S56572fa8fc214bc3a6fae0df3c0b6d08A_785x.jpg?v=1653141538",
    title: "Figure",
    description:
      "Bandai Anime Figure One Piece Sun God Nika Gear 5 Monkey D Luffy PVC Action Figurine Statue 28cm",
    price: "168.9$",
  },
  {
    id: 6,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0610/0883/8824/products/S1f1ea67334724a06b115e258e2f77267k_940x.jpg?v=1679753384",
    title: "Figure",
    description:
      "One Piece Luffy Gear 5 Sun God Nika Anime Figure High Quality",
    price: "91.8$",
  },
  {
    id: 7,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0610/0883/8824/products/S6fee0e1b26a049ee8a41dbd9f081e295P_785x.jpg?v=1679666791",
    title: "Cosplay",
    description:
      "Kawaii Hunter X Hunter Biscuit Krueger Cosplay Costume Halloween Costume",
    price: "169.9$",
  },
  {
    id: 8,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0610/0883/8824/products/HTB1As.UhS8YBeNkSnb4q6yevFXaF.jpg?v=1678456228",
    title: "Cosplay",
    description:
      "Best GINTAMA Cosplay Anime Kamui Halloween Woman Man Cosplay Costume",
    price: "155.0$",
  },
  {
    id: 9,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0610/0883/8824/products/S28e941817c7e4141b49742178356f260e.jpg?v=1679754232",
    title: "Figure",
    description:
      "Dragon Ball Vegeta Figure Super Saiyan Anime Figure High Quality",
    price: "152.9$",
  },
  {
    id: 10,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0610/0883/8824/products/H9220fdff073a41e0b6c1341a73320d93J.jpg?v=1655649021",
    title: "Stickers",
    description:
      "100Pcs Attack On Titan Graffiti Stickers Anime Accessories For Laptop Skateboard",
    price: "20$",
  },
  {
    id: 11,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0610/0883/8824/products/S6c6e6a130c67481e876977ad8c5a0c824.jpg?v=1679841297",
    title: "Key Tag",
    description:
      "Japanese Anime Key Tag Jujutsu Kaisen Keyring Anime Accessories High Quality",
    price: "10$",
  },
  {
    id: 12,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0610/0883/8824/products/product-image-1679791430_640x.jpg?v=1646316482",
    title: "Hodie",
    description: "Anime Attack On Titan Men Hoodies Sweatshirts Double Colors",
    price: "28.9 $",
  },
];

export const BestSelling = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardPerPage = 4;

  const indexOfLastCard = currentPage * cardPerPage;
  const indexOfFirstCard = indexOfLastCard - cardPerPage;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

  return (
    <>
      <Box marginTop={15}>
        <Typography textAlign="center" variant="h4" fontWeight={700}>
          Best Selling This Month
        </Typography>
        <Box display="flex" justifyContent="center" alignItems="center">
          <LaunchIcon fontSize="small" sx={{ marginTop: "3px" }} />
          <Link to="collection/best selling">View All</Link>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        gap="30px"
        flexWrap="wrap"
        sx={{ marginTop: "20px", p: "10px" }}
      >
        {currentCards.map((card) => (
          <CardActionArea key={card.id} sx={{ width: "250px" }}>
            <Card sx={{ maxWidth: 250, margin: "auto", boxShadow: 0 }}>
              <Typography
                position="absolute"
                top={10}
                right={10}
                bgcolor="#C8C4C8"
                p={1}
                borderRadius={1}
                fontSize={12}
              >
                New
              </Typography>
              <CardMedia
                component="img"
                alt="latest arrival item"
                height="200"
                image={card.imageUrl}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {card.title}
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  className="description"
                >
                  {card.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "space-around" }}>
                <Chip label={card.price} />
                <Button
                  variant="contained"
                  size="small"
                  href={`/products/${card.title}`}
                >
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </CardActionArea>
        ))}
      </Box>
      <Box display="flex" m={2}>
        <Pagination
          sx={{ margin: "auto" }}
          hidePrevButton
          hideNextButton
          count={3}
          onChange={(event) => setCurrentPage(event.target.textContent)}
          color="primary"
        />
      </Box>
    </>
  );
};
