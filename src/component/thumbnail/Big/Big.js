import React from 'react';
import styles from './Big.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import LOL from 'img/LOL.jpg';
import User from 'img/user.png';
import Heart from 'img/heart.png';

const cx = classNames.bind(styles);

const Big = (preview) => {
    return (
        <div className={cx("Big_thumbnail", preview)}>
            <div className={cx("Big_image")}><img src={LOL}/></div>
            <div className={cx("Big_description")}>
                <div className={cx("description_top")}>
                    <div className={cx("description_title")}>리그오브레전드 기초 강의</div>
                    <div className={cx("description_explain")}>모든것의 기본 라인관리, 미니언 먹는 방법, 라인전 딜교방법 등을 알려드립니다.</div>
                </div>
                <div className="description_bottom">
                    <div className={cx("bottom_left")}>
                        <div className="bottom_top">
                            <img src={User}/>
                            <div className={cx("description_num")}>35701</div>
                        </div>
                        <div className="bottom_bottom">
                            <img src={Heart}/>
                            <div className={cx("description_num")}>5201</div>
                        </div>
                    </div>
                    <div className={cx("bottom_right")}>
                        <div className={cx("bottom_top")}>
                            <div className={cx("description_price")}>$30.00</div>
                        </div>
                        <div className={cx("bottom_bottom")}>
                            <div className={cx("description_name")}>Caps</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Big;