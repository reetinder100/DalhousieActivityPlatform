import styled from "styled-components";

// ============ COMMON COMPONENTS ============

export const CardContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  box-sizing: border-box;

  @media (max-width: 1440px) {
    padding: 20px 40px;
  }

  @media (max-width: 768px) {
    padding: 20px 15px;
  }
`;

export const SectionTitle2 = styled.h3`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 30px;
  padding: 20px 0;
  position: relative;
  align-self: flex-start;
  width: 100%;
  color: #1a1a2e;
  box-sizing: border-box;

  @media (max-width: 768px) {
    font-size: 2rem;
    padding: 15px 0;
  }
`;

// ============ DASHBOARD CARD ============

export const DashboardCard = styled.div`
  flex: 1 1 280px;
  width: 100%;
  min-width: 250px;
  position: relative;
  background: transparent;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  img {
    width: 100%;
    height: 260px;
    object-fit: cover;
    display: block;
    transition: transform 0.4s ease;
    flex-shrink: 0;
  }

  &:hover img {
    transform: scale(1.05);
  }

  h3 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    font-size: clamp(0.95rem, 3vw, 1.4rem);
    font-weight: 700;
    color: white;
    text-shadow: 2px 2px 12px rgba(0, 0, 0, 0.9);
    text-align: center;
    z-index: 2;
    width: clamp(80%, 90%, 95%);
    padding: 0 clamp(10px, 2vw, 20px);
    letter-spacing: 0.5px;
    line-height: 1.3;
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0.45) 50%,
      rgba(0, 0, 0, 0.3) 100%
    );
    z-index: 1;
    pointer-events: none;
    transition: opacity 0.3s ease;
  }

  &:hover::after {
    opacity: 0.8;
  }

  /* Responsive with proportional scaling */
  @media (max-width: 1440px) {
    flex: 1 1 260px;
    min-width: 230px;
    border-radius: clamp(8px, 1vw, 12px);

    img {
      height: clamp(180px, 18vw, 240px);
    }
  }

  @media (max-width: 1024px) {
    flex: 1 1 240px;
    min-width: 200px;
    border-radius: clamp(6px, 0.8vw, 10px);

    img {
      height: clamp(160px, 16vw, 220px);
    }
  }

  @media (max-width: 768px) {
    flex: 1 1 100%;
    min-width: 100%;
    border-radius: clamp(6px, 0.8vw, 10px);

    img {
      height: clamp(150px, 25vw, 200px);
    }
  }

  @media (max-width: 480px) {
    flex: 0 0 calc(50% - 4px);
    min-width: 0;
    width: auto;
    border-radius: 8px;

    img {
      height: clamp(140px, 35vw, 180px);
    }

    &::after {
      height: 100%;
    }

    /* First child spans full width when there are odd number of items (3, 5, 7, etc.) */
    &:first-child:nth-last-child(odd) {
      flex: 0 0 100%;
      min-width: 100%;
      width: 100%;
    }

    /* Fallback for browsers that don't support nth-last-child(odd) */
    &:nth-child(1):nth-last-child(3),
    &:nth-child(1):nth-last-child(5),
    &:nth-child(1):nth-last-child(7),
    &:nth-child(1):nth-last-child(9) {
      flex: 0 0 100%;
      min-width: 100%;
      width: 100%;
    }
  }
`;

// ============ CARD STYLE 2 ============

export const Cardstyle2 = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  width: 100%;
  box-sizing: border-box;

  & > div {
    position: relative;
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    cursor: pointer;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
    }
  }

  & img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    display: block;
  }

  & h3 {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    margin: 0;
    font-size: 20px;
    font-weight: 600;
    color: white;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
    text-align: center;
    z-index: 2;
    width: 90%;
  }

  & > div::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 60%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
    z-index: 1;
  }

  /* Tablet: 2 columns */
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  /* Mobile: 3 columns, 2 rows */
  @media (max-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;

    & img {
      height: 150px; /* Smaller images for mobile */
    }

    & h3 {
      font-size: 14px; /* Smaller text for mobile */
      bottom: 12px;
    }

    & > div {
      border-radius: 8px;
    }
  }

  /* Very small screens: adjust further */
  @media (max-width: 420px) {
    gap: 8px;

    & img {
      height: 120px;
    }

    & h3 {
      font-size: 12px;
      bottom: 8px;
    }
  }
`;

// ============ CARD STYLE 3 ============

export const CardStyle3 = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 2fr 1fr;
  gap: 25px;
  width: 100%;
  height: 500px;
  box-sizing: border-box;

  & > div {
    position: relative;
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    cursor: pointer;

    &:hover img {
      transform: scale(1.1);
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transition: transform 0.5s;
    }
  }

  .left-item {
    grid-row: 1 / 4;
    grid-column: 1 / 2;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  & h3 {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    margin: 0;
    font-size: 20px;
    font-weight: 600;
    color: white;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
    text-align: center;
    z-index: 2;
    width: 90%;
  }

  & > div::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 60%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
    z-index: 1;
  }

  /* Tablet */
  @media (max-width: 1024px) {
    gap: 20px;
    height: 450px;
  }

  /* Mobile - 3 columns, 2 rows */
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto auto;
    gap: 12px;
    height: auto;
    padding: 0 10px;

    /* First child spans all 3 columns in first row */
    & > div:first-child {
      grid-column: 1 / 4;
      grid-row: 1 / 2;
      height: 200px;
      border-radius: 10px;
    }

    /* Other items (2nd, 3rd, 4th, etc.) go to second row */
    & > div:not(:first-child) {
      grid-row: 2 / 3;
      height: 150px;
      border-radius: 8px;
    }

    /* If there are more than 4 items, they will wrap to next rows */
    & > div:nth-child(n + 5) {
      grid-row: 3 / 4;
    }

    & img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }

    & h3 {
      font-size: 14px;
      bottom: 12px;
      width: 95%;
    }

    & > div::after {
      height: 50%;
    }

    /* Override .left-item for mobile */
    .left-item {
      grid-row: auto;
      grid-column: auto;
      height: auto;
    }

    .left-item img {
      height: 100%;
      width: 100%;
    }
  }

  /* Very small screens */
  @media (max-width: 480px) {
    gap: 8px;
    padding: 0 5px;

    & > div:first-child {
      height: 160px;
      border-radius: 8px;
    }

    & > div:not(:first-child) {
      height: 120px;
      border-radius: 6px;
    }

    & h3 {
      font-size: 12px;
      bottom: 8px;
    }
  }
`;

// ============ CARD STYLE 4 ============

export const CardStyle4 = styled.div`
  display: flex;
  align-items: center;
  background: #fee4f9;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 1400px;
  margin: 20px auto;
  min-height: 400px;
  box-sizing: border-box;

  .image-wrapper {
    flex: 0 0 60%;
    height: 100%;
    min-height: 400px;
    overflow: hidden;
    order: 2;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
  }

  // Image wrapper 2 - With clip-path (cone/triangle shape) - Image on LEFT
  .image-wrapper2 {
    flex: 0 0 60%;
    height: 100%;
    min-height: 400px;
    overflow: hidden;
    position: relative;
    order: 1;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;

      // Cone/Triangle shape
      -webkit-clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
      clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    }
  }

  // Combined content wrapper styles for both classes
  .content-wrapper,
  .content-wrapper2 {
    flex: 0 0 40%;
    padding: 40px 50px;
    background: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
    min-height: 400px;
    order: 2;

    h2 {
      font-size: 32px;
      font-weight: 700;
      color: #1a1a1a;
      margin: 0 0 15px 0;
      text-transform: capitalize;
      line-height: 1.2;
    }

    p {
      font-size: 18px;
      color: #555;
      line-height: 1.6;
      margin: 0 0 25px 0;
    }

    button {
      background: #2563eb;
      color: white;
      border: none;
      padding: 12px 30px;
      border-radius: 8px;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      align-self: flex-start;
      text-transform: capitalize;

      &:hover {
        background: #1d4ed8;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
      }
    }
  }

  // If you need specific styles for .content-wrapper2 only
  .content-wrapper2 {
    // Add any unique styles here
    // For example, different background color:
    // background: #f8f9fa;
  }

  // ===== RESPONSIVE: 1024px =====
  @media (max-width: 1024px) {
    flex-direction: column;
    margin: 20px 15px;

    .image-wrapper {
      flex: 0 0 100%;
      min-height: 300px;
      order: 1 !important;
    }

    .image-wrapper2 {
      flex: 0 0 100%;
      min-height: 300px;
      order: 1 !important;

      img {
        -webkit-clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
      }
    }

    .content-wrapper,
    .content-wrapper2 {
      flex: 0 0 100%;
      padding: 30px;
      order: 2 !important;
      min-height: auto;

      h2 {
        font-size: 28px;
      }

      p {
        font-size: 16px;
      }
    }
  }

  // ===== RESPONSIVE: 760px =====
  @media (max-width: 760px) {
    margin: 15px 10px;
    border-radius: 12px;
    min-height: 350px;

    .image-wrapper {
      min-height: 250px;

      img {
        object-fit: cover;
      }
    }

    .image-wrapper2 {
      min-height: 250px;

      img {
        -webkit-clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        object-fit: cover;
      }
    }

    .content-wrapper,
    .content-wrapper2 {
      padding: 25px 30px;
      min-height: auto;

      h2 {
        font-size: 24px;
        margin: 0 0 12px 0;
      }

      p {
        font-size: 15px;
        margin: 0 0 20px 0;
        line-height: 1.5;
      }

      button {
        padding: 10px 25px;
        font-size: 14px;
        align-self: flex-start;
      }
    }
  }

  // ===== RESPONSIVE: 420px =====
  @media (max-width: 420px) {
    margin: 10px 0px;
    border-radius: 10px;
    min-height: 300px;

    .image-wrapper {
      min-height: 200px;
    }

    .image-wrapper2 {
      min-height: 200px;

      img {
        -webkit-clip-path: none !important;
        clip-path: none !important;
      }
    }

    .content-wrapper,
    .content-wrapper2 {
      padding: 20px;
      min-height: auto;

      h2 {
        font-size: 20px;
        margin: 0 0 10px 0;
        line-height: 1.3;
      }

      p {
        font-size: 14px;
        margin: 0 0 16px 0;
        line-height: 1.5;
      }

      button {
        padding: 10px 20px;
        font-size: 13px;
        width: 100%;
        text-align: center;
        align-self: stretch;
        border-radius: 6px;
      }
    }
  }

  // ===== RESPONSIVE: 360px (extra small) =====
  @media (max-width: 360px) {
    margin: 8px 4px;
    border-radius: 8px;
    min-height: 250px;

    .image-wrapper {
      min-height: 150px;
    }

    .image-wrapper2 {
      min-height: 150px;

      img {
        -webkit-clip-path: none !important;
        clip-path: none !important;
      }
    }

    .content-wrapper,
    .content-wrapper2 {
      padding: 15px;

      h2 {
        font-size: 18px;
        margin: 0 0 8px 0;
      }

      p {
        font-size: 13px;
        margin: 0 0 14px 0;
      }

      button {
        padding: 8px 16px;
        font-size: 12px;
      }
    }
  }
`;
// ============ CARD STYLE 5 ============

export const CardStyle5 = styled.div`
  .container {
    width: 100%;
    margin: 0 auto;
    padding: 20px;
    background: #f1f3f7;
    min-height: 900px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-sizing: border-box;

    @media (max-width: 768px) {
      padding: 15px;
      min-height: auto;
    }
  }

  .container h3,
  .container .section-title {
    font-size: 2.5rem !important;
    font-weight: 800 !important;
    margin-bottom: 30px !important;
    padding: 10px 0 !important;
    padding-left: 40px !important;
    position: relative !important;
    align-self: flex-start !important;
    width: 100% !important;
    color: #1a1a2e !important;
    box-sizing: border-box !important;
    margin-left: 0 !important;

    @media (max-width: 768px) {
      font-size: 2rem !important;
      padding: 10px 0 !important;
      padding-left: 20px !important;
      margin-bottom: 20px !important;
    }

    @media (max-width: 480px) {
      font-size: 1.6rem !important;
      padding-left: 15px !important;
    }
  }

  .content-wrapper {
    background-image: url(${(props) => props.imageUrl});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 700px;
    width: 100%;
    max-width: 1400px;
    border-radius: 16px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    justify-items: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    gap: 20px;
    min-height: 400px;
    grid-template-areas: ${(props) => props.CardStyle5Layout};
    box-sizing: border-box;

    /* Dark overlay */
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.5) 0%,
        rgba(0, 0, 0, 0.2) 20%,
        rgba(0, 0, 0, 0.5) 100%
      );
      z-index: 0;
      border-radius: 16px;
    }

    /* Position elements */
    .position1,
    .position2,
    .position3,
    .position4,
    .position5,
    .position6,
    .position7,
    .position8,
    .position9,
    .position10,
    .position11 {
      position: relative;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
    }

    .position1 {
      grid-area: position1;
    }
    .position2 {
      grid-area: position2;
    }
    .position3 {
      grid-area: position3;
    }
    .position4 {
      grid-area: position4;
    }
    .position5 {
      grid-area: position5;
    }
    .position6 {
      grid-area: position6;
    }
    .position7 {
      grid-area: position7;
    }
    .position8 {
      grid-area: position8;
    }
    .position9 {
      grid-area: position9;
    }
    .position10 {
      grid-area: position10;
    }
    .position11 {
      grid-area: position11;
      position: relative;
    }

    @media (max-width: 1440px) {
      width: 100%;
      max-width: 100%;
    }

    @media (max-width: 1024px) {
      height: 600px;
      gap: 15px;
    }

    @media (max-width: 768px) {
      height: auto;
      min-height: 500px;
      gap: 12px;
      padding: 20px;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto auto auto auto auto;
      grid-template-areas:
        "position1 position1"
        "position2 position3"
        "position4 position5"
        "position6 position7"
        "position8 position9"
        "position10 position11";
      border-radius: 12px;
      overflow: visible;

      &::before {
        border-radius: 12px;
      }

      .position1,
      .position2,
      .position3,
      .position4,
      .position5,
      .position6,
      .position7,
      .position8,
      .position9,
      .position10,
      .position11 {
        width: 100%;
        height: auto;
        min-height: 50px;
        padding: 5px;
      }

      .position1 {
        grid-area: position1;
        width: 100%;
      }

      .position11 {
        position: relative;
        z-index: 5;
      }

      .inner-button {
        width: 100%;
        text-align: center;
        font-size: 12px;
        padding: 10px 15px;
        white-space: normal;
        word-break: break-word;
      }

      .button1 {
        font-size: 16px;
        padding: 10px 15px;
        width: 100%;
        text-align: center;
      }

      .dropdown-menu {
        min-width: 100%;
        left: 0;
        right: 0;
        transform: none;
        position: absolute;
        top: calc(100% + 5px);
        z-index: 1000;
        border-radius: 10px;
      }
    }

    @media (max-width: 480px) {
      gap: 8px;
      padding: 12px;
      min-height: 400px;

      .inner-button {
        font-size: 10px;
        padding: 8px 10px;
      }

      .button1 {
        font-size: 14px;
        padding: 8px 10px;
      }

      .dropdown-menu {
        top: calc(100% + 4px);
        border-radius: 8px;
      }

      .dropdown-item {
        padding: 10px 16px;
        font-size: 13px;
        min-height: 44px;
      }
    }
  }

  /* Inner button styles */
  .inner-button {
    background: transparent !important;
    color: white;
    border: 2px solid rgba(255, 255, 255, 0.8);
    padding: 12px 28px;
    border-radius: 50px;
    font-weight: bold;
    font-size: 12px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(2px);
    white-space: nowrap;

    &:hover {
      background: rgba(255, 255, 255, 0.2) !important;
      transform: scale(1.05);
      border-color: white;
    }

    &:active {
      transform: scale(0.95);
    }
  }

  /* Dropdown toggle button */
  .button1 {
    padding: 12px 28px;
    background: transparent !important;
    color: white;
    font-weight: bold;
    font-size: 30px;
    cursor: pointer;
    transition: all 0.3s ease;
    white-space: nowrap;
    border: none;
    position: relative;
    z-index: 2;

    &:hover {
      transform: scale(1.05);
    }

    &:active {
      transform: scale(0.95);
    }
  }

  /* Dropdown menu */
  .dropdown-menu {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    min-width: 220px;
    background: white;
    border-radius: 12px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    padding: 8px 0;
    animation: dropdownFadeIn 0.2s ease;
    overflow: hidden;
    border: 1px solid rgba(0, 0, 0, 0.05);
    z-index: 100;

    @keyframes dropdownFadeIn {
      from {
        opacity: 0;
        transform: translateX(-50%) translateY(-10px);
      }
      to {
        opacity: 1;
        transform: translateX(-50%) translateY(0);
      }
    }
  }

  /* Dropdown items */
  .dropdown-item {
    background: white;
    color: #333;
    border: none;
    padding: 12px 24px;
    width: 100%;
    text-align: left;
    cursor: pointer;
    transition: all 0.2s ease;
    font-size: 14px;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 10px;

    &:hover {
      background: #f5f5f5;
    }

    &:active {
      color: #eb3030;
      background: #f0f0f0;
    }

    &:not(:last-child) {
      border-bottom: 1px solid #f0f0f0;
    }

    @media (max-width: 768px) {
      padding: 14px 18px;
      font-size: 14px;
      min-height: 48px;
    }
  }
`;

// ============ FAQ WRAPPER ============

export const FAQWrapper = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 20px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  font-family:
    -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
    sans-serif;
  box-sizing: border-box;

  .faq-header {
    text-align: center;
    margin-bottom: 40px;

    h2 {
      font-size: 2.2rem;
      font-weight: 700;
      color: #1a1a2e;
      margin-bottom: 10px;
    }

    p {
      font-size: 1rem;
      color: #666;
      margin: 0;
    }
  }

  .faq-container {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .faq-item {
    background: #f8f9fa;
    border-radius: 12px;
    overflow: hidden;
    transition: all 0.3s ease;
    border: 1px solid transparent;

    &:hover {
      border-color: #e9ecef;
    }

    &.active {
      background: #ffffff;
      border-color: #4a90d9;
      box-shadow: 0 2px 12px rgba(74, 144, 217, 0.1);
    }
  }

  .faq-question {
    width: 100%;
    padding: 18px 24px;
    background: none;
    border: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 500;
    color: #1a1a2e;
    transition: all 0.3s ease;
    text-align: left;
    gap: 20px;
    box-sizing: border-box;

    &:hover {
      background: rgba(0, 0, 0, 0.02);
    }

    .question-text {
      flex: 1;
      line-height: 1.4;
    }

    .faq-icon {
      font-size: 1.5rem;
      font-weight: 300;
      color: #4a90d9;
      flex-shrink: 0;
      width: 28px;
      height: 28px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(74, 144, 217, 0.1);
      border-radius: 50%;
      transition: all 0.3s ease;
    }

    &:hover .faq-icon {
      background: rgba(74, 144, 217, 0.2);
      transform: rotate(90deg);
    }
  }

  .faq-answer {
    padding: 0 24px 20px;
    animation: slideDown 0.3s ease;

    p {
      margin: 0;
      font-size: 0.95rem;
      line-height: 1.7;
      color: #444;
      border-top: 1px solid #e9ecef;
      padding-top: 16px;
    }
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    padding: 24px 16px;

    .faq-header h2 {
      font-size: 1.8rem;
    }

    .faq-header p {
      font-size: 0.9rem;
    }

    .faq-question {
      font-size: 0.95rem;
      padding: 16px 20px;
    }

    .faq-question .faq-icon {
      width: 24px;
      height: 24px;
      font-size: 1.2rem;
    }

    .faq-answer {
      padding: 0 20px 16px;

      p {
        font-size: 0.9rem;
      }
    }
  }

  @media (max-width: 480px) {
    padding: 16px 12px;

    .faq-question {
      padding: 14px 16px;
      font-size: 0.85rem;
      gap: 12px;
    }

    .faq-answer {
      padding: 0 16px 14px;

      p {
        font-size: 0.85rem;
        padding-top: 12px;
      }
    }
  }
`;
