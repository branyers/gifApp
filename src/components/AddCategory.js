import React, { useState } from 'react'
import PropTypes from 'prop-types';
export const AddCategory = ({ setCategory }) => {
    const [inputValue, setInputValue] = useState("")

    const HandleOnChanges = (e) => {
        setInputValue(e.target.value)

    }

    const Handlesubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length > 2){
            setCategory(cats => [inputValue,...cats])
            setInputValue('')
        }
    }

    return (
        <form onSubmit={Handlesubmit}>
            <input
                className="input"
                type="text"
                value={inputValue}
                onChange={HandleOnChanges}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategory:PropTypes.func.isRequired
}