/* eslint-disable-next-line */
import styled from 'styled-components';
import * as React from 'react';
import { ForwardedRef, forwardRef, Fragment } from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { Box, Paper } from '@mui/material';
import { useTranslation } from '@picket/localization';
import NotificationItem from '../notification-item/notification-item';
import { useQuery } from 'react-query';
import { getOwn } from '@picket/services';

const Wrapper = styled(Paper)`
  position: absolute;
  right: 50px;
  padding-bottom: 0;
`;

const ListNotification = forwardRef<HTMLDivElement>((props, ref) => {
  const { t } = useTranslation();

  const { data } = useQuery('notifications', getOwn);

  return (
    <Wrapper ref={ref} variant={'outlined'}>
      <Box mx={2} mt={2}>
        <Typography>{t('header.notifications')}</Typography>
      </Box>
      <List
        sx={{
          bgcolor: 'background.paper',
          pb: 0,
          width: '100%',
          maxWidth: 360,
          position: 'relative',
          overflow: 'auto',
          maxHeight: 300,
        }}
      >
        {data?.map((item, index) => (
          <Fragment key={item.id}>
            <NotificationItem {...item} />
            {index !== data.length - 1 && <Divider />}
          </Fragment>
        ))}
      </List>
    </Wrapper>
  );
});

export default ListNotification;
