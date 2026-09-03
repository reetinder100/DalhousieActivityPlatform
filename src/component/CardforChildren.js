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
import PriceCalculateModal from "../Modal/PriceCalculateModal";
import { useState } from "react";

const CardItem = ({
  title,
  description,
  image,
  locationName = "",
  reverse = false,
  onExplore,
  showExploreButton = true,
  showImage = true,
}) => {
  // Extract location name from title if not provided
  const locName = locationName || title.split(" - ")[0].trim();

  return (
    <Card style={{ flexDirection: reverse ? "row-reverse" : "row" }}>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        {showExploreButton && (
          <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
            <ExploreButton
              onClick={() => {
                // Direct booking - opens Google Form immediately
                const googleFormUrl =
                  "https://docs.google.com/forms/d/e/1FAIpQLSebcB7j3aadee7FyFU84AdJd1nFXp_UAJY5PfH7YpuUodM6VQ/viewform?usp=publish-editor";
                window.open(googleFormUrl, "_blank");
              }}
            >
              Book a Taxi for {title}
            </ExploreButton>
            <ExploreButton
              onClick={() => onExplore(title, locName)}
              style={{
                background: "#6c757d",
                padding: "10px 20px",
              }}
            >
              Estimate Price
            </ExploreButton>
          </div>
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
  showImages = true,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  const handleExplore = (activityTitle, locationName) => {
    console.log("📝 Activity Title:", activityTitle);
    console.log("📍 Location Name:", locationName);

    setSelectedTitle(activityTitle);
    setSelectedLocation(locationName);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    console.log("🔴 Closing modal");
    setIsModalOpen(false);
    setSelectedTitle("");
    setSelectedLocation("");
  };

  const renderCards = (
    data = Data,
    onExplore = handleExplore,
    showExploreButtons = showExploreButton,
    showImage = showImages,
  ) => {
    if (!data || data.length === 0) {
      return null;
    }

    return data.map((card) => {
      const locName = card.locationName || card.title.split(" - ")[0].trim();

      return (
        <CardItem
          key={card.id}
          title={card.title}
          locationName={locName}
          description={card.description}
          image={card.image}
          reverse={card.reverse}
          onExplore={onExplore}
          showExploreButton={showExploreButtons}
          showImage={showImage}
        />
      );
    });
  };

  return (
    <>
      <Wrapper>
        <Container>
          <Title>{title}</Title>
          <MainSubtitle>{subtitle}</MainSubtitle>
          {renderCards()}
        </Container>
      </Wrapper>

      <PriceCalculateModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={`Price Estimate for ${selectedTitle}`}
        selectedActivity={selectedLocation}
        confirmText="Close"
        cancelText="Close"
        showFooter={true}
        baseLocation="Dalhousie Town"
        passengers={4}
      />
    </>
  );
};

export default ContentData;
