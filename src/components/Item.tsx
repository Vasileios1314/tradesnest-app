import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Modal,
  Typography,
} from "@mui/material";
import React from "react";
import { ItemsType } from "../types/Items.types";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface Props {
  item: ItemsType;
  index: number;
  handleDelete: (id: number) => void;
}

const Item: React.FC<Props> = ({ item, index, handleDelete }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div key={index}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={item.hdurl}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.title}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button onClick={handleOpen}>Details</Button>
          <Button onClick={() => handleDelete(index)}>Delete</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {item.copyright}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {item.explanation}
              </Typography>
              <Typography id="modal-modal-date" sx={{ mt: 2 }}>
                {item.date}
              </Typography>
            </Box>
          </Modal>
        </CardActions>
      </Card>
    </div>
  );
};
export default Item;
