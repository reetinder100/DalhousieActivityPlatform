import styled from "styled-components";
import React, { useState, useEffect, useRef } from "react";

export const CarouselWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  position: relative;
`;

export const CarouselContainer = styled.div`
  overflow: hidden;
  width: 100%;
  padding: 40px 0;
`;

export const CardTrack = styled.div`
  display: flex;
  gap: 20px;
  transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  will-change: transform;
  align-items: center;
`;

export const CardItem = styled.div`
  flex: 0 0 200px;
  height: 250px; /* Increased height for images */
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 20px;
  transition: all 0.4s ease;

  transform: scale(0.8);
  cursor: pointer;
  user-select: none;
  position: relative;
  overflow: hidden;
  background-size: cover;
  background-position: center;

  /* Active (center) state */
  &.active {
    opacity: 1;
    transform: scale(1.2);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    z-index: 10;
  }

  &:hover {
    filter: brightness(1.1);
  }

  /* Overlay for better text readability */
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 60%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
    border-radius: 0 0 12px 12px;
  }
`;

export const CardTitle = styled.h3`
  color: white;
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  position: relative;
  z-index: 1;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  text-align: center;
`;

export const ArrowButton = styled.button`
  background: #2c3e50;
  color: white;
  border: none;
  font-size: 30px;
  padding: 10px 20px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s ease;
  z-index: 20;
  flex-shrink: 0;

  &:hover {
    background: #34495e;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
    transform: none;
  }
`;

export const SectionTitle = styled.h2`
  text-align: center;
  font-size: 32px;
  margin-bottom: 30px;
  color: #333;
`;

export const CardContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const CardStyle6 = ({ cards = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateX, setTranslateX] = useState(0);

  const containerRef = useRef(null);

  const cardWidth = 240;
  const gap = 20;
  const scrollAmount = cardWidth + gap;
  const totalCards = cards.length;

  // Repeat the array enough times to allow infinite scrolling
  const REPEAT_COUNT = 50;
  const infiniteCards = Array(REPEAT_COUNT).fill(cards).flat();
  const infiniteTotal = infiniteCards.length;

  // Start from the middle of the infinite array
  const MIDDLE = Math.floor(infiniteTotal / 2);
  // Adjust MIDDLE to align with the start of a card set
  const startIndex = MIDDLE - (MIDDLE % totalCards);
  const [offsetIndex, setOffsetIndex] = useState(startIndex);

  const updateCarousel = (index) => {
    const containerWidth = containerRef.current.clientWidth;
    const cardCenter = index * scrollAmount + cardWidth / 2;
    const containerCenter = containerWidth / 2;

    setTranslateX(containerCenter - cardCenter);
  };

  const handlePrev = () => {
    setOffsetIndex((prev) => {
      const newIndex = prev - 1;

      return newIndex;
    });
  };

  const handleNext = () => {
    setOffsetIndex((prev) => {
      const newIndex = prev + 1;

      return newIndex;
    });
  };

  const handleCardClick = (index) => {};

  useEffect(() => {
    updateCarousel(offsetIndex);
  }, [offsetIndex]);

  if (!cards.length) return null;

  return (
    <CarouselWrapper>
      <ArrowButton onClick={handlePrev}>‹</ArrowButton>

      <CarouselContainer ref={containerRef}>
        <CardTrack style={{ transform: `translateX(${translateX}px)` }}>
          {infiniteCards.map((card, index) => {
            const isActive = index === offsetIndex;

            return (
              <CardItem
                key={index}
                className={isActive ? "active" : ""}
                onClick={() => handleCardClick(index)}
                style={{
                  backgroundImage: `url(${card.image})`,
                  backgroundColor: "#3498db",
                }}
              >
                <CardTitle>{card.title}</CardTitle>
              </CardItem>
            );
          })}
        </CardTrack>
      </CarouselContainer>

      <ArrowButton onClick={handleNext}>›</ArrowButton>
    </CarouselWrapper>
  );
};
