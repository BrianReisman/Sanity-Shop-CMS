import React from 'react';
import PatchEvent, { set, unset } from 'part:@sanity/form-builder/patch-event';

const createPatchFrom = (value) => {
  console.log('hiii')
  // Even in the input field has a type of number, it still comes in as a string, so here we coerce it into the number datatype!
  return PatchEvent.from(value === '' ? unset(): set(Number(value)))
}

// when sanity renders this out it passes props. They're giving you everything from the price schema
const PriceInput = ({ type, value, onChange, inputComponent }) => {
  return (
    <div>
      <h2>{type.title} - {value}</h2>
      <p>{type.description}</p>
      <input
        type={type.name}
        value={value}
        onChange={e => onChange(createPatchFrom(e.target.value))}
        ref={inputComponent}/>
    </div>
  )
};

// PriceInput.focus = function(){
//   this._inputElement.focus()
// }

export default PriceInput