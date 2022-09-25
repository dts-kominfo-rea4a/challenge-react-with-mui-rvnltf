// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
  // Contact berisi foto, nama, telepon, dan email

  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar
          alt={data.name}
          src={data.photo}
          sx={{ width: 60, height: 60, marginRight: 5 }}
        />
      </ListItemAvatar>
      <ListItemText
        primary={data.name}
        secondary={
          <>
            <Typography
              sx={{ display: "block", margin: 0, padding: 0 }}
              component="span"
              variant="caption"
              color="text.secondary"
            >
              {data.phone}
            </Typography>
            <Typography
              sx={{ display: "block" }}
              component="span"
              variant="caption"
              color="text.secondary"
            >
              {data.email}
            </Typography>
          </>
        }
      />
    </ListItem>
  );
};

export default Contact;
