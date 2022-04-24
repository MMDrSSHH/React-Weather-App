import React, { useState } from 'react';
import MsgBox from './MsgBox';
import styles from './SearchInput.module.css';

const SearchInput = ({ addData, hasError }) => {
    const [input, setinput] = useState("");
    const inputHandler = (e) => {
        setinput(e.target.value);
    }
    return (
        <form className={styles.form}>
            <input className={styles.inputBox} type="text" placeholder="Search for cities or countries" onChange={inputHandler} value={input} />
            {hasError && <MsgBox />}
            <button
                type="submit"
                onClick={(e) => {
                    e.preventDefault();
                    if (input) {
                        addData(input);
                        setinput("");
                    }
                }}
                className={`${styles.submitBtn} ${!input ? styles.buttonOff : ""}`}
            >FIND</button>
        </form>
    )
}

export default SearchInput;