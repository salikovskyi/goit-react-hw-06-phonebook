import css from "./FilterList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { filterContact } from "../../redux/contacts/contactsAction";

// const Filter = ({ onChange, value }) => {
//   return (
//     <div className={css.section}>
//       <label>
//         <h2 className={css.title}>Find contact by name</h2>
//         <input
//           type="text"
//           name="name"
//           value={value}
//           onChange={onChange}
//           className={css.input}
//           placeholder="find name..."
//         />
//       </label>
//     </div>
//   );
// };

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.contacts.filter);

  const onChange = (e) => {
    dispatch(filterContact(e.target.value));
  };

  return (
    <label className={css.label}>
      Find contacts by name
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={onChange}
        name="filter"
      />
    </label>
  );
}
