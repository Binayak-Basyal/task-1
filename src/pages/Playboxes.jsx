import './Playboxes.css'
import { Link, useNavigate, Outlet } from 'react-router-dom';
import React, { useRef, useState } from 'react';

function Playboxes({ setNavbarOpen }) {
  const navigate = useNavigate();
  const productsRef = useRef(null);
  const [activeTab, setActiveTab] = useState('year1');

  return (
    <div className='playboxes-container'>
      <div className='playboxes-content'>
        <div className='playboxes-left'>
          <h2>Shop Play Boxes</h2>
          <ul>
            <li> Play Box Subscription </li>
            <li> Newborn box </li>
            <li> Gift Play Boxes </li>
            <li> Reedem Gift </li>
            <li> All Play Boxes </li>
          </ul>
        </div>
        <div className={`playboxes-middle${activeTab === 'year2' ? ' year2-active' : ''}`}>
          <span>
            <button
              className={activeTab === 'year1' ? 'active' : ''}
              onClick={() => setActiveTab('year1')}
            >
              Year 1
            </button>
            <button
              className={activeTab === 'year2' ? 'active' : ''}
              onClick={() => setActiveTab('year2')}
            >
              Year 2
            </button>
          </span>
          <div className='tab1'>
            <div>
              <div className='outerbox'>
                <div className='innerbox1'></div>
              </div>
              <h4>0-12Weeks</h4>
            </div>
            <div>
              <div>
                <div className='outerbox'>
                  <div className='innerbox2'>
                    <div className='oval'></div>
                    <div className='oval'></div>
                  </div>
                </div>
                <h4>3-4Mon</h4>
              </div>
            </div>
            <div>
              <div className='outerbox'>
                <div className='semicircles' >
                  <div className="semicircle"></div>
                  <div className="semicircle"></div>
                  <div className="semicircle"></div>
                </div>
              </div>
              <h4>5-6Mon</h4>
            </div>
            <div>
              <div className='outerbox'>
                <div className="circles-wrapper">
                  <div className="circle"></div>
                  <div className="circle"></div>
                  <div className="circle"></div>
                  <div className="circle"></div>
                </div>
              </div>
              <h4>7-8Mon</h4>
            </div>
            <div>
              <div className='outerbox'>
                <div className="semiovals-wrapper">
                  <div className="semioval"></div>
                  <div className="semioval"></div>
                  <div className="semioval"></div>
                </div>
              </div>
              <h4>9-10Mon</h4>
            </div>
            <div>
              <div className='outerbox'>
                <div className='innerbox3'>
                  <div className="halfcircle"></div>
                  <div className='rectangle'></div>
                </div>
              </div>
              <h4>11-12Mon</h4>
            </div>
          </div>
          <div className='tab2'>
            <div>
              <div className='outerbox'>
                <div className='innerbox1'></div>
              </div>
              <h4>13-14Mon</h4>
            </div>
            <div>
              <div>
                <div className='outerbox'>
                  <div className='innerbox2'>
                    <div className='oval'></div>
                    <div className='oval'></div>
                  </div>
                </div>
                <h4>15-16Mon</h4>
              </div>
            </div>
            <div>
              <div className='outerbox'>
                <div className='semicircles' >
                  <div className="semicircle"></div>
                  <div className="semicircle"></div>
                  <div className="semicircle"></div>
                </div>
              </div>
              <h4>17-18Mon</h4>
            </div>
            <div>
              <div className='outerbox'>
                <div className="circles-wrapper">
                  <div className="circle"></div>
                  <div className="circle"></div>
                  <div className="circle"></div>
                  <div className="circle"></div>
                </div>
              </div>
              <h4>19-20Mon</h4>
            </div>
            <div>
              <div className='outerbox'>
                <div className="semiovals-wrapper">
                  <div className="semioval"></div>
                  <div className="semioval"></div>
                  <div className="semioval"></div>
                </div>
              </div>
              <h4>21-22Mon</h4>
            </div>
            <div>
              <div className='outerbox'>
                <div className='innerbox3'>
                  <div className="halfcircle"></div>
                  <div className='rectangle'></div>
                </div>
              </div>
              <h4>23-24Mon</h4>
            </div>
          </div>
        </div>
        <div className='playboxes-right'>
          <h3>Play Box Gifts & Subscriptions</h3>
          <div className="graphicsproduct">
            <div className="product">
              <img src="../public/cup.png" alt="Product 1" />
              <div className="info">
                <p>First Bits Fuill Kit</p>
                <span>$40/month</span>
              </div>
            </div>
            <div className="product">
              <img src="../public/chair.png" alt="Product 1" />
              <div className="info">
                <p>First Bits Fuill Kit</p>
                <span>$40/month</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Playboxes;