import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Stack, Button, TextField } from '@mui/material';
import Logo from '../assets/images/Logo2.jfif';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const Navbar = ({ setExercises }) => {
  const [search, setSearch] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = async () => {
    if (search) {
      // Fetch exercises data
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

      // Filter exercises
      const searchedExercises = exercisesData.filter(
        (item) =>
          item.name.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search)
      );

      // Scroll to a specific position
      window.scrollTo({ top: 2000, left: 100, behavior: 'smooth' });

      // Clear the search input
      setSearch('');

      // Update the exercises state
      setExercises(searchedExercises);
    } else {
      alert('Please Enter something in the search bar');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      // Prevent the default form submission behavior
      e.preventDefault();

      // Call the handleSearch function when the Enter key is pressed
      handleSearch();
    }
  };

  return (
    <Stack
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        gap: '10px',
        padding: '10px 20px',
        backgroundColor: 'white',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        '@media (min-width: 768px)': {
          alignItems: 'start',
          flexDirection: 'row',
        },
      }}
    >
      <Link to="/">
        <img
          src={Logo}
          alt="Logo"
          style={{ width: '50px', height: '50px', margin: '0 10px' }}
        />
      </Link>
      
      <Button 
        onClick={toggleMenu} 
        sx={{
          color: '#177e36',
          '@media (min-width: 768px)': {
            display: 'none',
          },
        }}
      >
        {isMenuOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </Button>


      {isMenuOpen && (
        <Stack 
          gap="10px"
          padding="10px" 
          alignItems="center"
          sx={{ 
            color: '#177e36',  
            '@media (min-width: 768px)': {
            flexDirection: 'row',
          }, }}
          
        >
          <Link to="/" style={{ textDecoration: 'none', color: '#177e36' }} className="navbar_hover">
            Home
          </Link>
          <a href="#exercises" style={{ textDecoration: 'none', color: '#177e36' }} className="navbar_hover">
            Exercises
          </a>
          <TextField
            height="40px"
            sx={{
              input: {
                fontWeight: '700',
                border: '1px solid #ccc',
                borderRadius: '4px',
                padding: '6px 10px',
              },
              width: '250px', // Adjust width for small screens
            }}
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            placeholder="Search Exercises"
            type="text"
            onKeyPress={handleKeyPress}
          />
          <Button
            className="search-btn"
            sx={{
              bgcolor: '#dfcf29',
              color: '#fff',
              textTransform: 'none',
              height: '40px',
              padding: '0 10px',
              borderRadius: '4px',
            }}
            onClick={handleSearch}
          >
            Search
          </Button>
        </Stack>
      )}

        <Stack 
          gap="10px"
          padding="10px" 
          alignItems="center"
          sx={{  
            '@media (min-width: 768px)': {
            flexDirection: 'row',
            }, 
            '@media (max-width: 768px)': {
              flexDirection: 'row',
              display: 'none',
            }, 
        
        }}
          
        >
          <Link to="/" style={{ textDecoration: 'none', color: '#177e36' }} className="navbar_hover">
            Home
          </Link>
          <a href="#exercises" style={{ textDecoration: 'none', color: '#177e36' }} className="navbar_hover">
            Exercises
          </a>
          <TextField
            height="40px"
            sx={{
              input: {
                fontWeight: '700',
                border: '1px solid #ccc',
                borderRadius: '4px',
                padding: '6px 10px',
              },
              width: '250px', // Adjust width for small screens
            }}
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            placeholder="Search Exercises"
            type="text"
            onKeyPress={handleKeyPress}
          />
          <Button
            className="search-btn"
            sx={{
              bgcolor: '#dfcf29',
              color: '#fff',
              textTransform: 'none',
              height: '40px',
              padding: '0 10px',
              borderRadius: '4px',
            }}
            onClick={handleSearch}
          >
            Search
          </Button>
        </Stack>
    </Stack>
  );
};

export default Navbar;
