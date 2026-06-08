"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

export default function Videos() {
  const videos = [
    {
      id: "m13ZqMG1uL4",
      title: "Performance 1",
    },
    {
      id: "c_8a0uf771o",
      title: "Performance 2",
    },
    {
      id: "xeZs4zv2c_A",
      title: "Performance 3",
    },
    {
      id: "cxNEAlWuyC8",
      title: "Performance 4",
    },
    {
      id: "Q0YuX-feyds",
      title: "Performance 5",
    },
    {
      id: "gZJ1UyuayJA",
      title: "Performance 6",
    },
  ];

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

  return (
    <section className="videos-section">
      <div className="container">
        <div className="videos-header">
          <div className="videos-heading">
            <div className="section-label">Media</div>
            <h2 className="section-title">Videos</h2>
          </div>

          <div className="videos-navigation">
            <button className="videos-button videos-prev" aria-label="Previous video" onClick={scrollPrev}>
              ←
            </button>

            <button className="videos-button videos-next" aria-label="Next video" onClick={scrollNext}>
              →
            </button>
          </div>
        </div>

        <div className="videos-slider" ref={emblaRef}>
          <div className="videos-track">
            {videos.map((video) => (
              <a key={video.id} href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noopener noreferrer" className="video-card">
                <div className="video-thumbnail">
                  <img src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`} alt={video.title} />

                  <div className="video-play">
                    ▶
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}