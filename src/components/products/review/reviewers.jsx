import React from "react";
import { Box, Rating, Stack, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const Reviewers = () => {
  const labels = {
    1: "Useless",
    2: "Poor",
    3: "Okay",
    4: "Good",
    5: "Excellent",
  };
  const value = 2;
  return (
    <Stack gap={3}>
      <Box bgcolor="#fafafa" p={2} width="100%" borderRadius={5} boxShadow={2}>
        <Stack direction="row" marginBottom={3}>
          <Rating
            sx={{ color: "#333" }}
            name="text-feedback"
            value={value}
            readOnly
            precision={1}
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
          />
          <Box sx={{ ml: 2 }}>{labels[value]}</Box>
        </Stack>
        <Stack direction="row" alignItems="center" gap={2}>
          <img
            src="https://cdn.alireviews.io/images/avatar/abstract/avatar175.jpg"
            width="50px"
            style={{ borderRadius: "50%" }}
          />
          <Box>
            <Typography fontWeight={600}>Luis Vito</Typography>
            <Typography fontWeight={500} color="#333" fontSize={12}>
              Mar 03, 2022
            </Typography>
          </Box>
        </Stack>
        <Typography marginTop={2}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          quas quo tempora, qui nisi praesentium? Pariatur dicta dolore harum
          dolores?
        </Typography>
        <Stack direction="row" width="100%" gap={2} marginTop={2}>
          <img
            src="https://ae01.alicdn.com/kf/U0386a69b999f4afcac55a169da2087f5B.jpg"
            width="60px"
            height="80px"
            style={{ borderRadius: "10px" }}
          />
          <img
            src="https://ae01.alicdn.com/kf/Ue1373ea6f2584552b434866846e66d5bo.jpg"
            width="60px"
            height="80px"
            style={{ borderRadius: "10px" }}
          />
          <img
            src="https://ae01.alicdn.com/kf/U3e8b21145bba4ec89e63a9a749df88c9x.jpg"
            width="60px"
            height="80px"
            style={{ borderRadius: "10px" }}
          />
        </Stack>
      </Box>
      <Box bgcolor="#fafafa" p={2} width="100%" borderRadius={5} boxShadow={2}>
        <Stack direction="row" marginBottom={3}>
          <Rating
            sx={{ color: "#333" }}
            name="text-feedback"
            value={value}
            readOnly
            precision={1}
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
          />
          <Box sx={{ ml: 2 }}>{labels[value]}</Box>
        </Stack>
        <Stack direction="row" alignItems="center" gap={2}>
          <img
            src="https://cdn.alireviews.io/images/avatar/abstract/avatar175.jpg"
            width="50px"
            style={{ borderRadius: "50%" }}
          />
          <Box>
            <Typography fontWeight={600}>Luis Vito</Typography>
            <Typography fontWeight={500} color="#333" fontSize={12}>
              Mar 03, 2022
            </Typography>
          </Box>
        </Stack>
        <Typography marginTop={2}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          quas quo tempora, qui nisi praesentium? Pariatur dicta dolore harum
          dolores?
        </Typography>
        <Stack direction="row" width="100%" gap={2} marginTop={2}>
          <img
            src="https://ae01.alicdn.com/kf/U0386a69b999f4afcac55a169da2087f5B.jpg"
            width="60px"
            height="80px"
            style={{ borderRadius: "10px" }}
          />
          <img
            src="https://ae01.alicdn.com/kf/Ue1373ea6f2584552b434866846e66d5bo.jpg"
            width="60px"
            height="80px"
            style={{ borderRadius: "10px" }}
          />
          <img
            src="https://ae01.alicdn.com/kf/U3e8b21145bba4ec89e63a9a749df88c9x.jpg"
            width="60px"
            height="80px"
            style={{ borderRadius: "10px" }}
          />
        </Stack>
      </Box>
      <Box bgcolor="#fafafa" p={2} width="100%" borderRadius={5} boxShadow={2}>
        <Stack direction="row" marginBottom={3}>
          <Rating
            sx={{ color: "#333" }}
            name="text-feedback"
            value={value}
            readOnly
            precision={1}
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
          />
          <Box sx={{ ml: 2 }}>{labels[value]}</Box>
        </Stack>
        <Stack direction="row" alignItems="center" gap={2}>
          <img
            src="https://cdn.alireviews.io/images/avatar/abstract/avatar175.jpg"
            width="50px"
            style={{ borderRadius: "50%" }}
          />
          <Box>
            <Typography fontWeight={600}>Luis Vito</Typography>
            <Typography fontWeight={500} color="#333" fontSize={12}>
              Mar 03, 2022
            </Typography>
          </Box>
        </Stack>
        <Typography marginTop={2}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          quas quo tempora, qui nisi praesentium? Pariatur dicta dolore harum
          dolores?
        </Typography>
        <Stack direction="row" width="100%" gap={2} marginTop={2}>
          <img
            src="https://ae01.alicdn.com/kf/U0386a69b999f4afcac55a169da2087f5B.jpg"
            width="60px"
            height="80px"
            style={{ borderRadius: "10px" }}
          />
          <img
            src="https://ae01.alicdn.com/kf/Ue1373ea6f2584552b434866846e66d5bo.jpg"
            width="60px"
            height="80px"
            style={{ borderRadius: "10px" }}
          />
          <img
            src="https://ae01.alicdn.com/kf/U3e8b21145bba4ec89e63a9a749df88c9x.jpg"
            width="60px"
            height="80px"
            style={{ borderRadius: "10px" }}
          />
        </Stack>
      </Box>
    </Stack>
  );
};

export default Reviewers;
