import { Badge, Box, IconButton, Tooltip } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useTranslation } from '@picket/localization';

interface Props {
  numberOfNotifications: number;
}

export function HeaderNotification({ numberOfNotifications }: Props) {
  const { t } = useTranslation();
  return (
    <Box>
      <Tooltip title={t('header.notifications')}>
        <Badge color={'error'} badgeContent={numberOfNotifications}>
          <IconButton>
            <NotificationsIcon />
          </IconButton>
        </Badge>
      </Tooltip>
    </Box>
  );
}

export default HeaderNotification;
