import React from 'react';
import styles from './Card.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

// const months = [
//     "Jan",
//     "Feb",
//     "Mar",
//     "Apr",
//     "May",
//     "Jun",
//     "Jul",
//     "Aug",
//     "Sep",
//     "Oct",
//     "Nov",
//     "Dec"
// ]

// const days = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday"
// ]

const Card = ({ data, removeHandler }) => {
    const { description, icon } = data.weather[0];
    const { name, main } = data;
    const { country } = data.sys;
    const temp = Math.floor(main.temp);
    return (
        <div className={styles.card}>
            <FontAwesomeIcon
                icon={faXmark}
                className={styles.xMark}
                onClick={() => removeHandler(data.id)}
            />
            <h3 className={styles.city}>
                {name}
                <span className={styles.countryBadge}>{country}</span>
            </h3>
            <span className={styles.temp}>
                {temp}
                <sup>
                    C
                    <sup>.</sup>
                </sup>
            </span>
            <img src={`https://openweathermap.org/img/w/${icon}.png`} alt={description} className={styles.image} />
            <p className={styles.des}>{description}</p>
        </div>
    )
}

export default Card