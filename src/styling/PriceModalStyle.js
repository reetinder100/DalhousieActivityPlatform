import styled, { keyframes } from "styled-components";

// Animations
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideUp = keyframes`
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: ${fadeIn} 0.3s ease;
  padding: 16px;

  @media (max-width: 480px) {
    padding: 16px;
    align-items: center;
  }
`;

export const ModalContainer = styled.div`
  background: white;
  padding: 24px;
  border-radius: 12px;
  max-width: 500px;
  width: 90%;
  max-height: 90vh;
  overflow: auto;
  position: relative;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  animation: ${slideUp} 0.3s ease;

  @media (max-width: 480px) {
    padding: 20px 16px;
    width: 100%;
    max-width: 400px;
    max-height: 85vh;
    border-radius: 12px;
    animation: ${slideUp} 0.3s ease;
    margin: 0 16px;
  }
`;
export const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: none;
  border: none;
  font-size: 28px;
  cursor: pointer;
  color: #666;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.2s ease;
  padding: 0;
  line-height: 1;

  &:hover {
    background: #f0f0f0;
    color: #333;
  }

  @media (max-width: 480px) {
    top: 8px;
    right: 8px;
    font-size: 24px;
    width: 32px;
    height: 32px;
  }
`;

export const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 600;
  color: #1a1a1a;
  padding-right: 40px;

  @media (max-width: 480px) {
    font-size: 20px;
    margin-bottom: 16px;
    padding-right: 32px;
  }
`;

export const Content = styled.div`
  color: #333;
  line-height: 1.6;

  @media (max-width: 480px) {
    font-size: 14px;
    line-height: 1.5;
  }
`;

export const ModalText = styled.p`
  margin-bottom: 16px;
  font-size: 16px;
  color: #333;

  strong {
    color: #1a1a1a;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    margin-bottom: 12px;
  }
`;

export const InfoCard = styled.div`
  background: #f8f9fa;
  padding: 16px;
  border-radius: 8px;
  margin-top: 16px;
  border: 1px solid #e9ecef;

  @media (max-width: 480px) {
    padding: 12px;
    margin-top: 12px;
  }
`;

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: ${(props) => (props.last ? "0" : "8px")};

  @media (max-width: 480px) {
    gap: 10px;
    flex-wrap: wrap;
    margin-bottom: ${(props) => (props.last ? "0" : "6px")};
  }
`;

export const InfoIcon = styled.span`
  font-size: 20px;

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const InfoLabel = styled.p`
  margin: 0;
  font-size: 13px;
  color: #888;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const InfoValue = styled.p`
  margin: 0;
  font-size: 15px;
  font-weight: 500;
  color: #333;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const TermsText = styled.p`
  margin-top: 16px;
  font-size: 13px;
  color: #888;
  font-style: italic;

  @media (max-width: 480px) {
    font-size: 12px;
    margin-top: 12px;
  }
`;

export const Footer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  margin-top: 24px;
  padding-top: 16px;
  border-top: 1px solid #e0e0e0;

  @media (max-width: 480px) {
    flex-direction: column-reverse;
    gap: 8px;
    margin-top: 16px;
    padding-top: 12px;
  }
`;

export const CancelButton = styled.button`
  padding: 10px 20px;
  background: #f0f0f0;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  color: #333;
  transition: background 0.2s;

  &:hover {
    background: #e0e0e0;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 12px 20px;
    font-size: 15px;
  }
`;

export const ConfirmButton = styled.button`
  padding: 10px 24px;
  background: #4caf50;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  color: white;
  transition: background 0.2s;

  &:hover {
    background: #45a049;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 12px 24px;
    font-size: 15px;
  }
`;
