import React from 'react'
import './style.css'
import Data from './Data';

export default function WeatheApp() {
  return (
    <>
        <div className="container">
            <div className="box">
              <div className="header">Weather App</div>
                <Data />
            </div>
        </div>
    </>
  )
}
