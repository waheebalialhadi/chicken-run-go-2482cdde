import screenshot1 from "@/assets/screenshot1.png";
import screenshot2 from "@/assets/screenshot2.png";
import screenshot3 from "@/assets/screenshot3.png";
import screenshot4 from "@/assets/screenshot4.png";

const ScreenshotsCarousel = () => {
  const screenshots = [
    { src: screenshot1, alt: "Play Chicken Game" },
    { src: screenshot2, alt: "Hop Forward, Collect More" },
    { src: screenshot3, alt: "Avoid Cars, Stay Alive" },
    { src: screenshot4, alt: "Hit Insane x1000 Multiplier" },
  ];

  return (
    <section className="py-6 border-b bg-background">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {screenshots.map((screenshot, index) => (
            <div
              key={index}
              className="flex-shrink-0 snap-start"
            >
              <img
                src={screenshot.src}
                alt={screenshot.alt}
                className="h-[280px] w-auto rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScreenshotsCarousel;
