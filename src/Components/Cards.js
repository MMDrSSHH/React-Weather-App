import React from 'react';
import Card from './Card';
import styles from './Cards.module.css';

const Cards = ({ weatherData, removeHandler }) => {
    return (
        <div className={styles.cards}>
            {weatherData.map(data => {
                return (
                    <Card key={data.id} data={data} removeHandler={removeHandler} />
                )
            })}
        </div>
    )
}

export default Cards