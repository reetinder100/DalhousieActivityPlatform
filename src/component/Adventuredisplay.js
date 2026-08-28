// src/component/Adventuredisplay.js
import {
  Container,
  Header,
  HeaderTitle,
  HeaderSubtitle,
  Footer,
  FooterText,
  Card,
  ImageSection,
  ContentSection,
  TitleRow,
  TrailTitle,
  Badge,
  Description,
  DetailsGrid,
  DetailItem,
  ButtonGroup,
  CabButton,
  GuideButton,
  MoreInfoButton,
  ExpandedDetails,
} from "../styling/AdventuredisplayStyle";
import { useState } from "react";

// Helper to get category from trail data
const getCategory = (trail) => {
  if (trail.activityType) return trail.activityType;

  // Category detection based on fields
  if (trail.rapids || trail.riverLevel) return "River Rafting";
  if (trail.altitude || trail.peak || trail.elevationGain) return "Hiking";
  if (trail.facilities && trail.facilities.includes("tent")) return "Camping";
  if (trail.tandem || trail.takeoff) return "Paragliding";
  if (trail.ropeType || trail.height) return "Rope Activity";
  if (trail.bikeType || trail.trailDifficulty) return "Mountain Biking";

  const title = trail.title || "";
  if (title.toLowerCase().includes("rafting")) return "River Rafting";
  if (title.toLowerCase().includes("camping")) return "Camping";
  if (title.toLowerCase().includes("paragliding")) return "Paragliding";
  if (
    title.toLowerCase().includes("biking") ||
    title.toLowerCase().includes("cycle")
  )
    return "Mountain Biking";
  if (
    title.toLowerCase().includes("rope") ||
    title.toLowerCase().includes("climb")
  )
    return "Rope Activity";
  if (
    title.toLowerCase().includes("trek") ||
    title.toLowerCase().includes("trail") ||
    title.toLowerCase().includes("hike")
  )
    return "Hiking";

  return "Hiking";
};

export const DifficultyBadge = ({ difficulty }) => {
  return <Badge difficulty={difficulty}>{difficulty}</Badge>;
};

// ============= FLEXIBLE TRAIL CARD WITH DYNAMIC CONFIG =============
export const TrailCard = ({
  trail,
  fields = {
    title: "title",
    description: "description",
    imageContent: "imageContent",
    reverse: "reverse",
    length: "length",
    difficulty: "difficulty",
    duration: "duration",
    elevationGain: "elevationGain",
    bestSeason: "bestSeason",
    trailType: "trailType",
  },
  // NEW: Activity-specific configuration
  activityConfig = {
    // Default config for each category
    "River Rafting": {
      details: [
        { label: "🌊 Rapids", field: "rapids" },
        { label: "📏 Length", field: "length" },
        { label: "⏱️ Duration", field: "duration" },
        { label: "📅 Best Season", field: "bestSeason" },
      ],
      proTips: {
        Challenging:
          "⚠️ Advanced rapids ahead! Ensure you have prior rafting experience.",
        Moderate:
          "🦺 Always wear a life jacket and follow your guide's commands.",
        Beginner: "🛶 Perfect for beginners. Enjoy the gentle rapids!",
      },
    },
    Paragliding: {
      details: [
        { label: "🪂 Tandem", field: "tandem" },
        { label: "⛰️ Altitude", field: "altitude" },
        { label: "⏱️ Duration", field: "duration" },
        { label: "📅 Best Season", field: "bestSeason" },
      ],
      proTips: {
        Challenging:
          "🌤️ Check weather conditions thoroughly. High altitude flights require proper training.",
        Moderate:
          "🪂 Great for intermediate flyers. Enjoy the breathtaking views!",
        Beginner:
          "🪁 Perfect for first-timers. Fly with certified instructors.",
      },
    },
    Camping: {
      details: [
        { label: "⛺ Facilities", field: "facilities" },
        { label: "🏕️ Type", field: "trailType" },
        { label: "📅 Best Season", field: "bestSeason" },
        { label: "⏱️ Duration", field: "duration" },
      ],
      proTips: {
        Challenging: "🏕️ Prepare for extreme weather. Carry appropriate gear.",
        Moderate: "⛺ Pack light but carry essentials. Check weather forecast.",
        Beginner: "🌲 Great for family camping. Set up camp before sunset.",
      },
    },
    "Mountain Biking": {
      details: [
        { label: "🚵 Bike Type", field: "bikeType" },
        { label: "📏 Length", field: "length" },
        { label: "⏱️ Duration", field: "duration" },
        { label: "📅 Best Season", field: "bestSeason" },
      ],
      proTips: {
        Challenging:
          "🚵 Technical trails ahead! Ensure your bike is in top condition.",
        Moderate: "🚴 Intermediate trails. Wear helmet and carry repair tools.",
        Beginner: "🚲 Perfect for beginners. Start with easier trails.",
      },
    },
    "Rope Activity": {
      details: [
        { label: "🪢 Rope Type", field: "ropeType" },
        { label: "📏 Height", field: "height" },
        { label: "⏱️ Duration", field: "duration" },
        { label: "📅 Best Season", field: "bestSeason" },
      ],
      proTips: {
        Challenging:
          "🧗 Advanced climbing techniques required. Use proper safety equipment.",
        Moderate:
          "🪢 Intermediate challenge. Double-check all knots and harnesses.",
        Beginner: "🧗‍♂️ Great for beginners. Take it slow and enjoy the climb!",
      },
    },
    Hiking: {
      details: [
        { label: "📏 Length", field: "length" },
        { label: "⏱️ Duration", field: "duration" },
        { label: "⬆️ Elevation", field: "elevationGain" },
        { label: "📅 Best Season", field: "bestSeason" },
        { label: "🔄 Trail Type", field: "trailType" },
      ],
      proTips: {
        Challenging:
          "⛰️ Start early and carry sufficient supplies. For experienced hikers.",
        Moderate: "🥾 Good fitness level recommended. Carry water and snacks.",
        Beginner: "👨‍👩‍👧‍👦 Suitable for beginners. Enjoy the trail and take photos!",
      },
    },
  },
  // NEW: Custom detail renderer (optional)
  renderDetails = null,
  // NEW: Custom pro tip generator (optional)
  getProTip = null,
  onBookCab,
  onBookGuide,
  bookingButtonText = {
    cab: "🚗 Book a Cab",
    guide: "🗺️ Hire a Guide",
  },
}) => {
  const [showDetails, setShowDetails] = useState(false);

  const getField = (fieldName) => {
    if (fields && fields[fieldName]) {
      return trail[fields[fieldName]] !== undefined
        ? trail[fields[fieldName]]
        : trail[fieldName];
    }
    return trail[fieldName];
  };

  const handleBooking = (type) => {
    if (type === "cab" && onBookCab) {
      onBookCab(trail);
    } else if (type === "guide" && onBookGuide) {
      onBookGuide(trail);
    } else {
      alert(
        `📞 Booking request for "${getField("title")}"\n\nService: ${type === "cab" ? "🚗 Taxi / Cab Booking" : "🗺️ Guide / Trekking Expert"}\n\nA representative will contact you shortly.`,
      );
    }
  };

  const category = getCategory(trail);
  const difficulty = getField("difficulty") || "Beginner";

  // Get configuration for this category
  const config = activityConfig[category] || activityConfig["Hiking"];

  // Default pro tip function
  const defaultGetProTip = (diff, cat) => {
    const tips = config?.proTips || {};
    // Find matching difficulty level
    for (const [key, tip] of Object.entries(tips)) {
      if (diff?.includes(key)) {
        return tip;
      }
    }
    return (
      tips["Beginner"] || "🥾 Enjoy your adventure! Stay safe and have fun."
    );
  };

  const proTipFunction = getProTip || defaultGetProTip;

  // Render details using config
  const renderDetailsGrid = () => {
    // If custom renderer is provided, use it
    if (renderDetails) {
      return renderDetails(trail, category, getField);
    }

    // Use the config-based rendering
    const detailConfig = config?.details || [];
    return detailConfig.map((detail, index) => (
      <DetailItem key={index}>
        <span>{detail.label}:</span>{" "}
        <span>{getField(detail.field) || "N/A"}</span>
      </DetailItem>
    ));
  };

  return (
    <Card reverse={getField("reverse")}>
      <ImageSection />

      <ContentSection>
        <TitleRow>
          <TrailTitle>{getField("title")}</TrailTitle>
          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <span style={{ fontSize: "0.8rem", color: "#666" }}>
              {category}
            </span>
            <DifficultyBadge difficulty={difficulty} />
          </div>
        </TitleRow>

        <Description>{getField("description")}</Description>

        <DetailsGrid>{renderDetailsGrid()}</DetailsGrid>

        <ButtonGroup>
          <CabButton onClick={() => handleBooking("cab")}>
            {bookingButtonText.cab}
          </CabButton>
          <GuideButton onClick={() => handleBooking("guide")}>
            {bookingButtonText.guide}
          </GuideButton>
          <MoreInfoButton onClick={() => setShowDetails(!showDetails)}>
            {showDetails ? "📖 Hide Details" : "📖 More Info"}
          </MoreInfoButton>
        </ButtonGroup>

        {showDetails && (
          <ExpandedDetails>
            <p>
              <strong>📍 Activity Highlights:</strong> {getField("description")}
            </p>
            <p>
              <strong>📂 Category:</strong> {category}
            </p>
            <p>
              <strong>💡 Pro Tip:</strong>{" "}
              {proTipFunction(difficulty, category)}
            </p>
          </ExpandedDetails>
        )}
      </ContentSection>
    </Card>
  );
};

// ============= MAIN COMPONENT =============
const TrailsGuide = ({
  trails = [],
  title = "🏔️ Adventure Activities",
  subtitle = "Explore the best adventures in the mountains",
  fields,
  // NEW: Allow passing custom activity config
  activityConfig,
  // NEW: Allow passing custom renderer
  renderDetails,
  onBookCab,
  onBookGuide,
  getProTip,
  showFooter = true,
  footerText = "🌿 Plan your adventure with local transport and expert guides",
  footerYear = new Date().getFullYear(),
  emptyMessage = "No adventures available at the moment.",
  bookingButtonText,
}) => {
  if (!trails || trails.length === 0) {
    return (
      <Container>
        <Header>
          <HeaderTitle>{title}</HeaderTitle>
          <HeaderSubtitle>{emptyMessage}</HeaderSubtitle>
        </Header>
      </Container>
    );
  }

  return (
    <Container>
      <Header>
        <HeaderTitle>{title}</HeaderTitle>
        <HeaderSubtitle>
          {subtitle} · {trails.length}{" "}
          {trails.length === 1 ? "activity" : "activities"} available
        </HeaderSubtitle>
      </Header>

      <div>
        {trails.map((trail) => (
          <TrailCard
            key={trail.id}
            trail={trail}
            fields={fields}
            activityConfig={activityConfig} // Pass down the config
            renderDetails={renderDetails} // Pass down custom renderer
            onBookCab={onBookCab}
            onBookGuide={onBookGuide}
            getProTip={getProTip}
            bookingButtonText={bookingButtonText}
          />
        ))}
      </div>

      {showFooter && (
        <Footer>
          <FooterText>{footerText}</FooterText>
          <p style={{ margin: 0 }}>© {footerYear} Adventure Guide</p>
        </Footer>
      )}
    </Container>
  );
};

export default TrailsGuide;
