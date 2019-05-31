import React from 'react';
import styles from './Banner.scss';
import classNames from 'classnames/bind';
import LOL from 'img/LOL.jpg';

const cx = classNames.bind(styles);
const Banner = () => {
    return (
        <div className={cx('Banner-wrapper')}>
            <div className={cx('Banner_move')}></div>
            <img src={LOL}/>
            <div className={cx('Banner_move')}></div>
        </div>
    );
};

export default Banner;