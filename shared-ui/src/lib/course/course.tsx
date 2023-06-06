import { Card, CardContent, CardMedia, Typography } from '@mui/material';

export interface CourseProps {
  name: string;
  thumbnail: string;
  numberOfLearners: number;
}

export function Course({ name, thumbnail, numberOfLearners }: CourseProps) {
  return (
    <Card sx={{ maxWidth: '300px' }}>
      <CardMedia
        sx={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}
        title={name}
        image={thumbnail}
        component={'img'}
      />
      <CardContent>
        <Typography gutterBottom>{name}</Typography>
      </CardContent>
    </Card>
  );
}

export default Course;
