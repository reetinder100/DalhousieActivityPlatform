import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 40px 20px;
  background: #f8f9fa;

  @media (max-width: 1024px) {
    padding: 30px 15px;
  }

  @media (max-width: 768px) {
    padding: 20px 10px;
  }

  @media (max-width: 480px) {
    padding: 15px 8px;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 80px auto 0;
  padding: 0 20px;

  @media (max-width: 1024px) {
    margin: 60px auto 0;
    padding: 0 15px;
  }

  @media (max-width: 768px) {
    margin: 40px auto 0;
    padding: 0 10px;
  }

  @media (max-width: 480px) {
    margin: 30px auto 0;
    padding: 0 8px;
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 10px;

  @media (max-width: 1024px) {
    font-size: 2.2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 8px;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 6px;
    margin-top: 55px;
  }
`;

export const MainSubtitle = styled.p`
  text-align: center;
  font-size: 1.1rem;
  color: #7f8c8d;
  margin-bottom: 40px;

  @media (max-width: 1024px) {
    font-size: 1rem;
    margin-bottom: 30px;
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-bottom: 25px;
    padding: 0 10px;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
    margin-bottom: 20px;
    padding: 0 5px;
  }
`;

export const Card = styled.div`
  display: flex;
  background: white;
  border-radius: 15px;
  padding: 30px;
  margin-bottom: 30px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;
  gap: 30px;
  align-items: center;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 1024px) {
    padding: 25px;
    margin-bottom: 25px;
    gap: 20px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 12px;
    gap: 15px;
  }

  @media (max-width: 480px) {
    padding: 15px;
    margin-bottom: 15px;
    border-radius: 10px;
    gap: 12px;
  }
`;

export const CardContent = styled.div`
  flex: 2; /* Give more space to content */
  padding: 0 20px;

  @media (max-width: 1024px) {
    padding: 0 15px;
    flex: 1.5;
  }

  @media (max-width: 768px) {
    padding: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
  }

  @media (max-width: 480px) {
    padding: 0;
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 5px;

  @media (max-width: 1024px) {
    font-size: 1.3rem;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

export const BikeType = styled.span`
  display: inline-block;
  background: #3498db;
  color: white;
  padding: 2px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 0.75rem;
    padding: 2px 10px;
    align-self: center;
  }

  @media (max-width: 480px) {
    font-size: 0.7rem;
    padding: 2px 8px;
  }
`;

export const CardDescription = styled.p`
  color: #555;
  line-height: 1.6;
  margin: 10px 0;

  @media (max-width: 1024px) {
    font-size: 0.95rem;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    text-align: center;
    margin: 8px 0;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
    line-height: 1.5;
    margin: 6px 0;
  }
`;

export const PriceTag = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
  color: #e67e22;
  margin: 10px 0;

  @media (max-width: 1024px) {
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    text-align: center;
    margin: 8px 0;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin: 6px 0;
  }
`;

export const Rating = styled.div`
  color: #f39c12;
  margin: 5px 0;

  @media (max-width: 768px) {
    text-align: center;
    margin: 4px 0;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin: 3px 0;
  }
`;

export const ExploreButton = styled.button`
  background: linear-gradient(135deg, #2c3e50, #3498db);
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 25px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 15px;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 5px 20px rgba(52, 152, 219, 0.4);
  }

  @media (max-width: 1024px) {
    padding: 10px 25px;
    font-size: 0.95rem;
  }

  @media (max-width: 768px) {
    padding: 10px 30px;
    font-size: 0.9rem;
    margin-top: 10px;
    width: auto;
    min-width: 180px;
    align-self: center;
  }

  @media (max-width: 480px) {
    padding: 8px 20px;
    font-size: 0.85rem;
    min-width: 100%;
    border-radius: 20px;
    margin-top: 8px;
  }
`;

export const CardImage = styled.div`
  flex: 1; /* Reduce image flex */
  max-width: 150px; /* Limit image width */
  min-width: 100px;
  font-size: 80px;
  display: flex;
  align-items: center;
  justify-content: center;

  img,
  svg {
    width: 100%;
    height: auto;
    max-height: 150px;
    object-fit: contain;
  }

  @media (max-width: 1024px) {
    font-size: 70px;
    max-width: 130px;
    min-width: 90px;

    img,
    svg {
      max-height: 130px;
    }
  }

  @media (max-width: 768px) {
    font-size: 60px;
    max-width: 120px;
    min-width: 80px;
    width: 100%;
    padding: 10px 0;
    order: -1;

    img,
    svg {
      max-height: 120px;
    }
  }

  @media (max-width: 480px) {
    font-size: 50px;
    max-width: 100px;
    min-width: 60px;
    padding: 8px 0;

    img,
    svg {
      max-height: 100px;
    }
  }
`;
