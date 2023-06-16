import {
  Avatar,
  Box,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { Logout } from '@mui/icons-material';
import { useTranslation } from '@picket/localization';
import SettingsIcon from '@mui/icons-material/Settings';
import SaveIcon from '@mui/icons-material/Save';
import { useLogout } from '@picket/auth';

/* eslint-disable-next-line */
export interface HeaderMenuProfileProps {
  avatar_url?: string;
  username: string;
}

export function HeaderMenuProfile(props: HeaderMenuProfileProps) {
  const [anchor, setAnchor] = useState<null | HTMLElement>(null);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setAnchor(null);
  };

  const { t } = useTranslation();
  const logout = useLogout();

  return (
    <Box>
      <Tooltip title={t('header.account')}>
        <IconButton onClick={handleOpen}>
          <Avatar sx={{ width: 32, height: 32 }} src={props.avatar_url} />
        </IconButton>
      </Tooltip>

      <Menu
        open={Boolean(anchor)}
        onClose={handleClose}
        anchorEl={anchor}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          <Stack direction={'row'}>
            <Avatar sx={{ width: 40, height: 40 }} src={props.avatar_url} />
            <Stack justifyContent={'center'}>
              <Typography>{props.username}</Typography>
            </Stack>
          </Stack>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <SaveIcon />
          </ListItemIcon>
          <Typography>{t('header.my_course')}</Typography>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <Typography>{t('header.settings')}</Typography>
        </MenuItem>
        <MenuItem onClick={logout}>
          <ListItemIcon>
            <Logout />
          </ListItemIcon>
          <Typography>{t('header.logout')}</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
}

export default HeaderMenuProfile;
