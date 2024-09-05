import React, { useState } from 'react';
import { format } from 'date-fns';
// Sample data for clothing inventory
const clothInventoryData = [
  {
    id: 1,
    pname: "Blue shirt",
    pprice: 500,
    rating: 4.4,
    category: "shirt",
    size: "M, L, XL",
    description:
      "This blue shirt is crafted from premium cotton, offering a soft and comfortable feel. It features a modern fit that is perfect for both casual and formal occasions. The vibrant blue color adds a touch of sophistication to your wardrobe. With its durable stitching and breathable fabric, this shirt ensures long-lasting wear and comfort throughout the day.",
    img: "https://res.cloudinary.com/dsqxjkcxe/image/upload/v1723913732/WhatsApp_Image_2024-08-11_at_20.38.10_iveh1b.jpg",
  },
  {
    id: 2,
    pname: "Orange shirt",
    pprice: 400,
    rating: 4.5,
    category: "shirt",
    size: "S, M, L",
    description:
      "Brighten up your day with this orange shirt, made from a lightweight and breathable fabric. It provides a relaxed fit that is perfect for everyday wear. The shirt is designed with a classic collar and button-down front, making it versatile enough for both casual and semi-formal events. Enjoy the vibrant color and comfortable design that keeps you looking sharp and feeling great all day long.",
    img: "https://drive.google.com/uc?export=view&id=16jdnZU0cJc67vFCDHj8rbHVhkpKDGOxW",
  },
  {
    id: 3,
    pname: "Pink shirt",
    pprice: 600,
    rating: 4.7,
    category: "shirt",
    size: "M, L, XL",
    description:
      "Add a pop of color to your wardrobe with this stylish pink shirt. Made from high-quality cotton, it offers a comfortable fit that is perfect for all-day wear. The shirt features a contemporary cut and a crisp finish, making it ideal for both professional and casual settings. Its vibrant pink hue is sure to make a statement, while the soft fabric ensures a great feel against your skin.",
    img: "https://drive.google.com/uc?export=view&id=1IT-CmfRv9SHboK9mOriVGfqcRqo7v8iK",
  },
  {
    "id": 4,
    "pname": "Light Brown shirt",
    "pprice": 500,
    "rating": 4.4,
    "category": "shirt",
    "size": "S, M, L",
    "description": "This light brown shirt is a versatile addition to any wardrobe. Crafted from a blend of cotton and polyester, it offers a comfortable and durable wear. The shirt's neutral color makes it easy to pair with any outfit, whether for a casual day out or a more formal event. Its classic design features a button-down front and a tailored fit, ensuring you always look polished and put-together.",
    "img": "https://drive.google.com/file/d/1LKeTR3UQcR0Ak1Gfr8BTnttZgV2MaGc3/view?usp=drive_link"
},
{
    "id": 5,
    "pname": "Dark Pink shirt",
    "pprice": 600,
    "rating": 4.4,
    "category": "shirt",
    "size": "M, L, XL",
    "description": "This dark pink shirt is perfect for making a bold statement. It is made from a premium cotton blend, providing a soft and comfortable fit. The shirt's deep pink shade is both striking and stylish, making it a great choice for any occasion. Its tailored cut and classic collar add a touch of sophistication, while the durable fabric ensures it will remain a staple in your wardrobe for years to come.",
    "img": "https://drive.google.com/file/d/1fhkOG5i4iuoABstP-i0aXnuYNwHHpYP3/view?usp=drive_link"
},
{
    "id": 6,
    "pname": "Dark Red shirt",
    "pprice": 400,
    "rating": 4.5,
    "category": "shirt",
    "size": "S, M, L",
    "description": "Elevate your style with this dark red shirt, crafted from a high-quality cotton fabric that offers both comfort and durability. The rich red color adds a touch of elegance to any outfit, making it ideal for both work and leisure. Its classic design features a button-down front and a relaxed fit, ensuring you look sharp and feel comfortable throughout the day.",
    "img": "https://drive.google.com/file/d/1_5Ns2r1O568Ut8PdfMueSSZse3s9A7lq/view?usp=drive_link"
},
{
    "id": 7,
    "pname": "Yellow shirt",
    "pprice": 600,
    "rating": 4.7,
    "category": "shirt",
    "size": "M, L, XL",
    "description": "Brighten up your wardrobe with this cheerful yellow shirt. Made from soft, breathable cotton, it provides all-day comfort and a relaxed fit. The vibrant yellow color is perfect for adding a pop of color to your outfit, whether you're heading to the office or out for a casual weekend. Its classic design and durable fabric make it a versatile and stylish choice for any occasion.",
    "img": "https://drive.google.com/file/d/1Yv9n3jTKkkzLuF3oAEHD_cCO35nK9O_U/view?usp=drive_link"
},
{
    "id": 8,
    "pname": "Light grey shirt",
    "pprice": 700,
    "rating": 4.7,
    "category": "shirt",
    "size": "S, M, L",
    "description": "This light grey shirt is a versatile and stylish addition to any wardrobe. Made from a soft and breathable cotton blend, it offers a comfortable fit that is perfect for all-day wear. The neutral grey color makes it easy to pair with any outfit, while the classic design features a button-down front and a tailored fit, ensuring you always look polished and put-together.",
    "img": "https://drive.google.com/file/d/1_GImObQmidP-BWM8ypMevaCT4moPZNfQ/view?usp=drive_link"
},
{
    "id": 9,
    "pname": "White-black checked 1",
    "pprice": 500,
    "rating": 4.4,
    "category": "shirt",
    "size": "M, L, XL",
    "description": "This white-black checked shirt is a classic choice for any occasion. Made from high-quality cotton, it offers a comfortable and durable fit that is perfect for everyday wear. The shirt features a timeless checked pattern and a classic collar, making it versatile enough to wear to the office or out on the town. Its crisp, clean design ensures you always look sharp and put-together.",
    "img": "https://drive.google.com/file/d/1XXQbL7yoeHE_QYpNPoD9ydTqlEgc_XJo/view?usp=drive_link"
},
{
    "id": 10,
    "pname": "White-black checked 2",
    "pprice": 500,
    "rating": 4.5,
    "category": "shirt",
    "size": "S, M, L",
    "description": "Add a touch of classic style to your wardrobe with this white-black checked shirt. Made from soft, breathable cotton, it provides a comfortable fit that is perfect for all-day wear. The shirt's timeless checked pattern and classic design make it a versatile choice for any occasion, whether you're heading to the office or out for a casual weekend. Its durable fabric ensures it will remain a staple in your wardrobe for years to come.",
    "img": "https://drive.google.com/file/d/1nhhRfGFJ_PhZRj5mkfpUg5TRCzLE3xlm/view?usp=drive_link"
},
{
    "id": 11,
    "pname": "White-black checked 3",
    "pprice": 500,
    "rating": 4.5,
    "category": "shirt",
    "size": "M, L, XL",
    "description": "This white-black checked shirt is a versatile addition to any wardrobe. Crafted from high-quality cotton, it offers a comfortable and durable fit that is perfect for everyday wear. The shirt features a timeless checked pattern and a classic collar, making it easy to pair with any outfit. Its crisp, clean design ensures you always look sharp and put-together, whether you're at work or out on the town.",
    "img": "https://drive.google.com/file/d/1vu7rLWcblQDANDK4kZqlwx10PqbA_9AH/view?usp=drive_link"
},
{
    "id": 12,
    "pname": "White Pattern",
    "pprice": 700,
    "rating": 4.7,
    "category": "shirt",
    "size": "S, M, L",
    "description": "Elevate your style with this white patterned shirt. Made from a premium cotton blend, it offers a soft and comfortable fit that is perfect for all-day wear. The shirt's unique pattern adds a touch of sophistication to any outfit, making it ideal for both professional and casual settings. Its tailored cut and classic collar ensure you always look polished and put-together.",
    "img": "https://drive.google.com/file/d/1yHtVkQbZrLT6clatFzNaKiyuoo0yRrMY/view?usp=drive_link"
},
{
    "id": 13,
    "pname": "Grey Pattern1",
    "pprice": 500,
    "rating": 4.4,
    "category": "shirt",
    "size": "M, L, XL",
    "description": "Add a touch of style to your wardrobe with this grey patterned shirt. Made from soft, breathable cotton, it provides a comfortable fit that is perfect for all-day wear. The shirt's unique pattern and neutral grey color make it a versatile choice for any occasion, whether you're heading to the office or out for a casual weekend. Its classic design and durable fabric ensure it will remain a staple in your wardrobe for years to come.",
    "img": "https://drive.google.com/file/d/1djgbutC1vz-VaIwo5RRDVCqY9aCc_zhC/view?usp=drive_link"
},
{
    "id": 14,
    "pname": "Grey Pattern2",
    "pprice": 500,
    "rating": 4.5,
    "category": "shirt",
    "size": "S, M, L",
    "description": "This grey patterned shirt is a stylish and versatile addition to any wardrobe. Crafted from high-quality cotton, it offers a comfortable and durable fit that is perfect for everyday wear. The shirt's unique pattern and neutral color make it easy to pair with any outfit, while the classic design features a button-down front and a tailored fit, ensuring you always look polished and put-together.",
    "img": "https://drive.google.com/file/d/1Gq5_IH7FTHpr71vEf9MkT6IiqGgLxkIx/view?usp=drive_link"
},
{
    "id": 15,
    "pname": "Black Pattern1",
    "pprice": 600,
    "rating": 4.5,
    "category": "shirt",
    "size": "M, L, XL",
    "description": "Elevate your style with this black patterned shirt. Made from a premium cotton blend, it offers a soft and comfortable fit that is perfect for all-day wear. The shirt's unique pattern and deep black color add a touch of sophistication to any outfit, making it ideal for both professional and casual settings. Its tailored cut and classic collar ensure you always look polished and put-together.",
    "img": "https://drive.google.com/file/d/1SFhu2QHNfZADp_ZEvXgpmgO6CvOMwGy9/view?usp=drive_link"
},

{
  "id": 17,
  "pname": "Black Pant",
  "pprice": 600,
  "rating": 4.7,
  "category": "pant",
  "size": "S, M, L",
  "description": "Add a touch of style to your wardrobe with this black patterned shirt. Made from soft, breathable cotton, it provides a comfortable fit that is perfect for all-day wear. The shirt's unique pattern and deep black color make it a versatile choice for any occasion, whether you're heading to the office or out for a casual weekend. Its classic design and durable fabric ensure it will remain a staple in your wardrobe for years to come.",
  "img": "https://drive.google.com/file/d/1t6TX9l7cIKxnjURHZ1YwcryVsjFiK3mu/view?usp=drive_link"
},

{
  "id": 18,
  "pname": "Red Tshirt",
  "pprice": 600,
  "rating": 4.7,
  "category": "tshirt",
  "size": "S, M, L",
  "description": "Add a touch of style to your wardrobe with this black patterned shirt. Made from soft, breathable cotton, it provides a comfortable fit that is perfect for all-day wear. The shirt's unique pattern and deep black color make it a versatile choice for any occasion, whether you're heading to the office or out for a casual weekend. Its classic design and durable fabric ensure it will remain a staple in your wardrobe for years to come.",
  "img": "https://drive.google.com/file/d/1t6TX9l7cIKxnjURHZ1YwcryVsjFiK3mu/view?usp=drive_link"
}


  // Additional clothing items go here...
];

const Inventory = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleTabClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredCloths = selectedCategory === 'all' ? clothInventoryData :
    clothInventoryData.filter(item => item.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Clothing Inventory</h2>
      <div className="flex flex-col sm:flex-row sm:space-x-4">
        <button className={`tab ${selectedCategory === 'all' ? 'active bg-blue-950 text-white' : ''} px-4 py-2 rounded-md mb-2 sm:mb-0`} onClick={() => handleTabClick('all')}>
          All
        </button>
        <button className={`tab ${selectedCategory === 'shirt' ? 'active bg-blue-950 text-white' : ''} px-4 py-2 rounded-md mb-2 sm:mb-0`} onClick={() => handleTabClick('shirt')}>
          Shirts
        </button>
        <button className={`tab ${selectedCategory === 'pant' ? 'active bg-blue-950 text-white' : ''} px-4 py-2 rounded-md mb-2 sm:mb-0`} onClick={() => handleTabClick('pant')}>
           Pants
        </button>
        <button className={`tab ${selectedCategory === 'tshirt' ? 'active bg-blue-950 text-white' : ''} px-4 py-2 rounded-md mb-2 sm:mb-0`} onClick={() => handleTabClick('tshirt')}>
           Tshirts
        </button>
      </div>
      <div className="shadow-md border-b border-gray-200 sm:rounded-lg overflow-x-auto overflow-y-auto max-w-auto max-h-96 mt-4">
        <table className=" w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-3 sm:px-5 py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th scope="col" className="px-3 sm:px-5 py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">Product</th>
              <th scope="col" className="px-3 sm:px-5 py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">Image</th>
              <th scope="col" className="px-3 sm:px-5 py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">Price</th>
              <th scope="col" className="px-3 sm:px-5 py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">Rating</th>
              <th scope="col" className="px-3 sm:px-5 py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">Description</th>
              <th scope="col" className="px-3 sm:px-5 py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">Size</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredCloths.map((item) => (
              <tr key={item.id}>
                <td className="px-3 sm:px-6 py-3 whitespace-nowrap">{item.id}</td>
                <td className="px-3 sm:px-6 py-3 whitespace-nowrap">{item.pname}</td>
                <td className="px-3 sm:px-6 py-3 whitespace-nowrap">
                  <img src={item.img} alt={item.pname} className="h-16" />
                </td>
                <td className="px-3 sm:px-6 py-3 whitespace-nowrap">{`$${item.pprice}`}</td>
                <td className="px-3 sm:px-6 py-3 whitespace-nowrap">{item.rating}</td>
                <td className="px-3 sm:px-6 py-3 whitespace-nowrap">{item.description}</td>
                <td className="px-3 sm:px-6 py-3 whitespace-nowrap">{item.size}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Inventory;
