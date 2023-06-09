import { Box, IconButton, Tooltip } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useTranslation } from '@picket/localization';

export function HeaderNotification() {
  const { t } = useTranslation();
  return (
    <Box>
      <Tooltip title={t('header.notifications')}>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
}

export default HeaderNotification;
