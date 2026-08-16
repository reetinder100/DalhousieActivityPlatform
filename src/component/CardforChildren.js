import React from "react";
import styled from "styled-components";
import { CulturalExperiences } from "../data/CulturealExperiencesData";
import {
  Wrapper,
  Container,
  Title,
  MainSubtitle,
  Card,
  CardContent,
  CardTitle,
  CardDescription,
  ExploreButton,
  CardImage,
} from "../styling/CardforChildrenStyle";

const CardItem = ({
  title,
  description,
  image,
  reverse = false,
  onExplore,
  showExploreButton = true,
}) => {
  return (
    <Card style={{ flexDirection: reverse ? "row-reverse" : "row" }}>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        {showExploreButton && (
          <ExploreButton onClick={() => onExplore(title)}>
            Book a Taxi for {title}
          </ExploreButton>
        )}
      </CardContent>
      <CardImage>
        <img src={image} alt={title} />
      </CardImage>
    </Card>
  );
};

const ContentData = ({
  Data = [],
  title = "",
  subtitle = "",
  showExploreButton = true,
}) => {
  const handleExplore = (activity) => {
    alert(`Exploring ${activity}!`);
  };

  // More flexible render function with optional parameters
  const renderCards = (
    data = Data,
    onExplore = handleExplore,
    showExploreButtons = showExploreButton,
  ) => {
    if (!data || data.length === 0) {
      return <p>No activities available</p>;
    }

    return data.map((card) => (
      <CardItem
        key={card.id}
        title={card.title}
        description={card.description}
        image={card.image}
        reverse={card.reverse}
        onExplore={onExplore}
        showExploreButton={showExploreButtons}
      />
    ));
  };

  return (
    <Wrapper>
      <Container>
        <Title>{title}</Title>
        <MainSubtitle>{subtitle}</MainSubtitle>

        {renderCards()}

        {/* You could also render filtered cards like this:
        {renderCards(cardData.filter(card => card.id <= 3))}
        */}
      </Container>
    </Wrapper>
  );
};

export default ContentData;
