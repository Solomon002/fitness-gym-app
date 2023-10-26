import React from 'react';
import { Stack, Typography } from '@mui/material';
import { knowExercise } from '../constant/index';

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  // Find the corresponding image URL based on the item
  const imageUrl = knowExercise.find((exercise) => exercise.name === item)?.url;
  console.log(item);

  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? '4px solid #dfcf29' : '',
        backgroundColor: '#fff',
        borderBottomLeftRadius: '20px',
        width: '270px',
        height: '280px',
        cursor: 'pointer',
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
      }}
    >
      {imageUrl && (
        <img src={imageUrl} alt="dumbbell" style={{ width: '200px', height: '200px', borderRadius: '20%' }} />
      )}
      <Typography fontSize="24px" fontWeight="bold" color="#262719" textTransform="capitalize">
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;