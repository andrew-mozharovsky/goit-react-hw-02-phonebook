import React from "react";
import { v4 as uuidv4 } from "uuid";

import Form from "./components/Form";
import ContactsList from "./components/ContactsList";

class App extends React.Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  addContact = ({ name, number }) => {
    let ch = false;
    this.state.contacts.map((con) => {
      if (con.name === name) {
        return (ch = true);
      }
    });
    console.log(ch);
    if (ch) {
      alert("Noooooo");
      return;
    }
    this.setState(({ contacts }) => {
      return {
        contacts: [
          {
            name,
            number,
            id: uuidv4(),
          },
          ...contacts,
        ],
      };
    });
  };

  render() {
    const { contacts } = this.state;
    return (
      <div>
        <Form addContact={this.addContact} />
        <ContactsList contacts={contacts} />
      </div>
    );
  }
}

export default App;
