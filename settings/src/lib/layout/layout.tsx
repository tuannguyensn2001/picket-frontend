import styles from './layout.module.scss';
import { Outlet, useLocation, Link } from 'react-router-dom';
import {
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { useMemo } from 'react';
import { useTranslation } from '@picket/localization';
import styled from 'styled-components';

const CustomLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

/* eslint-disable-next-line */
export interface LayoutProps {}

export function Layout(props: LayoutProps) {
  const { t } = useTranslation();
  const location = useLocation();

  const menu = useMemo(() => {
    const { pathname } = location;
    const result = [
      {
        path: 'personal',
        title: 'settings.personal',
      },
      {
        path: 'security',
        title: 'settings.security',
      },
      {
        path: 'notification',
        title: 'settings.notification',
      },
    ];
    return result.map((item) => ({
      ...item,
      selected: pathname.includes(item.path),
    }));
  }, [location.pathname]);

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid xs={3}>
          <List sx={{ backgroundColor: 'background.paper' }}>
            {menu.map((item) => (
              <CustomLink to={`/settings/${item.path}`} key={item.path}>
                <ListItem>
                  <ListItemButton selected={item.selected}>
                    <ListItemText primary={t(item.title)} />
                  </ListItemButton>
                </ListItem>
              </CustomLink>
            ))}
          </List>
        </Grid>
        <Grid xs={9}>
          <Outlet />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Layout;
