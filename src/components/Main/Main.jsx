import React from 'react';
import styles from './Main.module.scss'

const Main = () => {
    return (
        <div className='container'>
            <section className={styles.main}>
                <ul className={styles['cityes-list']}>
                    <li>МОСКВА</li>
                    <li>КАЗАНЬ</li>
                </ul>
                <h1 className={styles.title}>
                    Набор <span className={styles.best}>лучших</span> преподавателей в онлайн-школу
                </h1>
                <p className={styles.subtitle}>
                    У нас крутые ученики. И нам нужны такие же крутые преподаватели.
                    Собираем анкеты до конца сентября и будем выбирать.
                </p>
                <button className={styles.button} type='button'>ОТПРАВИТЬ СВОЮ АНКЕТУ</button>
            </section>
        </div>
    );
}

export default Main;
