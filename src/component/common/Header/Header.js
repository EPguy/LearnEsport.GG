import React from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Header = () => {
    return (
        <div className={cx("header")}>
            <div className={cx("header_description")}>런이스포츠.GG에 오신것을 환영합니다.</div>
            <div className={cx("login_button")}><Link to="/login">로그인/회원가입</Link></div>
        </div>
    );
};

export default Header;