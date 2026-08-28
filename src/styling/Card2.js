import styled from "styled-components";
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export const CarouselWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  position: relative;

  /* Tablet responsive */
  @media (max-width: 1024px) {
    max-width: 100%;
    padding: 15px;
    gap: 8px;
  }

  /* Mobile responsive */
  @media (max-width: 768px) {
    padding: 10px;
    gap: 5px;
  }

  @media (max-width: 480px) {
    padding: 8px;
    gap: 4px;
  }
`;

export const CarouselContainer = styled.div`
  overflow: hidden;
  width: 100%;
  padding: 40px 0;

  /* Tablet responsive */
  @media (max-width: 1024px) {
    padding: 30px 0;
  }

  /* Mobile responsive */
  @media (max-width: 768px) {
    padding: 20px 0;
  }

  @media (max-width: 480px) {
    padding: 15px 0;
  }
`;

export const CardTrack = styled.div`
  display: flex;
  gap: 20px;
  transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  will-change: transform;
  align-items: center;

  /* Tablet responsive */
  @media (max-width: 1024px) {
    gap: 15px;
  }

  /* Mobile responsive */
  @media (max-width: 768px) {
    gap: 12px;
  }

  @media (max-width: 480px) {
    gap: 8px;
  }
`;

export const CardItem = styled.div`
  flex: 0 0 200px;
  height: 250px;
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

  /* Tablet responsive */
  @media (max-width: 1024px) {
    flex: 0 0 170px;
    height: 220px;
    padding: 16px;
    border-radius: 10px;

    &.active {
      transform: scale(1.15);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.25);
    }

    &::after {
      border-radius: 0 0 10px 10px;
    }
  }

  /* Mobile responsive */
  @media (max-width: 768px) {
    flex: 0 0 140px;
    height: 180px;
    padding: 14px;
    border-radius: 8px;

    &.active {
      transform: scale(1.1);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
    }

    &::after {
      border-radius: 0 0 8px 8px;
    }
  }

  @media (max-width: 480px) {
    flex: 0 0 100px;
    height: 140px;
    padding: 10px;
    border-radius: 6px;

    &.active {
      transform: scale(1.05);
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    }

    &::after {
      border-radius: 0 0 6px 6px;
      height: 50%;
    }
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

  /* Tablet responsive */
  @media (max-width: 1024px) {
    font-size: 16px;
  }

  /* Mobile responsive */
  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 11px;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
  }
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

  /* Tablet responsive */
  @media (max-width: 1024px) {
    font-size: 26px;
    padding: 8px 16px;
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Mobile responsive */
  @media (max-width: 768px) {
    font-size: 22px;
    padding: 6px 12px;
    width: 38px;
    height: 38px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    padding: 4px 8px;
    width: 30px;
    height: 30px;
  }
`;

export const SectionTitle = styled.h2`
  text-align: center;
  font-size: 32px;
  margin-bottom: 30px;
  color: #333;

  /* Tablet responsive */
  @media (max-width: 1024px) {
    font-size: 28px;
    margin-bottom: 25px;
  }

  /* Mobile responsive */
  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
    margin-bottom: 15px;
  }
`;

export const CardContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;

  /* Tablet responsive */
  @media (max-width: 1024px) {
    max-width: 100%;
    padding: 30px 15px;
  }

  /* Mobile responsive */
  @media (max-width: 768px) {
    padding: 20px 10px;
  }

  @media (max-width: 480px) {
    padding: 15px 8px;
  }
`;

export const CardStyle6 = ({ cards = [] }) => {
  const [translateX, setTranslateX] = useState(0);
  const containerRef = useRef(null);
  const navigate = useNavigate();

  const getCardWidth = () => {
    if (typeof window === "undefined") return 240;
    const width = window.innerWidth;
    if (width <= 480) return 130;
    if (width <= 768) return 170;
    if (width <= 1024) return 200;
    return 240;
  };

  const getGap = () => {
    if (typeof window === "undefined") return 20;
    const width = window.innerWidth;
    if (width <= 480) return 8;
    if (width <= 768) return 12;
    if (width <= 1024) return 15;
    return 20;
  };

  const totalCards = cards.length;
  const REPEAT_COUNT = 50;
  const infiniteCards = Array(REPEAT_COUNT).fill(cards).flat();
  const infiniteTotal = infiniteCards.length;
  const MIDDLE = Math.floor(infiniteTotal / 2);
  const startIndex = MIDDLE - (MIDDLE % totalCards);
  const [offsetIndex, setOffsetIndex] = useState(startIndex);

  const updateCarousel = useCallback((index) => {
    if (!containerRef.current) return;
    const containerWidth = containerRef.current.clientWidth;
    const currentCardWidth = getCardWidth();
    const currentGap = getGap();
    const currentScrollAmount = currentCardWidth + currentGap;
    const cardCenter = index * currentScrollAmount + currentCardWidth / 2;
    const containerCenter = containerWidth / 2;

    setTranslateX(containerCenter - cardCenter);
  }, []); // Empty dependency array

  const handlePrev = () => {
    setOffsetIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    setOffsetIndex((prev) => prev + 1);
  };

  const handleCardClick = (index) => {
    const card = infiniteCards[index];
    if (!card) return;

    const title = card.title;
    const titleToSlug = {
      Hiking: "Hiking-Trails",
      Camping: "Camping-Sites",
      Paragliding: "Paragliding",
      "River Rafting": "River-Rafting",
      "Mountain Biking": "Mountain-Biking",
      "Rope adventure activity": "Rope-Activity",
    };

    const slug = titleToSlug[title];
    if (slug) {
      navigate(`/activities/${slug}`);
    }
  };

  // Update carousel when offsetIndex changes
  useEffect(() => {
    updateCarousel(offsetIndex);
  }, [offsetIndex, updateCarousel]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      updateCarousel(offsetIndex);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [offsetIndex, updateCarousel]);

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
