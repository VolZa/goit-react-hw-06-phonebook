// import { Component } from 'react';
// import PropTypes from 'prop-types'
import { Input } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter, setValue } from 'redux/filterSlice';

export const Filter = () => {
   const dispatch = useDispatch();
   const filter = useSelector(getFilter);
   return (
      <>
         <label>Find contacts by name<br/>
            <Input 
               type="text" 
               name='filter' 
               value={filter}           
               onChange={(e) => {dispatch(setValue (e.currentTarget.value.toLowerCase()))}}
            />
         </label>         
      </>
   ); 
} 

// Filter.propTypes = {
//    filter: PropTypes.string.isRequired,
//    onChangeInput: PropTypes.func.isRequired //f дані з інпут в State
// };

// const onChangeInputD = value => {
//    //  setFilter(value)
//    console.log(value)
//  }
//  const [filter, setFilter] = useState('');
// onChangeInput={onChangeInputD}