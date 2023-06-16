import { Stack, Typography } from '@mui/material';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

/* eslint-disable-next-line */
export interface HeaderCenterItemProps {
  name: string;
  url: string;
}

const Wrapper = styled.div``;

const CustomLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export function HeaderCenterItem({ name, url }: HeaderCenterItemProps) {
  return (
    <Stack justifyContent={'center'}>
      <CustomLink to={url}>
        <Wrapper>
          <Typography>{name}</Typography>
        </Wrapper>
      </CustomLink>
    </Stack>
  );
}

export default HeaderCenterItem;
