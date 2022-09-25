// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import { Divider, List } from "@mui/material";
import React from "react";
import Contact from "./Contact";

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const ListItem = ({ data }) => {
  // Contact berisi foto, nama, telepon, dan email

  return (
    <List sx={{ width: "100%", bgcolor: "#DBF6F0" }}>
      {data.map((v, i) => (
        <>
          <Contact data={v} />
          {i + 1 < data.length && <Divider variant="middle" component="li" />}
        </>
      ))}
    </List>
  );
};

export default ListItem;
