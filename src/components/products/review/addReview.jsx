import * as React from "react";
import {
  Typography,
  Stack,
  Rating,
  Box,
  TextField,
  Button,
  Dialog,
} from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import CancelIcon from "@mui/icons-material/Cancel";
import SendIcon from "@mui/icons-material/Send";

export default function AddReview() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(2);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Button
        variant="contained"
        onClick={handleClickOpen}
        sx={{
          backgroundColor: "black",
          marginTop: "20px",
          color: "white",
          fontSize: "small",
          fontWeight: "700",
          padding: "10px",
          borderRadius: "6px",
        }}
      >
        Write a Review
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth>
        <Stack gap={3} Direction="column" p={3}>
          <DialogTitle>Write a Review</DialogTitle>
          <Box>
            <Typography component="legend">Rate</Typography>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </Box>
          <Button variant="contained" component="label">
            Upload Images
            <input hidden accept="image/*" multiple type="file" />
          </Button>
          <TextField
            id="standard-multiline-flexible"
            label="Feedback"
            multiline
            maxRows={4}
            variant="standard"
            type="text"
          />
          <TextField
            id="standard-basic"
            label="Full Name"
            variant="standard"
            type="text"
          />
          <TextField
            id="standard-basic"
            label="Email"
            variant="standard"
            type="email"
          />
        </Stack>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          marginBottom={2}
        >
          <Button
            variant="outlined"
            startIcon={<CancelIcon />}
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            onClick={handleClose}
          >
            Send
          </Button>
        </Stack>
      </Dialog>
    </Box>
  );
}
