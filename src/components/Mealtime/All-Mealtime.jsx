import React from 'react';
import BreakfastEssentials from './Breakfast-Essentials';
import LunchFavorites from './Lunch-Favorites';
import DinnerSpecials from './Dinner-Specials';
import HealthySnacks from './Healthy-Snacks';
import DrinksJuices from './Drinks-Juices';

function AllMealtime() {
  return (
    <div style={{ maxHeight: '70vh', overflowY: 'auto' }}>
      <div><BreakfastEssentials /></div>
      <div><LunchFavorites /></div>
      <div><DinnerSpecials /></div>
      <div><HealthySnacks /></div>
      <div><DrinksJuices /></div>
    </div>
  );
}

export default AllMealtime;