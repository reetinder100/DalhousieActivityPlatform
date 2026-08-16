import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 -2px 20px rgba(0, 0, 0, 0.3);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  color: #ffffff;
  padding: 40px 20px 20px;
  margin-top: auto;
  transition: all 0.3s ease;
  position: relative;

  /* Glowing effect */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(
      90deg,
      transparent,
      #667eea,
      #764ba2,
      transparent
    );
    opacity: 0.5;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:
      radial-gradient(
        circle at 20% 80%,
        rgba(102, 126, 234, 0.05) 0%,
        transparent 60%
      ),
      radial-gradient(
        circle at 80% 20%,
        rgba(118, 75, 162, 0.05) 0%,
        transparent 60%
      );
    pointer-events: none;
  }

  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;
    position: relative;
    z-index: 1;
  }

  .footer-section {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .footer-title {
    font-size: 1.1rem;
    font-weight: 600;
    letter-spacing: 0.5px;
    margin: 0 0 8px 0;
    color: #ffffff;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 30px;
      height: 2px;
      background: linear-gradient(90deg, #667eea, #764ba2);
      border-radius: 2px;
    }
  }

  .footer-text {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.6;
    margin: 0;
  }

  .footer-link {
    text-decoration: none;
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
    transition: all 0.3s ease;
    display: inline-block;
    position: relative;

    &:hover {
      color: #667eea;
      transform: translateX(5px);
    }
  }

  .social-links {
    display: flex;
    gap: 15px;
    margin-top: 8px;
  }

  .social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.7);
    transition: all 0.3s ease;
    text-decoration: none;
    background: rgba(255, 255, 255, 0.03);

    &:hover {
      background: linear-gradient(135deg, #667eea, #764ba2);
      color: white;
      border-color: transparent;
      transform: translateY(-3px);
      box-shadow: 0 4px 20px rgba(102, 126, 234, 0.4);
    }
  }

  .footer-bottom {
    max-width: 1200px;
    margin: 30px auto 0;
    padding-top: 20px;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    position: relative;
    z-index: 1;
  }

  .footer-bottom-text {
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.5);
    margin: 0;
  }

  .footer-bottom-links {
    display: flex;
    gap: 20px;
  }

  .footer-bottom-link {
    text-decoration: none;
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.85rem;
    transition: color 0.3s ease;

    &:hover {
      color: #667eea;
    }
  }

  @media (max-width: 992px) {
    .footer-content {
      grid-template-columns: repeat(2, 1fr);
      gap: 30px;
    }
  }

  @media (max-width: 576px) {
    padding: 30px 15px 15px;

    .footer-content {
      grid-template-columns: 1fr;
      gap: 25px;
    }

    .footer-bottom {
      flex-direction: column;
      text-align: center;
    }

    .footer-bottom-links {
      flex-wrap: wrap;
      justify-content: center;
    }

    .social-links {
      justify-content: center;
    }
  }
`;
