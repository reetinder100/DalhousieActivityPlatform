import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  Wrapper,
  Container,
  Title,
  MainCard,
  MainImage,
  MainContent,
  MainTitle,
  MainDescription,
  ExploreButton,
  CardsContainer,
  ScrollWrapper,
  CardRow,
  ScrollButton,
  SmallCard,
  SmallCardImage,
  SmallCardTitle,
  SmallCardDescription,
} from "../styling/BeforeChildrenCardStyle";

const BeforeChildrenContentData = ({
  data = [],
  title = "Activities",
  subtitle = "Discover amazing experiences",
  buttonText = "Explore",
  onExploreClick,
  showButton = true, // New prop: true by default
}) => {
  const [selectedCard, setSelectedCard] = useState(0);
  const [showScrollButtons, setShowScrollButtons] = useState(false);
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (data && data.length > 5) {
      setShowScrollButtons(true);
    } else {
      setShowScrollButtons(false);
    }
  }, [data]);

  const handleCardClick = (index) => {
    setSelectedCard(index);
  };

  const handleExplore = (title) => {
    if (onExploreClick) {
      onExploreClick(title);
      return;
    }

    const titleToSlug = {
      "Hiking Trails": "Hiking-Trails",
      "Camping Sites": "Campin-Sites",
      Paragliding: "Paragliding",
      "Rope Activity": "Rope-Activity",
      "River Rafting": "River-Rafting",
      "Mountain Biking": "Mountain-Biking",
    };

    const slug =
      titleToSlug[title] ||
      title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");

    if (slug) {
      navigate(`/activities/${slug}`);
    }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 220;
      const newScrollLeft =
        scrollRef.current.scrollLeft +
        (direction === "left" ? -scrollAmount : scrollAmount);
      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  const renderCards = (data, options = {}) => {
    const {
      type = "small",
      onCardClick,
      selectedIndex,
      onExplore,
      className = "",
    } = options;
    if (type === "main") {
      const activity = data[selectedIndex || 0];
      return (
        <MainCard className={className}>
          <MainImage>
            <img
              src={activity.image}
              alt={activity.title || "Activity image"}
            />
          </MainImage>
          <MainContent>
            <MainTitle>{activity.title}</MainTitle>
            <MainDescription>
              {activity.fullDescription || activity.description}
            </MainDescription>
            {/* Only show button if showButton is true */}
            {showButton && (
              <ExploreButton onClick={() => onExplore(activity.title)}>
                {buttonText} {activity.title}
              </ExploreButton>
            )}
          </MainContent>
        </MainCard>
      );
    }

    return data.map((card, index) => (
      <SmallCard
        key={card.id}
        className={index === selectedIndex ? "active" : ""}
        onClick={() => onCardClick && onCardClick(index)}
      >
        <SmallCardImage>{card.imageContent}</SmallCardImage>
        <SmallCardTitle>{card.title}</SmallCardTitle>
        <SmallCardDescription>
          {card.description || card.shortDescription}
        </SmallCardDescription>
      </SmallCard>
    ));
  };

  return (
    <Wrapper>
      <Container>
        <Title>{title}</Title>

        {renderCards(data, {
          type: "main",
          selectedIndex: selectedCard,
          onExplore: handleExplore,
          className: "main-card",
        })}

        <CardsContainer>
          <ScrollWrapper>
            {showScrollButtons && (
              <ScrollButton
                onClick={() => scroll("left")}
                aria-label="Scroll left"
              >
                ‹
              </ScrollButton>
            )}

            <CardRow ref={scrollRef}>
              {renderCards(data, {
                type: "small",
                onCardClick: handleCardClick,
                selectedIndex: selectedCard,
              })}
            </CardRow>

            {showScrollButtons && (
              <ScrollButton
                onClick={() => scroll("right")}
                aria-label="Scroll right"
              >
                ›
              </ScrollButton>
            )}
          </ScrollWrapper>
        </CardsContainer>
      </Container>
    </Wrapper>
  );
};

export default BeforeChildrenContentData;
