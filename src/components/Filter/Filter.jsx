import css from './Filter.module.css';

import { useSelector, useDispatch } from 'react-redux';

import { setFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChangeInput = e => dispatch(setFilter(e.target.value));

  return (
    <label className={css.inputWrapper}>
      Find contacts by name
      <input
        onChange={handleChangeInput}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Contact will contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        value={filter}
        required
      />
    </label>
  );
};
