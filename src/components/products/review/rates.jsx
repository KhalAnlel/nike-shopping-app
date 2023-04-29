import React from "react";
import { Box } from "@mui/material";
import { Stack } from "@mui/material";
import { Typography } from "@mui/material";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import Slider from "@mui/material/Slider";

const Rates = () => {
  return (
    <Box marginTop={3}>
      <Stack direction="row" alignItems="center" gap={1}>
        <span>5</span>
        <StarRoundedIcon fontSize="small" sx={{ marginRight: "5px" }} />
        <Slider
          disabled
          defaultValue={100}
          aria-label="Disabled slider"
          sx={{ width: "150px", color: "black" }}
        />
        <Typography fontSize="small" color="grey">
          1
        </Typography>
      </Stack>
      <Stack direction="row" alignItems="center" gap={1}>
        <span>4</span>
        <StarRoundedIcon fontSize="small" sx={{ marginRight: "5px" }} />
        <Slider
          disabled
          defaultValue={40}
          aria-label="Disabled slider"
          sx={{ width: "150px", color: "black" }}
        />
        <Typography fontSize="small" color="grey">
          2
        </Typography>
      </Stack>
      <Stack direction="row" alignItems="center" gap={1}>
        <span>3</span>
        <StarRoundedIcon fontSize="small" sx={{ marginRight: "5px" }} />
        <Slider
          disabled
          defaultValue={80}
          aria-label="Disabled slider"
          sx={{ width: "150px", color: "black" }}
        />
        <Typography fontSize="small" color="grey">
          13
        </Typography>
      </Stack>
      <Stack direction="row" alignItems="center" gap={1}>
        <span>2</span>
        <StarRoundedIcon fontSize="small" sx={{ marginRight: "5px" }} />
        <Slider
          disabled
          defaultValue={60}
          aria-label="Disabled slider"
          sx={{ width: "150px", color: "black" }}
        />
        <Typography fontSize="small" color="grey">
          2
        </Typography>
      </Stack>
      <Stack direction="row" alignItems="center" gap={1}>
        <span>1</span>
        <StarRoundedIcon fontSize="small" sx={{ marginRight: "5px" }} />
        <Slider
          disabled
          defaultValue={0}
          aria-label="Disabled slider"
          sx={{ width: "150px" }}
        />
        <Typography fontSize="small" color="grey">
          0
        </Typography>
      </Stack>
    </Box>
  );
};

export default Rates;
