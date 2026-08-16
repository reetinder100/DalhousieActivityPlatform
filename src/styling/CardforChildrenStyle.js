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
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  color: #2d3748;
  margin-bottom: 8px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
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

export const Card = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  padding: 40px 0;
  border-bottom: 1px solid #e2e8f0;

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 25px;
  }
`;

export const CardContent = styled.div`
  flex: 1;
  padding: 10px;
`;

export const CardTitle = styled.h2`
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

export const CardDescription = styled.p`
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
  margin-top: 15px;
  align-self: flex-start;

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
    align-self: center;
    min-width: 200px;
  }

  @media (max-width: 480px) {
    padding: 10px 25px;
    font-size: 0.9rem;
    min-width: 100%;
    width: 100%;
  }
`;

export const CardImage = styled.div`
  flex: 1;
  height: 300px;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  background: #f0f0f0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 200px;
  }
`;
