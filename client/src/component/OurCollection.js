// src/App.js
import React from 'react';
// import boy from '../assest/Boy.jpeg'
// import girl from '../assest/girl.webp'
// import men from '../assest/men.jpeg'
// import women from '../assest/women.webp'

import chudi from '../assest/chudi.avif'
import shirt from '../assest/shirt.jpg'
import tshirt from '../assest/tshirt.jpg'
import pant from '../assest/pant.avif'
import saree from '../assest/saree.avif'
import halfsaree from '../assest/halfsaree.jpg'
import wedding from '../assest/wedding.webp'


const collections = [
    { id: 1, name: 'Shirt', imgSrc: shirt },
    { id: 2, name: 'T-Shirt', imgSrc: tshirt },
    { id: 3, name: 'Pants', imgSrc: pant },
    { id: 4, name: 'Chudidhar', imgSrc: chudi },
    { id: 5, name: 'Saree', imgSrc: saree },
    { id: 6, name: 'Half Saree', imgSrc: halfsaree },
    { id: 7, name: "Wedding Dress", imgSrc: wedding }

];

function Ourcollection() {
  return (
    <div className="container py-8">
      <h1 className="text-2xl font-bold mb-8 text-center sm:justify-center text-blue-950">Our Collections</h1>
      <div className="flex justify-evenly items-center w-screen">
        {/* <button className=" p-2 rounded-full bg-gray-200">&#8249;</button> */}
        <div className="flex space-x-8 overflow-x-auto ">
          {collections.map(collection => (
            <div key={collection.id} className="flex flex-col items-center w-screen ">
              <div className="w-48 h-48 sm:w-32 sm:h-32 rounded-full overflow-hidden mb-4">
                <img src={collection.imgSrc} alt={collection.name} className="w-full h-full object-cover cursor-pointer hover:" />
              </div>
              <p className="text-center">{collection.name}</p>
            </div>
          ))}
        </div>
        {/* <button className="ml-4 p-2 rounded-full bg-gray-200">&#8250;</button> */}
      </div>
      <div className="text-center mt-4">
        <a href="#view-all" className="text-blue-500">View All</a>
      </div>
    </div>
  );
}

export default Ourcollection;
