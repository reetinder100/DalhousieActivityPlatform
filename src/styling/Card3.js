import styled from "styled-components";
import { useState } from "react";

export const Card3Container = styled.div`
  height: 700px;
  width: 100%;
  background-image: url("/images/Dal-proj-img26.jpg");
  background-size: cover;
  background-position: center -1100px;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  position: relative;
  padding: 2rem 1rem;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  & > div {
    position: relative;
    z-index: 2;
  }

  /* Mobile responsiveness */
  @media (max-width: 768px) {
    height: auto;
    min-height: 100vh;
    flex-direction: column;
    justify-content: center;
    padding: 3rem 1rem;
    background-position: center center;
    gap: 2rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 0.5rem;
    min-height: 90vh;
    gap: 1.5rem;
  }
`;

export const Card3Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 0.5rem 0;
  text-align: left;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const Card3SubTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 400;
  color: #ffffff;
  margin: 0 0 2rem 0;
  text-align: left;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
    text-align: center;
    margin: 0 0 1rem 0;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    line-height: 1.5;
  }
`;

export const Card3Track = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  width: 100%;
  max-width: 700px;
  height: 450px;
  border-radius: 16px;
  overflow: visible;
  perspective: 1000px;
  position: relative;

  @media (max-width: 768px) {
    height: 380px;
    max-width: 500px;
  }

  @media (max-width: 480px) {
    height: 320px;
    max-width: 320px;
  }
`;

export const Card3Item = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  width: 250px;
  height: 400px;
  cursor: pointer;
  position: relative;
  background: #ffffff;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  border-radius: 16px;
  transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
  transform-origin: center;
  z-index: 1;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 70%;
    background: linear-gradient(to top, rgba(241, 196, 196, 0.48), transparent);
    border-radius: 0 0 16px 16px;
    pointer-events: none;
  }

  h2 {
    font-family: "Georgia", serif;
    font-size: 1.8rem;
    color: #1e3a2f;
    margin: 0 0 0.5rem 0;
    text-align: center;
  }

  p {
    font-family: "Georgia", serif;
    font-size: 1rem;
    line-height: 1.6;
    color: #3d352c;
    margin: 0;
    text-align: center;
  }

  @media (max-width: 768px) {
    width: 220px;
    height: 350px;
    padding: 30px;

    h2 {
      font-size: 1.5rem;
    }

    p {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) {
    width: 180px;
    height: 290px;
    padding: 20px;

    h2 {
      font-size: 1.2rem;
      margin: 0 0 0.3rem 0;
    }

    p {
      font-size: 0.75rem;
      line-height: 1.4;
    }
  }
`;

export const NavButton = styled.button`
  padding: 12px 30px;
  border-radius: 50px;
  border: none;
  height: 80px;
  background: transparent;
  color: #fff;
  opacity: 0.7;
  font-size: 1.1rem;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    background: #ffffff;
    color: #000000;
    opacity: 5;
  }

  @media (max-width: 768px) {
    height: 60px;
    padding: 10px 20px;
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    height: 50px;
    padding: 8px 16px;
    font-size: 0.9rem;
    min-width: 40px;
  }
`;

const cardData = [
  {
    id: 1,
    title: "Satdhara Road",
    description:
      "The name Satdhara comes from the Hindi words for seven springs.The waterfall is formed by the confluence of water from seven distinct springs, making it a unique natural spectacle",
    color: "#fff",
  },
  {
    id: 2,
    title: "The Singing hill",
    description:
      "Dainkund Peak is the highest point in Dalhousie. It's also called the Singing Hill because of the eerie, melodious whistling sound created by the wind as it blows through the trees",
    color: "#fff",
  },
  {
    id: 3,
    title: "Built on Five Hills",
    description:
      "The town of Dalhousie is spread across five prominent hills: Kathalagh, Potreyn, Terah (now known as Moti Tibba), Bakrota, and Bhangora. These hills were acquired from the Raja of Chamba in exchange for a reduction in taxes",
    color: "#fff",
  },
];

export const Card3 = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("");
  const [prevIndex, setPrevIndex] = useState(0);

  const nextClick = () => {
    const nextIdx = (index + 1) % cardData.length;
    setPrevIndex(index);
    setIndex(nextIdx);
    setDirection("next");
    setTimeout(() => setDirection(""), 600);
  };

  const prevClick = () => {
    const prevIdx = (index - 1 + cardData.length) % cardData.length;
    setPrevIndex(index);
    setIndex(prevIdx);
    setDirection("prev");
    setTimeout(() => setDirection(""), 600);
  };

  const getClassName = (cardIndex) => {
    if (cardIndex === index) return "active";
    if (!direction) return "";

    if (direction === "next") {
      if (cardIndex === prevIndex) return "exit-left";
      return "enter-right";
    }

    if (direction === "prev") {
      if (cardIndex === prevIndex) return "exit-right";
      return "enter-left";
    }

    return "";
  };

  const getRotation = (cardIndex) => {
    if (cardIndex === index) return 0;

    let distance = cardIndex - index;
    const totalCards = cardData.length;

    if (Math.abs(distance) > totalCards / 2) {
      distance = distance > 0 ? distance - totalCards : distance + totalCards;
    }

    return -distance * 4;
  };

  const getZIndex = (cardIndex) => {
    if (cardIndex === index) return 10;
    let distance = Math.abs(cardIndex - index);
    return Math.max(1, 10 - distance);
  };

  return (
    <div style={{ overflow: "hidden", width: "100%" }}>
      <Card3Container>
        <div style={{ width: "550px" }}>
          <Card3Title>Did you know ?</Card3Title>
          <Card3SubTitle>
            Dalhousie is full of old-world magic, unexpected echoes of Scotland,
            and views that change with every cloud. Flick through the snapshots
            to discover a side of the Himalayas you never knew existed.
          </Card3SubTitle>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: "10px",
            alignItems: "center",
          }}
        >
          <NavButton onClick={prevClick}>&lt;</NavButton>
          <Card3Track>
            {cardData.map((card, cardIndex) => {
              const rotation = getRotation(cardIndex);
              const zIndex = getZIndex(cardIndex);
              const isActive = cardIndex === index;
              const className = getClassName(cardIndex);

              return (
                <Card3Item
                  key={card.id}
                  className={className}
                  style={{
                    background: card.color,
                    transform: `rotate(${rotation}deg)`,
                    opacity: isActive ? 1 : 0.5,
                    zIndex: zIndex,
                  }}
                >
                  <h2>{card.title}</h2>

                  <p>{card.description}</p>
                </Card3Item>
              );
            })}
          </Card3Track>
          <NavButton onClick={nextClick}>&gt;</NavButton>
        </div>
      </Card3Container>
    </div>
  );
};
