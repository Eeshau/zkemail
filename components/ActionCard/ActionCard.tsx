import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { ActionCardProps } from '../../types';
import CustomButton from '../CustomButton/CustomButton';
import { useTheme } from '@mui/material/styles';

const ActionCard: React.FC<ActionCardProps> = ({ title, text, buttonText, buttonLink, topText, light = false }) => {

  const theme = useTheme();

  const cardStyles = light
    ? {
        background: 'linear-gradient(0deg, #FFFFFF 0%, #EAEAEA 100%)',
        color: '#000000',
      }
    : {
        background: 'linear-gradient(0deg, #010101 0%, #262626 100%)',
        color: '#FFFFFF',
      };

  return (
    <Card
      sx={{
        ...cardStyles,
        borderRadius: 0,
        padding: { xs: '20px', sm:'30px', md:'40px' },
        width: '80%',
        marginX: 'auto',
        marginY: { xs: '30px', md: '40px', lg: '60px' },
        '&:hover .top-text': {
          color: theme.palette.secondary.main,
        },
      }}
    >
      <CardContent>
        {topText && (
          <Typography 
            variant="h4" 
            gutterBottom 
            className="top-text"
            sx={{
              fontSize: { xs: '13px', md: '20px' },
              paddingBottom: {xs:'15px', sm:'20px', md:'30px'},
              color: '#797979',
            }}
          >
            {topText}
          </Typography>
        )}
        <Typography
          gutterBottom
          variant="h4"
          sx={{
            fontSize: {
              xs: '25px',
              sm: '30px',
              md: '40px',
              lg: '50px',
              xl: '60px',
            },
            lineHeight: {
              sm: '30px',
              md: '40px',
              lg: '50px',
              xl: '65px',
            },
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          sx={{
            fontSize: {
              xs: '10px',
              sm: '11px',
              md: '15px',
              lg: '22px',
            },
            lineHeight: {
              xs: '13px',
              sm: '15px',
              md: '16px',
              lg: '28px',
            },
            paddingBottom: '10px',
            paddingRight: '10px',
            width: {xs:'93%', md:'80%'},
          }}
        >
          {text}
        </Typography>
        <CustomButton
          variant="contained"
          light={!light} // Set the opposite of light for the button
          sx={{ marginTop: {xs:1, md:3}, paddingX: '30px' }}
          href={buttonLink}
          buttonLabel={buttonText}
        >
          {buttonText} →
        </CustomButton>
      </CardContent>
    </Card>
  );
};

export default ActionCard;

