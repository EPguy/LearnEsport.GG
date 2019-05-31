import React from 'react';
import styles from './ContentHeader.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const ContentHeader = () => {
    return (
        <div className={cx("Content_Header")}>
            <div className="title">
                <div className="learnEsports">LearnEsport</div>
                <div className="dot">.</div>
                <div className="GG">GG</div>
            </div>
            <div className={cx("contents")}>
                <div class="content_name"><Link to="/login">전체강좌</Link></div>
                <div class="content_wall"></div>
                <div class="content_name"><Link to="/login">리그오브레전드</Link></div>
                <div class="content_wall"></div>
                <div class="content_name"><Link to="/login">오버워치</Link></div>
                <div class="content_wall"></div>
                <div class="content_name"><Link to="/login">배틀그라운드</Link></div>
                <div class="content_wall"></div>
                <div class="content_name"><Link to="/login">스타크래프트</Link></div>
                <div class="content_wall"></div>
                <div class="content_name"><Link to="/login">피파온라인4</Link></div>
            </div>
        </div>
    );
};

export default ContentHeader;