import { Avatar, Box, Divider, Drawer, Stack, Typography } from '@mui/material';
import HeaderCenterItem from 'shared-ui/src/lib/header-center-item/header-center-item';
import styled from 'styled-components';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useMedia } from 'react-use';
import MenuIcon from '@mui/icons-material/Menu';
import { useMemo, useState } from 'react';
import { useTranslation } from '@picket/localization';

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

  return (
    <Wrapper>
      <Stack py={2} direction={'row'} justifyContent={'space-between'}>
        <Box>
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
        </Box>
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
        <Stack spacing={{ xs: 3 }} direction={'row'}>
          {isWide && <Typography>{t('header.my_course')}</Typography>}
          <Box>
            <NotificationsIcon />
          </Box>
          <Avatar
            sx={{ width: 27, height: 27 }}
            src={
              'https://www.dutchnews.nl/wpcms/wp-content/uploads/2022/10/Depositphotos_454636608_S.jpg'
            }
          />
        </Stack>
      </Stack>
      <Divider />
    </Wrapper>
  );
}

export default Header;
