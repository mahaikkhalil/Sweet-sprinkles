import React from 'react';
import c from "../../assets/c.jpg"; 

const About = () => {
  return (
    <>
      <div className="box bg-red-300">
        {/* Header */}
        <div className='w-full h-12 bg-blue-600 text-slate-100 text-center text-2xl sm:text-4xl font-bold py-3 animate-bounce'>
          So Many Desserts Under One Roof!
        </div>

        {/* Main Content */}
        <div className='relative bg-red-300 flex flex-col items-center justify-center py-8'>
          {/* Image and Text */}
          <div className='relative w-full max-w-screen-lg flex flex-col items-center'>
            <a href="#" className='flex items-center gap-2 text-2xl sm:text-3xl font-bold mb-8'>
              <img 
                src={c} 
                alt="sweet sprinkle"  
                className="w-full max-w-lg h-auto object-cover mb-4 sm:mb-0"
              />
            </a>
            <div className='text-2xl sm:text-3xl text-pink-700 font-semibold mb-4 text-center'>
              Customize Your Own Muffins!
            </div>
          </div>

          {/* About Us Text */}
          <div className='w-full max-w-screen-lg px-4'>
            <p className='text-2xl sm:text-4xl font-bold text-blue-600 text-center mb-4'>
              About Us!
            </p>
            <p className='text-base sm:text-lg font-sans text-pink-950 text-center'>
              Welcome to Sweet Sprinkles!

              At Sweet Sprinkles, we believe that every bite should be a celebration of flavor, joy, and the simple pleasures of life. We are a passionate team of dessert enthusiasts dedicated to creating the most delightful and delectable treats that bring a smile to your face and warmth to your heart.

              Our journey began with a love for sweets and a desire to share that love with our community. From classic confections to innovative new creations, every dessert we make is crafted with the finest ingredients, care, and a sprinkle of love. Whether you're craving a rich, velvety chocolate cake, a delicate macaron, or a fresh, fruity tart, we have something to satisfy every sweet tooth.

              At Sweet Sprinkles, we are more than just a dessert shop; we are a destination for those who appreciate the art of indulgence. Our mission is to create a little moment of happiness in every day, one dessert at a time.
            </p>
          </div>
        </div>
      </div>

     
    
    </>
  );
}

export default About;
