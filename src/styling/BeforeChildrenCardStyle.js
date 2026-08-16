import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 40px 20px;
`;

export const Container = styled.div`
  background: white;
  border-radius: 20px;
  padding: 60px 40px;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }

  @media (max-width: 480px) {
    padding: 30px 15px;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  color: #2d3748;
  margin-bottom: 50px;
  text-align: center;
  padding: 20px 30px;
  border-radius: 16px;
  display: block;
  width: fit-content;
  max-width: 90%;
  margin: 0 auto 50px auto;

  @media (max-width: 768px) {
    font-size: 2rem;
    padding: 15px 20px;
    margin-bottom: 35px;
    width: 100%;
    max-width: 100%;
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
    padding: 12px 15px;
    margin-bottom: 25px;
  }
`;

export const MainSubtitle = styled.p`
  font-size: 1.2rem;
  color: #718096;
  text-align: center;
  margin-bottom: 50px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 35px;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    margin-bottom: 25px;
  }
`;

export const MainCard = styled.div`
  background: #f7fafc;
  border-radius: 20px;
  padding: 40px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  gap: 50px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);

  @media (max-width: 1024px) {
    gap: 30px;
    padding: 30px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 25px;
    padding: 25px;
    justify-content: center;
  }

  @media (max-width: 480px) {
    padding: 20px;
    gap: 20px;
  }
`;

export const MainImage = styled.div`
  flex: 0 0 800px;
  height: 600px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: all 0.5s ease;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.2);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 1024px) {
    flex: 0 0 400px;
    width: 400px;
    height: 400px;
  }

  @media (max-width: 768px) {
    flex: 0 0 auto;
    width: 100%;
    height: 300px;
  }

  @media (max-width: 480px) {
    height: 200px;
    border-radius: 12px;
  }
`;

export const MainContent = styled.div`
  flex: 1;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
    gap: 15px;
    max-width: 100%;
  }

  @media (max-width: 480px) {
    gap: 12px;
  }
`;

export const MainTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: 700;
  color: #1a1a2e;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`;

export const MainDescription = styled.p`
  font-size: 1.1rem;
  color: #718096;
  line-height: 1.7;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
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
  margin-top: 5px;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    padding: 12px 35px;
    font-size: 1rem;
    width: auto;
    min-width: 200px;
  }

  @media (max-width: 480px) {
    padding: 10px 25px;
    font-size: 0.9rem;
    min-width: 100%;
    width: 100%;
  }
`;

export const CardsContainer = styled.div`
  position: relative;
  margin-top: 20px;
`;

export const ScrollWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  overflow: hidden;
  position: relative;

  @media (max-width: 768px) {
    gap: 10px;
  }

  @media (max-width: 480px) {
    gap: 5px;
  }
`;

export const CardRow = styled.div`
  display: flex;
  gap: 20px;
  overflow-x: auto;
  padding: 20px 10px;
  scroll-behavior: smooth;
  flex: 1;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  @media (max-width: 768px) {
    gap: 15px;
    padding: 15px 5px;
  }

  @media (max-width: 480px) {
    gap: 12px;
    padding: 10px 5px;
  }
`;

export const ScrollButton = styled.button`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  flex-shrink: 0;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
  }

  &:active {
    transform: scale(0.95);
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    width: 35px;
    height: 35px;
    font-size: 1rem;
  }
`;

export const SmallCard = styled.div`
  min-width: 180px;
  max-width: 180px;
  height: 220px;
  background: white;
  border-radius: 16px;
  padding: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  border: 3px solid transparent;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }

  &.active {
    border-color: #667eea;
    background: linear-gradient(135deg, #eef2ff 0%, #e0e7ff 100%);
    box-shadow: 0 4px 20px rgba(102, 126, 234, 0.2);
  }

  @media (max-width: 768px) {
    min-width: 140px;
    max-width: 140px;
    height: 180px;
    padding: 15px;
    gap: 12px;
  }

  @media (max-width: 480px) {
    min-width: 120px;
    max-width: 120px;
    height: 160px;
    padding: 12px;
    gap: 10px;
  }
`;

export const SmallCardImage = styled.div`
  font-size: 4rem;
  line-height: 1;

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

export const SmallCardTitle = styled.h3`
  font-size: 1rem;
  color: #2d3748;
  text-align: center;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const SmallCardDescription = styled.p`
  font-size: 0.8rem;
  color: #718096;
  text-align: center;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }

  @media (max-width: 480px) {
    font-size: 0.65rem;
  }
`;
