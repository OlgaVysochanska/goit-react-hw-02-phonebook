import PropTypes from 'prop-types';
import { ContactListItem } from './ContactListItem/ContactListItem';

export const ContactList = ({contacts}) => {
    return (
        <ul>
          {contacts.map(({ id, name, number }) => {
              return (
                <ContactListItem key={id} name={name} number={number} />
              );
            })}
        </ul>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf( PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
    }).isRequired).isRequired
}