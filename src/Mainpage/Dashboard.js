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

import {
  ThingstoDoShort,
  TaxiBooking,
  adventureActivities,
  alsolike,
} from "../data/DashboardData";

export const Dashboard = () => {
  const renderCards = (items) => (
    <DashboardStyle1>
      {items.map((item) => (
        <DashboardCard key={item.id}>
          <img src={item.image} alt={item.alt || item.title} />
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
        <div className="content-wrapper">
          <h2>Explore Popular Spots</h2>
          <p>
            From the lush meadows of Khajjiar to the panoramic views at Dainkund
            Peak – find the places everyone's talking about.
          </p>
          <button>Explore</button>
        </div>
        <div className="image-wrapper">
          <img src="/images/Dal-proj-img27.jpg" alt="Family in Dalhousie" />
        </div>
      </CardStyle4>
    </div>
  );
};
