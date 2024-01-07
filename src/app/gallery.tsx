"use client";

import ImageGrid from '@/components/image-grid';
import { Typography } from '@material-tailwind/react';

const Gallery = () => {
    const images = [
        'https://picsum.photos/400/400',
        'https://picsum.photos/401/400',
        'https://picsum.photos/402/400',
        'https://picsum.photos/403/400',
        'https://picsum.photos/404/400',
        'https://picsum.photos/405/400',
        'https://picsum.photos/406/400',
        'https://picsum.photos/407/400',
    ];
    
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto flex flex-col items-center px-4 py-10">
        <Typography variant="h6" className="text-center mb-2" color="orange">
            Gallery
        </Typography>
        <Typography variant="h3" className="text-center" color="blue-gray">
            Our Activity
        </Typography>
        <ImageGrid images={images}/>
      </div>
    </section>
  );
};

export default Gallery;
