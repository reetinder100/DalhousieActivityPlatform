import {
  Wrapper,
  Container,
  Title,
  MainSubtitle,
  Card,
  CardContent,
  CardTitle,
  BikeType,
  CardDescription,
  PriceTag,
  Rating,
  ExploreButton,
  CardImage,
} from "../styling/BikeRentalStyle";
import { bikeRentalData } from "../data/BikeRentalData";

const BikeRentalSection = ({
  title = "Rent a Bike in Dalhousie",
  subtitle = "Explore the hills with our premium bike rental service",
}) => {
  const isFeatureEnabled = false;

  const handleBook = (bikeName) => {
    console.log(`Booking ${bikeName}`);
  };

  return (
    <Wrapper>
      <Container>
        <Title>{title}</Title>
        <MainSubtitle>
          {isFeatureEnabled ? subtitle : "🔧 Service currently unavailable"}
        </MainSubtitle>

        {isFeatureEnabled &&
          bikeRentalData.map((bike) => (
            <Card
              key={bike.id}
              style={{ flexDirection: bike.reverse ? "row-reverse" : "row" }}
            >
              <CardContent>
                <CardTitle>{bike.name}</CardTitle>
                <BikeType>
                  {bike.type} • {bike.category}
                </BikeType>
                <CardDescription>{bike.description}</CardDescription>
                <PriceTag>{bike.pricePerDay} / day</PriceTag>
                <Rating>
                  ⭐ {bike.rating} ({bike.totalReviews} reviews)
                </Rating>
                <ExploreButton onClick={() => handleBook(bike.name)}>
                  Book Now
                </ExploreButton>
              </CardContent>
              <CardImage>{bike.imageContent}</CardImage>
            </Card>
          ))}
      </Container>
    </Wrapper>
  );
};

export default BikeRentalSection;
