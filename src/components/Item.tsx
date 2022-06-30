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
import { Container } from "@mui/system";
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
  borderRadius: 3,
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
    <Card sx={{ maxWidth: 345, height: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={item.hdurl}
          alt="Nasa pic"
        />
        <CardContent sx={{ height: 15 }}>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ paddingTop: 20 }}>
        <Container>
          <Button onClick={handleOpen}>Details</Button>
        </Container>
        <Container>
          <Button onClick={() => handleDelete(index)}>Delete</Button>
        </Container>
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
  );
};
export default Item;
