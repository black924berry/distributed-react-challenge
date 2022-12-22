import React from 'react';
import { Link } from 'react-router-dom';

import SearchInput from '../SearchInput';
import Logo from '../../../assets/images/icon/distributed.png';
import AddIcon from '../../../assets/images/icon/add.png';
import ArrowIcon from '../../../assets/images/icon/arrow.png';
import Avatar from '../../../assets/images/avatar.png';
import ChatIcon from '../../../assets/images/icon/chat.png';
import LocationIcon from '../../../assets/images/icon/location.png';
import NotificationIcon from '../../../assets/images/icon/notification.png';
import './style.sass';

const Header = () => {
  return (
    <header className="app-header__container">
      <div className='app-header__content'>
        <div className="app-header__logo">
          <Link to="/">
            <img src={Logo} alt="league web logo" />
          </Link>
        </div>
        <SearchInput />
        <div className="app-header-icon__list">
          <Link className="app-header-icon-list__item" to="#">
            <img src={AddIcon} alt="add icon" />
          </Link>
          <Link className="app-header-icon-list__item" to="#">
            <img src={LocationIcon} alt="location icon" />
          </Link>
          <Link className="app-header-icon-list__item" to="#">
            <img src={NotificationIcon} alt="notification icon" />
          </Link>
          <Link className="app-header-icon-list__item" to="#">
            <img src={ChatIcon} alt="chat icon" />
          </Link>
          <Link className="app-header-icon-list__item" to="#">
            <img src={Avatar} alt="avatar icon" />
            <img src={ArrowIcon} alt="arrow icon" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
