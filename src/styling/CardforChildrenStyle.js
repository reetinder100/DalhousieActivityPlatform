import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 40px 20px;

  @media (max-width: 768px) {
    padding: 20px 15px;
    min-height: auto;
  }

  @media (max-width: 480px) {
    padding: 15px 10px;
  }
`;

export const Container = styled.div`
  background: white;
  border-radius: 20px;
  padding: 60px 40px;
  width: 100%;
  max-width: 1200px;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    padding: 50px 30px;
  }

  @media (max-width: 768px) {
    padding: 35px 20px;
    border-radius: 16px;
  }

  @media (max-width: 480px) {
    padding: 25px 15px;
    border-radius: 12px;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  color: #2d3748;
  margin-bottom: 8px;
  text-align: center;

  @media (max-width: 1024px) {
    font-size: 2.2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 6px;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 4px;
    margin-top: 35px;
  }
`;

export const MainSubtitle = styled.p`
  font-size: 1.2rem;
  color: #718096;
  text-align: center;
  margin-bottom: 50px;
  line-height: 1.6;

  @media (max-width: 1024px) {
    font-size: 1.1rem;
    margin-bottom: 40px;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 30px;
    padding: 0 10px;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-bottom: 20px;
    padding: 0 5px;
    line-height: 1.5;
  }
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  padding: 40px 0;
  border-bottom: 1px solid #e2e8f0;

  &:last-child {
    border-bottom: none;
  }

  /* Alternate layout - image on right for even cards */
  &:nth-child(even) {
    flex-direction: row-reverse;
  }

  @media (max-width: 1024px) {
    gap: 30px;
    padding: 30px 0;
  }

  @media (max-width: 768px) {
    flex-direction: column !important; /* Override the even card rule */
    text-align: center;
    gap: 20px;
    padding: 25px 0;
  }

  @media (max-width: 480px) {
    gap: 15px;
    padding: 20px 0;
  }
`;

export const CardContent = styled.div`
  flex: 1;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 768px) {
    padding: 5px 0;
    align-items: center;
    width: 100%;
  }

  @media (max-width: 480px) {
    padding: 0;
    gap: 8px;
  }
`;

export const CardTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: 700;
  color: #1a1a2e;
  margin: 0;

  @media (max-width: 1024px) {
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.6rem;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
    text-align: center;
  }
`;

export const CardDescription = styled.p`
  font-size: 1.1rem;
  color: #718096;
  line-height: 1.7;
  margin: 0;

  @media (max-width: 1024px) {
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
    text-align: center;
    line-height: 1.6;
    padding: 0 5px;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
    line-height: 1.5;
    padding: 0;
  }
`;

export const ExploreButton = styled.button`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 15px 50px;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-top: 15px;
  align-self: flex-start;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 1024px) {
    padding: 13px 40px;
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    padding: 12px 35px;
    font-size: 0.95rem;
    align-self: center;
    min-width: 200px;
    margin-top: 10px;
  }

  @media (max-width: 480px) {
    padding: 10px 25px;
    font-size: 0.85rem;
    min-width: 100%;
    width: 100%;
    margin-top: 8px;
    border-radius: 30px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  width: 100%;

  /* Mobile-first: stack vertically */
  flex-direction: column;

  /* Tablet and desktop: side by side */
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const CardImage = styled.div`
  flex: 1;
  height: 300px;
  min-height: 300px;
  max-height: 300px;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  background: #f0f0f0;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  &:hover img {
    transform: scale(1.05);
  }

  /* Tablet */
  @media (max-width: 1024px) {
    height: 250px;
    min-height: 250px;
    max-height: 250px;
    border-radius: 14px;
  }

  /* Mobile Large */
  @media (max-width: 768px) {
    width: 100%;
    height: 220px;
    min-height: 220px;
    max-height: 220px;
    border-radius: 12px;
    order: -1; /* Image appears above content on mobile */
  }

  /* Mobile Medium */
  @media (max-width: 640px) {
    height: 200px;
    min-height: 200px;
    max-height: 200px;
    border-radius: 10px;
  }

  /* Mobile Small */
  @media (max-width: 480px) {
    aspect-ratio: 1/1;
    border-radius: 10px;
  }
`;
