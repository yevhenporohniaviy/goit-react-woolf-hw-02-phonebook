import ContactListItem from "./ContactListItem";

const ContactList = ({ contacts, onRemoveContact }) => {
  return (
    <ul>
      {contacts.map(c => (
        <ContactListItem key={c.id} {...c} onRemoveContact={onRemoveContact} />
      ))}
    </ul>
  );
};
 
export default ContactList;