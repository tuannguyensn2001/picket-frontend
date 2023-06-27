import { Avatar, Box, ListItemButton, Stack } from '@mui/material';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import { INotification } from 'shared-type/src/models/INotification';
import { useMemo } from 'react';
import dayjs from 'dayjs';

/* eslint-disable-next-line */
export type NotificationItemProps = INotification & {};

export function NotificationItem(props: NotificationItemProps) {
  const content = useMemo(() => {
    let str = props.template;
    Object.keys(props.payload).forEach((key) => {
      const val = props.payload[key];
      str = str.replace(`{{${key}}}`, val);
    });
    return str;
  }, [props.template, props.payload]);

  const previous = useMemo(() => {
    const created_at = dayjs.unix(props.created_at);
    const now = dayjs();
    const diff = now.diff(created_at, 'day');
    return diff;
  }, [props.created_at]);
  return (
    <ListItemButton selected={!props.read_at} alignItems="flex-start">
      {/*<ListItemButton>*/}
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" src={props.from_user.profile?.avatar_url} />
      </ListItemAvatar>
      <ListItemText
        // primary="Brunch this weekend?"
        primary={
          <Typography component={'div'} variant="body1" color="text.primary">
            {content}
          </Typography>
        }
        secondary={
          <Typography component={'div'} variant={'caption'}>
            {previous} ngay truoc
          </Typography>
        }
      />
      {/*</ListItemButton>*/}
    </ListItemButton>
  );
}

export default NotificationItem;
