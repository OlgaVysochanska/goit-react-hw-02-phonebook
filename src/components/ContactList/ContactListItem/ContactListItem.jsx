import PropTypes from 'prop-types';

export const ContactListItem = ( { name, number } ) => {
  return (
    <li>
      <span>{name}:</span>
      <span>{number}</span>
    </li>
  );
};

ContactListItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired
}