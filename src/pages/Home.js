import React, { useState } from 'react';
import { Box } from '@mui/material';
import Exercises from '../components/Exercises';
import Navbar from '../components/Navbar';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  return (
    <Box>
      <Navbar setExercises={setExercises} /> {/* Pass setExercises to Navbar */}
      <HeroBanner />
      <SearchExercises bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercises exercises={exercises} bodyPart={bodyPart} setExercises={setExercises} /> {/* Pass setExercises to Exercises component as well */}
    </Box>
  );
};

export default Home;
