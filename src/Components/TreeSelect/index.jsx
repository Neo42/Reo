import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './index.css';

export default function TreeSelect({ values, placeholder }) {
  const node = useRef();
  const [inputValue, setInputValue] = useState('');
  const [open, setOpen] = useState(false);
  const displayedValues = values.filter((v) => v.toString()
    .toLowerCase().includes(inputValue.toLowerCase()));

  const handleClick = (e) => {
    if (node.current.contains(e.target)) {
      return;
    }
    setOpen(false);
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div
      ref={node}
      className="tree-select"
      style={{ height: `${40 * (1 + values.length)}px` }}
    >
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setOpen(true);
          setInputValue(e.target.value.toString());
        }}
        onFocus={() => setOpen(!open)}
        placeholder={placeholder}
      />
      <div className="options">
        {open && displayedValues.map((v) => (
          <div
            className="option"
            onClick={() => {
              setInputValue(v);
              setOpen(!open);
            }}
            onKeyDown={() => {}}
            role="option"
            aria-selected
            tabIndex={-1}
          >
            {v}
          </div>
        ))}
      </div>
    </div>
  );
}

TreeSelect.propTypes = {
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
};
