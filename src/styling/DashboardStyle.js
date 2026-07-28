import styled from "styled-components";

export const DashboardStyle1 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 25px;
  align-items: stretch;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 100%;

  margin: 0 auto;
  padding: 20px;
  background: transparent;
  border-radius: 16px;
  box-sizing: border-box;

  @media (max-width: 1440px) {
    padding: 20px 40px;
  }

  @media (max-width: 1024px) {
    gap: 20px;
    padding: 20px 30px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px 15px;
    gap: 15px;
    border-radius: 12px;
    justify-content: center;
  }

  @media (max-width: 480px) {
    padding: 15px 10px;
    gap: 12px;
    border-radius: 10px;
  }
`;

export const DescriptionText = styled.p`
  font-size: 1.4rem;
  line-height: 1.8;
  color: #000000;
  padding: 60px 40px;
  box-sizing: border-box;
  text-align: center;
  font-weight: 500;
  width: 100%;
  height: 500px;
  margin: 0 auto;
  padding-top: 100px;
  margin-top: -150px;
  margin-bottom: -240px;
  position: relative;
  z-index: 1;

  background-image: url("/images/Dal-proj-imgbg3.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgb(255, 255, 255, 0.45);
    border-radius: 16px;
    z-index: -1;
  }

  & > * {
    position: relative;
    z-index: 1;
  }

  @media (max-width: 768px) {
    padding: 40px 20px;
    font-size: 1.2rem;
    background-attachment: scroll; // Better for mobile
  }

  @media (max-width: 480px) {
    padding: 30px 15px;
    font-size: 1rem;
  }
`;

export const Container2 = styled.div`
  min-height: 500px;
  background: linear-gradient(135deg, #ffffffdd 0%, #cfc5c5 100%);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 40px;
  width: 100%;
  padding: 40px 60px;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;

  // Decorative background circles
  &::before {
    content: "";
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    top: -100px;
    right: -100px;
  }

  &::after {
    content: "";
    position: absolute;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    bottom: -50px;
    left: -50px;
  }

  @media (max-width: 1024px) {
    padding: 40px 30px;
    gap: 30px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    min-height: auto;
    padding: 40px 20px;
    gap: 30px;
  }

  @media (max-width: 480px) {
    padding: 30px 15px;
    gap: 20px;
  }
`;

export const Title2 = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  margin: 0;
  color: #1a1a2e;
  text-align: center;
  line-height: 1.2;
  flex-shrink: 0;
  position: relative;
  z-index: 1;

  // Glass effect for title
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding: 20px 30px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.3);

  // Remove underline if using glass effect
  &::after {
    display: none;
  }

  @media (max-width: 1024px) {
    font-size: 2.2rem;
    padding: 15px 25px;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    width: 100%;
    padding: 15px 20px;
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
    padding: 12px 16px;
  }
`;

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  height: 550px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 5;
  position: relative;

  @media (max-width: 1440px) {
    padding: 20px 40px;
  }

  @media (max-width: 768px) {
    padding: 20px 15px;
  }
`;

export const SectionTitle = styled.h3`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 0px;
  margin-left: 40px;
  position: relative;
  align-self: flex-start;
  width: 100%;
  color: #1a1a2e;
  box-sizing: border-box;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-left: 20px;
    margin-bottom: 0px;
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
    margin-left: 20px;
    margin-bottom: 0px;
  }
`;

export const HeroSection = styled.div`
  width: 100%;
  height: 800px;
  background-image: url("/images/Dal-proj-img1.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  /* Optional: Add overlay for better text readability */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4); /* Dark overlay */
  }

  @media (max-width: 1024px) {
    height: 600px;
  }

  @media (max-width: 768px) {
    height: 500px;
  }

  @media (max-width: 480px) {
    height: 400px;
  }
`;

export const HeroSection2 = styled.div`
  width: 100%;
  height: 400px;
  background-image: url("/images/Dal-proj-img1.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  /* Optional: Add overlay for better text readability */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4); /* Dark overlay */
  }

  @media (max-width: 768px) {
    height: 300px;
  }

  @media (max-width: 480px) {
    height: 250px;
  }
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  color: white;
  text-align: center;
  padding: 20px;
  max-width: 800px;
  width: 100%;
  box-sizing: border-box;

  h1 {
    font-size: 3rem;
    margin-bottom: 10px;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);

    @media (max-width: 768px) {
      font-size: 2.2rem;
    }

    @media (max-width: 480px) {
      font-size: 1.8rem;
    }
  }

  p {
    font-size: 1.2rem;
    max-width: 600px;
    margin: 0 auto;
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);

    @media (max-width: 768px) {
      font-size: 1rem;
    }

    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
  }
`;

// ============ ADDITIONAL UTILITY COMPONENTS ============

export const SectionWrapper = styled.section`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 40px 20px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 30px 15px;
  }

  @media (max-width: 480px) {
    padding: 20px 10px;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.columns || "repeat(3, 1fr)"};
  gap: ${(props) => props.gap || "25px"};
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    grid-template-columns: ${(props) =>
      props.columns
        ? props.columns.replace("repeat(3", "repeat(2")
        : "repeat(2, 1fr)"};
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: ${(props) => props.mobileGap || "15px"};
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  align-items: ${(props) => props.align || "center"};
  justify-content: ${(props) => props.justify || "center"};
  gap: ${(props) => props.gap || "20px"};
  flex-wrap: ${(props) => props.wrap || "wrap"};
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: ${(props) => props.padding || "20px"};
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: ${(props) => props.mobileDirection || "column"};
    padding: ${(props) => props.mobilePadding || "15px"};
  }
`;

export const Card = styled.div`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  width: 100%;
  max-width: ${(props) => props.maxWidth || "100%"};
  cursor: ${(props) => (props.clickable ? "pointer" : "default")};
  box-sizing: border-box;

  &:hover {
    ${(props) =>
      props.clickable &&
      `
      transform: translateY(-6px);
      box-shadow: 0 8px 30px rgba(108, 92, 231, 0.12);
    `}
  }

  img {
    width: 100%;
    height: ${(props) => props.imageHeight || "200px"};
    object-fit: cover;
    display: block;
  }

  .card-content {
    padding: ${(props) => props.contentPadding || "20px"};
  }
`;
