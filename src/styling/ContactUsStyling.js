// ============ CONTACT US STYLES ============
import styled from "styled-components";

export const ContactContainer = styled.div`
  width: 100%;
  padding: 40px 20px;
  background: #f8f9fa;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 30px 15px;
  }

  @media (max-width: 480px) {
    padding: 20px 10px;
  }
`;

export const ContactWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 60px;

  @media (max-width: 768px) {
    gap: 40px;
  }
`;

// Contact Info Section
export const ContactInfoSection = styled.div`
  width: 100%;
`;

export const ContactInfoText = styled.p`
  font-size: 1.1rem;
  color: #555;
  line-height: 1.6;
  margin: 0 0 30px 0;
  max-width: 600px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const ContactInfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const ContactInfoCard = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 15px;
  padding: 20px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 480px) {
    padding: 15px;
  }
`;

export const IconWrapper = styled.div`
  font-size: 2rem;
  flex-shrink: 0;
  margin-top: 2px;

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const InfoTitle = styled.h4`
  font-size: 0.9rem;
  font-weight: 600;
  color: #1a1a2e;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const InfoText = styled.p`
  font-size: 0.95rem;
  color: #666;
  margin: 0;
  line-height: 1.5;

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

// Form Section
export const FormSection = styled.div`
  width: 100%;
`;

export const FormWrapper = styled.form`
  background: white;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);

  @media (max-width: 768px) {
    padding: 30px 25px;
  }

  @media (max-width: 480px) {
    padding: 20px 15px;
  }
`;

export const FormTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: #1a1a2e;
  margin: 0 0 30px 0;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

export const FormSuccessMessage = styled.div`
  padding: 12px 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  background: ${(props) => (props.success ? "#d4edda" : "#f8d7da")};
  color: ${(props) => (props.success ? "#155724" : "#721c24")};
  border: 1px solid ${(props) => (props.success ? "#c3e6cb" : "#f5c6cb")};
  font-size: 0.95rem;
`;

export const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
`;

export const FormLabel = styled.label`
  font-size: 0.9rem;
  font-weight: 500;
  color: #333;

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

export const FormInput = styled.input`
  padding: 12px 16px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: #f8f9fa;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: #667eea;
    background: white;
    box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.1);
  }

  &::placeholder {
    color: #a0aec0;
  }

  @media (max-width: 480px) {
    padding: 10px 14px;
    font-size: 0.9rem;
  }
`;

export const FormTextarea = styled.textarea`
  padding: 12px 16px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: #f8f9fa;
  resize: vertical;
  font-family: inherit;
  min-height: 120px;

  &:focus {
    outline: none;
    border-color: #667eea;
    background: white;
    box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.1);
  }

  &::placeholder {
    color: #a0aec0;
  }

  @media (max-width: 480px) {
    padding: 10px 14px;
    font-size: 0.9rem;
    min-height: 100px;
  }
`;

export const SubmitButton = styled.button`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 14px 40px;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
  margin-top: 10px;
  width: 100%;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 480px) {
    padding: 12px 30px;
    font-size: 1rem;
  }
`;

// Map Section
export const MapSection = styled.div`
  width: 100%;
`;

export const MapContainer = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);

  @media (max-width: 768px) {
    height: 300px;
  }

  @media (max-width: 480px) {
    height: 250px;
  }
`;
