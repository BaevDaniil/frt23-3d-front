import React from 'react';
import './header.css';
import Entry from '../Entry/index';
import './header.css';
import { Button } from '@material-ui/core';
import IconButton from '@mui/material/IconButton';
import UserAvatar from '../../../shared/ui/Avatar/index.js';
import { ReactComponent as Logo } from '../../../shared/assets/svg/header/logo.svg';
import { ReactComponent as Message } from '../../../shared/assets/svg/header/message.svg';
import { ReactComponent as Post } from '../../../shared/assets/svg/header/postadd.svg';
import { ReactComponent as Login } from '../../../shared/assets/svg/header/login.svg';
import { ReactComponent as Love } from '../../../shared/assets/svg/header/favorite.svg';

import { useNavigate } from 'react-router-dom';
import useAxiosStore from '../../../app/store/axiosStore';

const Header = () => {
  const [open_Entry, setOpen_Entry] = React.useState(false);
  const { isAuthorized, setAxiosToken } = useAxiosStore();

  const navigate = useNavigate();

  const getProfileIcon = () => {
    return isAuthorized() ? (
      <>
        <div onClick={() => navigate('/profile')} className="avatar">
          <UserAvatar
            width="35px"
            height="35px"
            avatar={''}
            onClick={() => navigate('/profile')}
          />
        </div>
        <Button
          onClick={() => setAxiosToken(null)}
          color="secondary"
          variant="outlined"
          className="signout"
        >
          Выйти
        </Button>
      </>
    ) : (
      <IconButton onClick={() => setOpen_Entry(true)}>
        <Login className="entry" />
      </IconButton>
    );
  };
  return (
    <>
      <div className="header">
        <div className="header__logo" onClick={() => navigate('/')}>
          <Logo width="70%" />
        </div>
        <div className="header__wrapper">
          {isAuthorized() && (
            <>
              <IconButton onClick={() => navigate('/im')}>
                <Message className="message" />
              </IconButton>
              <IconButton onClick={() => navigate('/create_ad')}>
                <Post className="post" />
              </IconButton>
              <IconButton onClick={() => navigate('/favourite')}>
                <Love className="love" />
              </IconButton>
            </>
          )}
          {getProfileIcon()}
        </div>
      </div>
      {open_Entry && (
        <Entry
          open={open_Entry}
          onCloseCallback={(e) => setOpen_Entry(false)}
        />
      )}
    </>
  );
};
export default Header;
