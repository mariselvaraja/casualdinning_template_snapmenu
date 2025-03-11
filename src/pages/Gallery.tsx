import React from 'react';
import GalleryComponent from '../components/Gallery';
import { useContent } from '../context/ContentContext';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

const Gallery: React.FC = () => {
  const { siteContent } = useContent();

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-black text-white">
        <div className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">{siteContent.gallery.section.title}</h2>
              <p className="text-xl text-gray-400">{siteContent.gallery.section.subtitle}</p>
            </div>
            <GalleryComponent images={siteContent.gallery.images} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
