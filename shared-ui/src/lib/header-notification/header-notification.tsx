import { Badge, Box, IconButton, Tooltip } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useTranslation } from '@picket/localization';
import { useQuery } from 'react-query';
import { getCountUnread } from '@picket/services';
import { AppError } from '@picket/shared-type';
import ListNotification from '../list-notification/list-notification';
import React, {
  MouseEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

export function HeaderNotification() {
  const { t } = useTranslation();
  const { data: numberOfUnreadNotifications } = useQuery<number, AppError>(
    'countUnread',
    getCountUnread
  );
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((prev) => !prev);

  const refListNotification = useRef<HTMLDivElement>(null);
  const refButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handle = (event: any) => {
      if (!refListNotification.current || !refButton.current) return;
      if (
        event.target === refButton.current ||
        refButton.current.contains(event.target)
      ) {
        return;
      }

      if (!refListNotification.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    window.addEventListener('click', handle);
    return () => window.removeEventListener('click', handle);
  }, [isOpen]);

  return (
    <Box>
      <Tooltip title={t('header.notifications')}>
        <Badge color={'error'} badgeContent={numberOfUnreadNotifications}>
          <IconButton ref={refButton} onClick={toggle}>
            <NotificationsIcon />
          </IconButton>
        </Badge>
      </Tooltip>

      {isOpen && <ListNotification ref={refListNotification} />}
    </Box>
  );
}

export default HeaderNotification;
