import React from 'react';
import styles from './Body.scss';
import classNames from 'classnames/bind';
import Banner from 'component/Banner';
import Search from 'component/common/Search';
import Big from 'component/thumbnail/Big';
import Small from 'component/thumbnail/Small';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Body = () => {
    return (
        <div className={cx("Body_Wrapper")}>
            <Banner/>
            <Search/>
        </div>
    );
};

export default Body;