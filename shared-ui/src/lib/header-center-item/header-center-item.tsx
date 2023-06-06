import styles from './header-center-item.module.scss';
import { Box, Typography } from '@mui/material';
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
    <CustomLink to={url}>
      <Wrapper>
        <Typography>{name}</Typography>
      </Wrapper>
    </CustomLink>
  );
}

export default HeaderCenterItem;
