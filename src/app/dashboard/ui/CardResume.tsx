import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, CardActionArea, CardActions } from '@mui/material';

interface CardResumeProps {
  quantidade?: number;
  title: string;
  descricao: string;
}

const CardResume: React.FC<CardResumeProps> = ({ quantidade = 0, title, descricao }) => {
  return (
    <Card sx={{ maxWidth: 620, maxHeight: 280 }}>
      <CardActionArea>
        <CardMedia component='iframe' height="23" />
        <CardContent>
          <Typography gutterBottom variant="h2" component="div" className='text-center'>
            {quantidade || 'N/A'}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {descricao}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Ver +
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardResume;
