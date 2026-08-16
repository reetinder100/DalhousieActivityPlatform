import { DashboardStyle1 } from "../styling/DashboardStyle";
import {
  HeroContent,
  HeroSection,
  DescriptionText,
  SectionTitle,
  CardContainer,
  Container2,
  Title2,
} from "../styling/DashboardStyle";
import { CardStyle6 } from "../styling/Card2";
import { Card3 } from "../styling/Card3";

import { DashboardCard } from "../styling/Card";
import { CardStyle4 } from "../styling/Card";
import { useNavigate } from "react-router-dom";

import {
  ThingstoDoShort,
  TaxiBooking,
  adventureActivities,
  alsolike,
} from "../data/DashboardData";

export const Dashboard = () => {
  const navigate = useNavigate();

  const handleThingstoDo = (title, id) => {
    const titleToSlug = {
      "immerse yourself in culture": "immerse-yourself-in-culture",
      "Chase your next adventure": "Chase-your-next-adventure",
      "Devotional Delights": "Devotional-Delights",
      "Book a taxi": "Book-a-taxi",
      "Book a rental": "Book-a-rental",
    };

    const slug = titleToSlug[title];

    if (slug) {
      navigate(`/dashboard/${slug}`);
    }
  };

  const explorePopularSpotHandler = () => {
    navigate(`/dashboard/popular-spots`);
  };

  const renderCards = (items) => (
    <DashboardStyle1>
      {items.map((item) => (
        <DashboardCard key={item.id}>
          <img
            src={item.image}
            alt={item.alt || item.title}
            onClick={() => handleThingstoDo(item.title, item.id)}
          />
          <h3>{item.title}</h3>
        </DashboardCard>
      ))}
    </DashboardStyle1>
  );

  return (
    <div>
      <HeroSection>
        <HeroContent>
          <h1>Welcome to Dalhousie</h1>
          <p>Discover the Himalayan charm</p>
        </HeroContent>
      </HeroSection>

      <CardContainer>
        <SectionTitle>Things To Do</SectionTitle>
        <DashboardStyle1>{renderCards(ThingstoDoShort)}</DashboardStyle1>
      </CardContainer>

      <DescriptionText></DescriptionText>

      <CardContainer>
        <SectionTitle>Planning to travel in town</SectionTitle>
        <DashboardStyle1>{renderCards(TaxiBooking)}</DashboardStyle1>
      </CardContainer>

      <Card3 />

      <Container2>
        <Title2>
          Activities to get
          <br /> you pumped
        </Title2>
        <CardStyle6 cards={adventureActivities} />
      </Container2>

      <CardStyle4>
        <div className="content-wrapper2">
          <h2>Explore Popular Spots</h2>
          <p>
            From the lush meadows of Khajjiar to the panoramic views at Dainkund
            Peak – find the places everyone's talking about.
          </p>
          <button onClick={explorePopularSpotHandler}>Explore</button>
        </div>
        <div className="image-wrapper2">
          <img src="/images/Dal-proj-img27.jpg" alt="Family in Dalhousie" />
        </div>
      </CardStyle4>
    </div>
  );
};
