// src/styling/AdventuredisplayStyle.js
import styled from "styled-components";

// Helper function for difficulty colors
export const getDifficultyColor = (difficulty) => {
  if (!difficulty) return "#78909C";
  if (difficulty.includes("Easy") && !difficulty.includes("Moderate"))
    return "#4CAF50";
  if (
    difficulty.includes("Moderate") ||
    difficulty.includes("Easy to Moderate")
  )
    return "#FFA726";
  if (difficulty.includes("Challenging")) return "#EF5350";
  return "#78909C";
};

// Main Container
export const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 20px 24px 40px;
  font-family: "Segoe UI", Roboto, system-ui, sans-serif;
  background-color: #fafafa;
  min-height: 100vh;
`;

// Header Components
export const Header = styled.header`
  text-align: center;
  padding: 30px 0 20px;
  border-bottom: 2px solid #e8e8e8;
  margin-top: 50px;
  margin-bottom: 32px;
`;

export const HeaderTitle = styled.h1`
  font-size: 2.2rem;
  font-weight: 800;
  color: #1a1a2e;
  margin: 0 0 8px 0;
  letter-spacing: -0.5px;
`;

export const HeaderSubtitle = styled.p`
  color: #666;
  font-size: 1rem;
  margin: 0;
`;

// Footer Components
export const Footer = styled.footer`
  text-align: center;
  padding: 30px 0 10px;
  color: #888;
  font-size: 0.85rem;
  border-top: 1px solid #e8e8e8;
  margin-top: 20px;
`;

export const FooterText = styled.p`
  margin: 0 0 4px 0;
`;

// Card Components
export const Card = styled.div`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  margin-bottom: 30px;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
  border: 1px solid #f0f0f0;
  flex-wrap: wrap;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  }

  @media (max-width: 768px) {
    flex-direction: column !important;
  }
`;

export const ImageSection = styled.div`
  flex: 0 0 220px;
  min-height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 6rem;
  padding: 20px;
  position: relative;
  overflow: hidden;
  background: #1a1a2e;

  /* Animated wave layers */
  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 200%;
    height: 200%;
    top: -50%;
    left: -50%;
    background: conic-gradient(
      from 0deg,
      transparent 0%,
      rgba(255, 107, 107, 0.2) 10%,
      transparent 20%,
      rgba(78, 205, 196, 0.2) 30%,
      transparent 40%,
      rgba(255, 107, 107, 0.2) 50%,
      transparent 60%,
      rgba(78, 205, 196, 0.2) 70%,
      transparent 80%,
      rgba(255, 107, 107, 0.2) 90%,
      transparent 100%
    );
    animation: waveRotation 20s linear infinite;
  }

  &::after {
    background: conic-gradient(
      from 60deg,
      transparent 0%,
      rgba(255, 215, 0, 0.15) 15%,
      transparent 30%,
      rgba(255, 107, 107, 0.15) 45%,
      transparent 60%,
      rgba(255, 215, 0, 0.15) 75%,
      transparent 90%,
      rgba(255, 107, 107, 0.15) 100%
    );
    animation: waveRotation 30s linear infinite reverse;
  }

  @keyframes waveRotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 768px) {
    flex: 0 0 auto;
    min-height: 160px;
    font-size: 4rem;
  }
`;

export const ContentSection = styled.div`
  flex: 1;
  padding: 24px 28px;
  min-width: 280px;

  @media (max-width: 480px) {
    padding: 16px 18px;
    min-width: 200px;
  }
`;

export const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 10px;
`;

export const TrailTitle = styled.h2`
  margin: 0;
  font-size: 1.4rem;
  font-weight: 700;
  color: #1a1a2e;

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

export const Badge = styled.span`
  background-color: ${({ difficulty }) => getDifficultyColor(difficulty)};
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  white-space: nowrap;
`;

export const Description = styled.p`
  color: #555;
  line-height: 1.7;
  font-size: 0.95rem;
  margin: 0 0 14px 0;
`;

export const DetailsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 8px 20px;
  background-color: #f8f9fa;
  padding: 12px 16px;
  border-radius: 10px;
  margin-bottom: 16px;
  font-size: 0.85rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr 1fr;
    gap: 6px 12px;
    font-size: 0.8rem;
    padding: 10px 12px;
  }
`;

export const DetailItem = styled.div`
  span:first-child {
    font-weight: 600;
    color: #333;
  }
  span:last-child {
    color: #555;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 4px;
`;

export const BaseButton = styled.button`
  border: none;
  padding: 10px 24px;
  border-radius: 30px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 480px) {
    padding: 8px 18px;
    font-size: 0.8rem;
    flex: 1;
    justify-content: center;
    min-width: 100px;
  }
`;

export const CabButton = styled(BaseButton)`
  background-color: #1a1a2e;
  color: white;
  box-shadow: 0 2px 8px rgba(26, 26, 46, 0.25);

  &:hover {
    background-color: #2d2d5e;
    transform: scale(1.02);
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const GuideButton = styled(BaseButton)`
  background-color: #2e7d32;
  color: white;
  box-shadow: 0 2px 8px rgba(46, 125, 50, 0.25);

  &:hover {
    background-color: #388e3c;
    transform: scale(1.02);
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const MoreInfoButton = styled(BaseButton)`
  background-color: transparent;
  color: #1a1a2e;
  border: 2px solid #e0e0e0;

  &:hover {
    border-color: #1a1a2e;
    background-color: #f5f5f5;
  }
`;

export const ExpandedDetails = styled.div`
  margin-top: 16px;
  padding: 16px 20px;
  background-color: #f0f7ff;
  border-radius: 10px;
  border-left: 4px solid #1a1a2e;
  font-size: 0.9rem;
  color: #333;
  line-height: 1.8;
  animation: slideDown 0.3s ease;

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  p {
    margin: 0;
  }

  p:first-child {
    margin-bottom: 8px;
  }
`;
