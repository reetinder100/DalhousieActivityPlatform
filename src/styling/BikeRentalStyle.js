import React from "react";
import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 40px 20px;
  background: #f8f9fa;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 80px auto 0;
  padding: 0 20px;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 10px;
`;

export const MainSubtitle = styled.p`
  text-align: center;
  font-size: 1.1rem;
  color: #7f8c8d;
  margin-bottom: 40px;
`;

export const Card = styled.div`
  display: flex;
  background: white;
  border-radius: 15px;
  padding: 30px;
  margin-bottom: 30px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const CardContent = styled.div`
  flex: 1;
  padding: 0 20px;
`;

export const CardTitle = styled.h3`
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 5px;
`;

export const BikeType = styled.span`
  display: inline-block;
  background: #3498db;
  color: white;
  padding: 2px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  margin-bottom: 10px;
`;

export const CardDescription = styled.p`
  color: #555;
  line-height: 1.6;
  margin: 10px 0;
`;

export const PriceTag = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
  color: #e67e22;
  margin: 10px 0;
`;

export const Rating = styled.div`
  color: #f39c12;
  margin: 5px 0;
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
`;

export const CardImage = styled.div`
  font-size: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 150px;
`;
