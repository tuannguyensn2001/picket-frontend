import { Box, Button, Divider, Drawer, Stack, Typography } from '@mui/material';
import HeaderCenterItem from '../header-center-item/header-center-item';
import styled from 'styled-components';
import { useMedia } from 'react-use';
import MenuIcon from '@mui/icons-material/Menu';
import { useMemo, useState } from 'react';
import { useTranslation } from '@picket/localization';
import HeaderMenuProfile from '../header-menu-profile/header-menu-profile';
import HeaderNotification from '../header-notification/header-notification';
import { useUser } from '@picket/auth';

/* eslint-disable-next-line */
export interface HeaderProps {}

const Wrapper = styled(Box)`
  background-color: #fff;
`;

export function Header(props: HeaderProps) {
  const { t } = useTranslation();
  const isWide = useMedia('(min-width: 720px)');
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  const menu = useMemo(() => {
    return [
      {
        name: t('header.home'),
        url: '/',
      },
      {
        name: t('header.courses'),
        url: '/courses',
      },
    ];
  }, [t]);

  const { data: user } = useUser();

  return (
    <Wrapper>
      <Stack px={4} py={2} direction={'row'} justifyContent={'space-between'}>
        <Stack justifyContent={'center'}>
          {isWide && <Typography>{t('header.title')}</Typography>}
          {!isWide && (
            <>
              <MenuIcon onClick={() => setIsOpenDrawer(true)} />
              <Drawer
                onClose={() => setIsOpenDrawer(false)}
                open={isOpenDrawer}
                anchor={'left'}
              >
                <div>hello</div>
              </Drawer>
            </>
          )}
        </Stack>
        {isWide && (
          <Stack spacing={{ xs: 5 }} direction={'row'}>
            {menu.map((item) => (
              <HeaderCenterItem
                name={item.name}
                url={item.url}
                key={item.url}
              />
            ))}
          </Stack>
        )}
        {user && (
          <Stack spacing={{ xs: 3 }} direction={'row'}>
            <Stack direction={'row'} spacing={{ xs: 3 }}>
              <Stack justifyContent={'center'}>
                <HeaderNotification />
              </Stack>
            </Stack>
            <HeaderMenuProfile
              username={user.username}
              avatar_url={user?.profile?.avatar_url}
            />
          </Stack>
        )}
        {!user && <Button variant={'contained'}>{t('header.login')}</Button>}
      </Stack>
      <Divider />
    </Wrapper>
  );
}

export default Header;
