// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import {
  Avatar,
  Divider,
  List,
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
    <>
      <List sx={{ width: "100%", bgcolor: "#DBF6F0" }}>
        {data.map((v, i) => {
          return (
            <>
              <ListItem alignItems="flex-start" key={i}>
                <ListItemAvatar>
                  <Avatar
                    alt={v.name}
                    src={v.photo}
                    sx={{ width: 60, height: 60, marginRight: 5 }}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={v.name}
                  secondary={
                    <>
                      <Typography
                        sx={{ display: "block", margin: 0, padding: 0 }}
                        component="span"
                        variant="caption"
                        color="text.secondary"
                      >
                        {v.phone}
                      </Typography>
                      <Typography
                        sx={{ display: "block" }}
                        component="span"
                        variant="caption"
                        color="text.secondary"
                      >
                        {v.email}
                      </Typography>
                    </>
                  }
                />
              </ListItem>
              {i + 1 < data.length && (
                <Divider variant="middle" component="li" />
              )}
            </>
          );
        })}
      </List>
    </>
  );
};

export default Contact;
