import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Mealtime from './pages/Mealtime.jsx';
import BreakfastEssential from './components/Mealtime/Breakfast-Essentials.jsx';
import LunchFavorites from './components/Mealtime/Lunch-Favorites.jsx';
import DinnerSpecials from './components/Mealtime/Dinner-Specials.jsx';
import HealthySnacks from './components/Mealtime/Healthy-Snacks.jsx';
import DrinksJuices from './components/Mealtime/Drinks-Juices.jsx';
import AllMealtime from './components/Mealtime/All-Mealtime.jsx';
import Playtime from './pages/Playtime.jsx';
import Indoorgames from './components/Playtime/Indoor-Games.jsx';
import Outdoortoys from './components/Playtime/Outdoor-Toys.jsx';
import Educationaltoys from './components/Playtime/Educational-Toys.jsx';
import Creativekits from './components/Playtime/Creative-Kits.jsx';
import Bathtime from './pages/Bathtime.jsx';
import Bathtoys from './components/Bathtime/Bath-toy.jsx';
import Babysamphoo from './components/Bathtime/Baby-samphoo.jsx';
import Bubblebath from './components/Bathtime/Bubble-bath.jsx';
import Bathtowels from './components/Bathtime/Bath-towels.jsx';
import Spongesloofahs from './components/Bathtime/Sponges-loofahs.jsx';
import Skincarelotions from './components/Bathtime/Skincare-lotions.jsx';
import Bathsafety from './components/Bathtime/Bath-safety.jsx';
import Storageorganizers from './components/Bathtime/Storage-organizers.jsx';
import Playboxes from './pages/Playboxes.jsx';
import './App.css';

function App() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const location = useLocation();

  const isOverlayPage = location.pathname !== '/';

  return (
    <>
      <div className={`navbar-wrapper${navbarOpen ? ' slide-in' : ''}`}>
        <Navbar open={navbarOpen} setOpen={setNavbarOpen} />
      </div>
      <div className={`overlay-page${isOverlayPage ? ' show' : ''}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mealtime" element={<Mealtime setNavbarOpen={setNavbarOpen} />}>
            <Route path="breakfast" element={<BreakfastEssential />} />
            <Route path="lunch" element={<LunchFavorites />} />
            <Route path="dinner" element={<DinnerSpecials />} />
            <Route path="snacks" element={<HealthySnacks />} />
            <Route path="drinks" element={<DrinksJuices />} />
            <Route path="all" element={<AllMealtime />} />
          </Route>
          <Route path="/playtime" element={<Playtime setNavbarOpen={setNavbarOpen} />}>
            <Route path="indoor" element={<Indoorgames />} />
            <Route path="outdoor" element={<Outdoortoys />} />
            <Route path="educational" element={<Educationaltoys />} />
            <Route path="creative" element={<Creativekits />} />
          </Route>
          <Route path="/bathtime" element={<Bathtime setNavbarOpen={setNavbarOpen} />}>
            <Route path="bathtoys" element={<Bathtoys />} />
            <Route path="babysamphoo" element={<Babysamphoo />} />
            <Route path="bubblebath" element={<Bubblebath />} />
            <Route path="bathtowels" element={<Bathtowels />} />
            <Route path="spongesloofahs" element={<Spongesloofahs />} />
            <Route path="skincarelotions" element={<Skincarelotions />} />
            <Route path="bathsafety" element={<Bathsafety />} />
            <Route path="storageorganizers" element={<Storageorganizers />} />
          </Route>
      
          <Route path="/playboxes" element={<Playboxes setNavbarOpen={setNavbarOpen} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
