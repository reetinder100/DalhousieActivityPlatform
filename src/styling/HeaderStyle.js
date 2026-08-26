import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: fixed;
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 15px 20px;
  width: 100%;
  z-index: 1000;
  box-sizing: border-box;
  transition: all 0.3s ease;
  color: #fff;

  /* Dark overlay */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.2);
    z-index: -1;
    transition: background 0.3s ease;
  }

  /* Logo */
  .logo {
    font-size: 2rem;
    font-weight: 700;
    margin: 0;
    background: linear-gradient(135deg, #667eea, #764ba2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    transition: all 0.3s ease;
    cursor: pointer;
    text-align: center;

    &:hover {
      transform: scale(1.05);
    }
  }

  /* Nav */
  .nav-links {
    display: flex;
    gap: 30px;
    align-items: center;
  }

  .nav-link {
    text-decoration: none;
    color: inherit;
    position: relative;
    padding: 5px 0;
    opacity: 0.8;
    transition: all 0.3s ease;

    &:hover {
      opacity: 1;
      transform: translateY(-2px);
    }
  }

  .nav-text {
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    margin: 0;
    text-align: center;
  }

  /* Contact */
  .contact-btn {
    text-decoration: none;
    text-align: center;
    padding: 8px 24px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 30px;
    transition: all 0.3s ease;
    color: inherit;

    &:hover {
      background: rgba(255, 255, 255, 0.1);
      border-color: #fff;
      transform: scale(1.05);
      box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
    }
  }

  .contact-text {
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin: 0;
  }

  /* Scrolled */
  &.scrolled {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20px);
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    color: #000;
    height: 64px;

    &::before {
      background: transparent;
    }

    .logo {
      font-size: 1.5rem;
    }

    .contact-btn {
      border-color: rgba(0, 0, 0, 0.2);

      &:hover {
        border-color: #667eea;
        background: rgba(102, 126, 234, 0.05);
      }
    }
  }

  /* Hide/Show */
  &.hidden {
    transform: translateY(-100%);
  }

  &.visible {
    transform: translateY(0);
  }

  /* Responsive */
  @media (max-width: 768px) {
    height: 60px;
    padding: 10px 15px;
    justify-content: space-between;

    .logo {
      font-size: 1.2rem;
    }

    .nav-links {
      gap: 15px;
    }

    .nav-text,
    .contact-text {
      font-size: 0.8rem;
    }

    &.scrolled {
      height: 50px;

      .logo {
        font-size: 1rem;
      }
    }
  }

  @media (max-width: 480px) {
    .nav-links {
      gap: 10px;
    }

    .nav-text,
    .contact-text {
      font-size: 0.7rem;
    }
  }
`;
