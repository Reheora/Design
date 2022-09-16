import React from 'react';
import styles from './Description.module.scss'

const Description = () => {
    return (
        <div className='container'>
            <section className={styles.description}>
                <ul className={styles['description-list']}>
                    <li>
                        <ul>
                            <li>26 327</li>
                            <li>Количество<br />ученкиов</li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li>379</li>
                            <li>Количество<br />преподавателей</li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li>ОТ 98</li>
                            <li>тыс. ₽<br />зарплата</li>
                        </ul>
                    </li>
                </ul>
            </section>
        </div>
    );
}

export default Description;
