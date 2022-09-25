import "./App.css";

// Uncomment untuk memuat daftar kontak
import contactsJSON from "./data/contacts.json";
import Headers from "./components/Header";
import ListItem from "./components/ListItem";
import ContactForm from "./components/ContactForm";
import { Grid } from "@mui/material";
import { useState } from "react";
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm
  const [contacts, setContacts] = useState(contactsJSON);

  const addContact = (newContact) => {
    const objContact = {
      name: newContact.name,
      phone: newContact.phone,
      email: newContact.email,
      photo: newContact.photo,
    };

    setContacts([...contacts, objContact]);
  };

  console.log(contacts[0]);
  return (
    <div className="App">
      <Headers />
      <Grid
        container
        sx={{ flex: 1, justifyContent: "space-between", marginTop: 8 }}
      >
        <Grid xs={5} item sx={{ margin: "auto", marginTop: 0 }}>
          <ContactForm fnAddContact={addContact} />
        </Grid>
        <Grid xs={5} item sx={{ margin: "auto" }}>
          <ListItem data={contacts} />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
