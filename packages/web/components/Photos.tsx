"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Fancybox from "@/components/Fancybox";

export default function Photos() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    dragFree: true,
  });

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const photos = [
    "/images/gallery/photo-1.jpg",
    "/images/gallery/photo-2.jpg",
    "/images/gallery/photo-3.jpg",
    "/images/gallery/photo-4.jpg",
    "/images/gallery/photo-5.jpg",
    "/images/gallery/photo-6.jpg",
  ];

  return (
    <section className="photos-section">
      <div className="container">
        <div className="photos-header">
          <div className="photos-heading">
            <div className="section-label">Gallery</div>
            <h2 className="section-title">Photographs</h2>
          </div>

          <div className="photos-navigation">
            <button className="photos-button photos-prev" aria-label="Previous slide" onClick={scrollPrev}>
              ←
            </button>

            <button className="photos-button photos-next" aria-label="Next slide" onClick={scrollNext}>
              →
            </button>
          </div>
        </div>

        <Fancybox>
          <div className="photos-slider" ref={emblaRef}>
            <div className="photos-track">
              {photos.map((photo, index) => (
                <a key={index} href={photo} data-fancybox="gallery" data-caption="Irina Cherkashyna" className="photos-item">
                  <img src={photo} alt={`Irina Cherkashyna ${index + 1}`} className="photos-image"/>
                </a>
              ))}
            </div>
          </div>
        </Fancybox>
      </div>
    </section>
  );
}