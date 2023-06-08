import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
  Box,
} from '@mui/material';
import styled from 'styled-components';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import { useMemo } from 'react';
import { useTranslation } from '@picket/localization';

export interface CourseProps {
  name: string;
  thumbnail: string;
  numberOfLearners: number;
  isMember?: boolean;
}

const CustomCard = styled(Card)`
  max-width: 400px;
`;

export function Course({
  name,
  thumbnail,
  numberOfLearners,
  isMember,
}: CourseProps) {
  const { t } = useTranslation();
  const text = useMemo(() => {
    return isMember ? t('course.continue') : t('course.view');
  }, [isMember, t]);

  const handleClickBtn = () => {
    console.log('click btn', name);
  };

  return (
    <CustomCard>
      <CardMedia
        sx={{
          borderTopLeftRadius: '5px',
          borderTopRightRadius: '5px',
        }}
        title={name}
        image={thumbnail}
        component={'img'}
      />

      <CardContent>
        <Typography variant={'h6'} gutterBottom>
          {name}
        </Typography>
        <Stack justifyContent={'space-between'} direction={'row'}>
          <Stack mt={0.8} spacing={{ xs: 1 }} direction={'row'}>
            <PeopleOutlineIcon />
            <Typography>{numberOfLearners}</Typography>
          </Stack>
          <Box>
            <Button onClick={handleClickBtn} variant={'contained'}>
              {text}
            </Button>
          </Box>
        </Stack>
      </CardContent>
    </CustomCard>
  );
}

export default Course;
