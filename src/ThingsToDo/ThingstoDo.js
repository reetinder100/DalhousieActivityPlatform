import {
  HeroContent,
  HeroSection,
  HeroSection2,
} from "../styling/DashboardStyle";

import { useClickOutside } from "../Hooks/Clickoutside";

import { useState, useEffect, useRef } from "react";

import { useNavigate } from "react-router-dom";

import {
  outdoorActivities,
  culturalExperiences,
  foodAndDining,
  natureAndWildlife,
  shopping,
  sportsAndRecreation,
  allActivities,
  exploreItems,
  faqs,
  options,
} from "../data/thingstoDoData";

import {
  DashboardCard,
  Cardstyle2,
  CardStyle3,
  CardStyle4,
  CardStyle5,
  FAQWrapper,
  SectionTitle2,
  CardContainer,
} from "../styling/Card";

export const ThingsToDo = () => {
  const navigate = useNavigate();
  const [CardStyle5Layout, setCardStyle5Layout] = useState("default");
  const [ButtonText, setButtonText] = useState("Explore History and Arts");

  const [InnerButtonText1, setInnerButtonText1] = useState("");
  const [InnerButtonText2, setInnerButtonText2] = useState("");
  const [InnerButtonText3, setInnerButtonText3] = useState("");
  const [ImageUrl, setImageUrl] = useState("/images/Dal-proj-img12.jpg");

  const [activeIndex, setActiveIndex] = useState(null);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (ButtonText === "Explore History and Arts") {
      setCardStyle5Layout("default");
      setInnerButtonText1("Explore about Churches");
      setInnerButtonText2("Explore about Temples");
      setInnerButtonText3("History of Dalhousie");
      setImageUrl("/images/Dal-proj-img12.jpg");
    } else if (ButtonText === "Experience local traditions") {
      setCardStyle5Layout("alternate1");
      setInnerButtonText1("Gadi Culture");
      setInnerButtonText2("Chambyali culture");
      setInnerButtonText3("Famous Local Food items");
      setImageUrl("/images/Dal-proj-img13.jpg");
    } else if (ButtonText === "Explore nature") {
      setCardStyle5Layout("alternate2");
      setInnerButtonText1("Waterfalls");
      setInnerButtonText2("Flora and Fauna");
      setInnerButtonText3("Sanctuary areas");
      setImageUrl("/images/Dal-proj-img15.jpg");
    }
  }, [ButtonText]);

  const dropdownRef = useRef(null);
  useClickOutside(dropdownRef, () => {
    if (isOpen) setIsOpen(false);
  });

  const getLayout = () => {
    switch (CardStyle5Layout) {
      case "alternate1":
        return `
          "position6 position5 position7 positionA"
          "position3 position2 position4 positionB"
          "position9 position8 position1 positionC"
          "position13 position12 position10 positionD"
          "position11 position14 position15 positionF"
        `;
      case "alternate2":
        return `
          "position4 positionB position2 positionA"
          "position5 position8 position6 position3"
          "position7 position1 position9 positionC"
          "position13 position10 position12 positionD"
          "position11 position14 position15 positionF"
        `;
      case "alternate3":
        return `
          "position4 position8 position3 positionA"
          "position1 position5 position6 positionB"
          "position7 position2 position9 positionC"
          "position13 position10 position12 positionD"
          "position11 position14 position15 positionF"
        `;
      case "default":
        return `
          "position7 position4 position9 positionA"
          "position5 position6 positionB position2"
          "position1 position8 positionD position10"
          "position13 position3 position12 positionE"
           "position11 position14 position15 positionF"
        `;
    }
  };

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleInnerButtonClick = (buttonText) => {
    const buttonToSlug = {
      "Explore about Churches": "Churches",
      "Explore about Temples": "Temples",
      "History of Dalhousie": "History",
      "Gadi Culture": "Gadi-Culture",
      "Chambyali culture": "Chambyali-Culture",
      "Famous Local Food items": "Local-Food",
      Waterfalls: "Waterfalls",
      "Flora and Fauna": "Flora-Fauna",
      "Sanctuary areas": "Sanctuary-Areas",
    };

    const slug = buttonToSlug[buttonText];

    if (slug) {
      navigate(`/things-to-do/${slug}`);
    } else {
      console.warn(`No slug found for button text: "${buttonText}"`);
    }
  };

  const handleCategoryClick = (title, id) => {
    const titleToSlug = {
      "Outdoor Adventures": "Outdoor-Adventure",
      "Cultural Experiences": "Cultural-Experiences",
      "Food & Dining": "Food-Dining",
      "Nature and Wildlife": "Nature-Wildlife",
      Shopping: "Shopping",
      "Sports and Recreation": "Sports-Recreation",
    };

    const slug = titleToSlug[title];

    if (slug) {
      navigate(`/activities/${slug}`);
    }
  };

  const handleInspireExplore = (title) => {
    const titletoSlug = {
      "Hiking trails": "Hiking-trails",
      "Picnic Spots": "Picnic-Spots", // Fixed typo
      "Mountain Biking": "Mountain-Biking",
      "Offbeat places near Dalhousie": "Offbeat-places",
    };
    const slug = titletoSlug[title];
    if (slug) {
      navigate(`/things-to-do/${slug}`);
    }
  };

  const handleFamilyexplore = () => {
    navigate("/things-to-do/Family-FriendlyPlaces-Explore");
  };

  /*const handleBackToCategories = () => {
    setSelectedCategory(null);
  };*/

  const renderCards = (items) => (
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
      {items.map((item) => (
        <DashboardCard key={item.id}>
          <img src={item.image} alt={item.alt || item.title} />
          <h3>{item.title}</h3>
          <p>{item.description || "Explore this amazing activity"}</p>
        </DashboardCard>
      ))}
    </div>
  );

  return (
    <div>
      <HeroSection2>...</HeroSection2>

      {/* Choose Your Activity Section */}
      <CardContainer>
        <SectionTitle2>Choose Your Activity</SectionTitle2>
        <Cardstyle2>
          {allActivities.map((item) => (
            <div key={item.id}>
              <img
                src={item.image}
                alt={item.alt}
                onClick={(e) => {
                  e.stopPropagation();
                  handleCategoryClick(item.title, item.id);
                }}
              />
              <h3>{item.title}</h3>
            </div>
          ))}
        </Cardstyle2>
      </CardContainer>

      {/* Family Section */}
      <CardStyle4>
        <div className="content-wrapper">
          <h2>For Family</h2>
          <p>
            Don't think twice about it. Dalhousie is the ultimate place to be
            for families.
          </p>
          <button onClick={handleFamilyexplore}>Explore</button>
        </div>
        <div className="image-wrapper">
          <img src="/images/Dal-proj-img11.jpg" alt="Family in Dalhousie" />
        </div>
      </CardStyle4>

      {/* Planning Section */}
      <CardStyle5 CardStyle5Layout={getLayout()} imageUrl={ImageUrl}>
        <div className="container">
          <SectionTitle2>Start planning what to do in Dalhousie</SectionTitle2>
          <div className="content-wrapper">
            <div className="position1">
              <button
                className="inner-button"
                onClick={() => handleInnerButtonClick(InnerButtonText1)}
              >
                {InnerButtonText1}
              </button>
            </div>

            <div className="position2">
              <button
                className="inner-button"
                onClick={() => handleInnerButtonClick(InnerButtonText2)}
              >
                {InnerButtonText2}
              </button>
            </div>

            <div className="position3">
              <button
                className="inner-button"
                onClick={() => handleInnerButtonClick(InnerButtonText3)}
              >
                {InnerButtonText3}
              </button>
            </div>

            <div className="position4"></div>
            <div className="position5"></div>
            <div className="position6"></div>
            <div className="position7"></div>
            <div className="position8"></div>
            <div className="position9"></div>
            <div className="position10"></div>

            <div className="position11" ref={dropdownRef}>
              <button className="button1" onClick={() => setIsOpen(!isOpen)}>
                {ButtonText} ▾
              </button>
              {isOpen && (
                <div className="dropdown-menu">
                  {options.map((option) => (
                    <button
                      key={option.id}
                      className="dropdown-item"
                      onClick={() => {
                        setButtonText(option.label);
                        option.action();
                        setIsOpen(false);
                      }}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </CardStyle5>

      {/* Explore Section */}
      <CardContainer>
        <SectionTitle2>Get Inspired to Explore</SectionTitle2>
        <CardStyle3>
          {exploreItems.map((item, index) => (
            <div key={item.id} className={index === 0 ? "left-item" : ""}>
              <img
                src={item.image}
                alt={item.alt || item.title}
                onClick={() => handleInspireExplore(item.title)}
              />
              <h3>{item.title}</h3>
            </div>
          ))}
        </CardStyle3>
      </CardContainer>

      {/* FAQ Section */}
      <FAQWrapper>
        <div className="faq-header">
          <h2>Frequently Asked Questions</h2>
          <p>Find answers to the most common questions about Dalhousie</p>
        </div>

        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
            >
              <button className="faq-question" onClick={() => toggleFAQ(index)}>
                <span className="question-text">{faq.question}</span>
                <span className="faq-icon">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              {activeIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </FAQWrapper>
    </div>
  );
};

export default ThingsToDo;
