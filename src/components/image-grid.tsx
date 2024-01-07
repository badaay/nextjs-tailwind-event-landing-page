import { useState } from 'react';
import Image from 'next/image';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const ImageGrid = ({ images }) => {
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setLightboxIsOpen(true);
  };

  const closeLightbox = () => {
    setLightboxIsOpen(false);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {images.map((imageUrl, index) => (
        <div key={index} className="relative">
          <a onClick={() => openLightbox(index)}>
            <Image
              src={imageUrl}
              alt={`Image ${index + 1}`}
              layout="responsive"
              width={400}
              height={600}
              className="rounded-md cursor-pointer"
            />
          </a>
          <div className="bg-white p-4 rounded-md mt-2">
            <p className="text-sm text-gray-500">Description for Image {index + 1}</p>
          </div>
        </div>
      ))}

      {lightboxIsOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={closeLightbox}
          onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
        />
      )}
    </div>
  );
};

export default ImageGrid;
