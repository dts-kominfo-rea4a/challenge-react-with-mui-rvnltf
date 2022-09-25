// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card

import { Button, Card, CardContent, TextField } from "@mui/material";
import { useState } from "react";

const ContactForm = ({ fnAddContact }) => {
  // Form berisi name, phone, email, dan photo url
  // Buatlah state newContact berupa objek sesuai dengan data yang ada
  const [contact, setContact] = useState({});

  const onContactChangeHandler = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    fnAddContact(contact);
  };

  return (
    <>
      <Card sx={{ width: 450, textAlign: "left" }}>
        <CardContent sx={{ backgroundColor: "#F3F1EB" }}>
          <form onSubmit={onSubmitHandler}>
            <TextField
              name="name"
              label="Name"
              variant="filled"
              required
              fullWidth
              margin="dense"
              color="success"
              size="small"
              value={contact.name}
              onChange={onContactChangeHandler}
            />
            <TextField
              name="phone"
              label="Phone"
              variant="filled"
              required
              fullWidth
              margin="dense"
              color="success"
              size="small"
              value={contact.phone}
              onChange={onContactChangeHandler}
            />
            <TextField
              name="email"
              label="Email"
              variant="filled"
              required
              fullWidth
              margin="dense"
              color="success"
              size="small"
              value={contact.email}
              onChange={onContactChangeHandler}
            />
            <TextField
              name="photo"
              label="Photo URL"
              variant="filled"
              required
              fullWidth
              margin="dense"
              color="success"
              size="small"
              value={contact.photo}
              onChange={onContactChangeHandler}
            />
            <Button type="submit" variant="text" color="success">
              Add New
            </Button>
          </form>
        </CardContent>
      </Card>
    </>
  );
};

export default ContactForm;
