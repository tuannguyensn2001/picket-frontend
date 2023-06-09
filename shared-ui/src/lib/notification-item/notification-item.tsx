import styles from './notification-item.module.scss';
import { Avatar, Box, Stack, Typography } from '@mui/material';

/* eslint-disable-next-line */
export interface NotificationItemProps {
  avatar_url: string;
  html_content: string;
}

export function NotificationItem(props: NotificationItemProps) {
  return (
    <Box>
      <Stack direction={'row'}>
        <Stack justifyContent={'center'}>
          <Avatar src={props.avatar_url} />
        </Stack>
        <div dangerouslySetInnerHTML={{ __html: props.html_content }} />
      </Stack>
    </Box>
  );
}

export default NotificationItem;
