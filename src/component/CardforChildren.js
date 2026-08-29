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
  showImage = true, // New prop for image visibility
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
      {showImage && image && (
        <CardImage>
          <img src={image} alt={title} />
        </CardImage>
      )}
    </Card>
  );
};

const ContentData = ({
  Data = [],
  title = "",
  subtitle = "",
  showExploreButton = true,
  showImages = true, // Feature flag for images (default: true)
}) => {
  const handleExplore = (activity) => {
    // Replace with YOUR Google Form link
    const googleFormUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLSebcB7j3aadee7FyFU84AdJd1nFXp_UAJY5PfH7YpuUodM6VQ/viewform?usp=publish-editor";

    window.open(googleFormUrl, "_blank");
  };

  // More flexible render function with optional parameters
  const renderCards = (
    data = Data,
    onExplore = handleExplore,
    showExploreButtons = showExploreButton,
    showImage = showImages, // Pass the image flag
  ) => {
    if (!data || data.length === 0) {
      return null;
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
        showImage={showImage}
      />
    ));
  };

  return (
    <Wrapper>
      <Container>
        <Title>{title}</Title>
        <MainSubtitle>{subtitle}</MainSubtitle>

        {renderCards()}
      </Container>
    </Wrapper>
  );
};

export default ContentData;
