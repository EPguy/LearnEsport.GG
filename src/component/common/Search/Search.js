import React from 'react';
import styles from './Search.scss';
import classNames from 'classnames/bind';
import Search_Icon from 'img/SearchIcon.png';

const cx = classNames.bind(styles);
const Search = () => {
    return (
        <div className={cx('Search_Wrapper')}>
            <div className={cx('Search_Text')}>배우고 싶은 것을 검색해 보세요.</div>
            <div className={cx("Search_Box")}>
                <input type="text"/>
                <img src={Search_Icon}/>
            </div>
        </div>
    );
};

export default Search;