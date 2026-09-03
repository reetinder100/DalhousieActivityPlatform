import { useState } from "react";
import {
  Overlay,
  ModalContainer,
  CloseButton,
  Title,
  Content,
  ModalText,
  InfoCard,
  InfoRow,
  InfoIcon,
  InfoLabel,
  InfoValue,
  Footer,
  CancelButton,
  ConfirmButton,
} from "../styling/PriceModalStyle";

import { dalhousieDistances } from "../data/PricingData";

const calculatePrice = (destination, carType = "sedan") => {
  if (!destination?.trim()) return { error: "Please select a destination" };

  let dest = dalhousieDistances.find(
    (d) => d.name.toLowerCase() === destination.toLowerCase().trim(),
  );

  if (!dest) {
    const mainName = destination.split(" - ")[0].trim();
    dest = dalhousieDistances.find(
      (d) => d.name.toLowerCase() === mainName.toLowerCase(),
    );
  }

  if (!dest) {
    dest = dalhousieDistances.find(
      (d) =>
        destination.toLowerCase().includes(d.name.toLowerCase()) ||
        d.name.toLowerCase().includes(destination.toLowerCase()),
    );
  }

  if (!dest) return { error: `No pricing found for "${destination}"` };

  const distanceKm = dest.distanceKm;
  const distanceText = dest.distanceText;
  const time = dest.time;

  let finalPrice;
  let basePrice;
  let carTypeLabel;

  if (carType === "suv") {
    carTypeLabel = "SUV (6-Seater)";

    if (distanceKm < 6) {
      finalPrice = 600;
      basePrice = 600;
    } else if (distanceKm >= 6 && distanceKm < 30) {
      const calculated = Math.round((distanceKm / 10) * 105 * 4 * 2);
      finalPrice = calculated;
      basePrice = calculated;
    } else if (distanceKm >= 30) {
      const calculated = Math.round((distanceKm / 10) * 105 * 3);
      finalPrice = calculated;
      basePrice = calculated;
    }
  } else {
    carTypeLabel = "Sedan (4-Seater)";

    if (distanceKm < 6) {
      finalPrice = 500;
      basePrice = 500;
    } else if (distanceKm >= 6 && distanceKm < 30) {
      const calculated = Math.round((distanceKm / 10) * 105 * 4.5 * 2);
      finalPrice = calculated;
      basePrice = calculated;
    } else if (distanceKm >= 30) {
      const calculated = Math.round((distanceKm / 10) * 105 * 3.5);
      finalPrice = calculated;
      basePrice = calculated;
    }
  }

  return {
    distance: distanceText,
    time: time,
    finalPrice: `₹${finalPrice}`,
    carType: carTypeLabel,
    basePrice: `₹${basePrice}`,
    distanceKm: distanceKm,
  };
};

const PriceCalculateModal = ({
  isOpen,
  onClose,
  title,
  selectedActivity = "",
  onConfirm = () => {},
  confirmText = "Proceed to Book",
  cancelText = "Cancel",
  showFooter = true,
  baseLocation = "Dalhousie Town",
  carType = "sedan",
}) => {
  const [selectedCarType, setSelectedCarType] = useState(carType);

  if (!isOpen) return null;

  const price = calculatePrice(selectedActivity, selectedCarType);

  const handleClose = () => {
    if (typeof onClose === "function") onClose();
  };

  const handleConfirm = () => {
    if (typeof onConfirm === "function") onConfirm();
    handleClose();
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) handleClose();
  };

  if (price.error) {
    return (
      <Overlay onClick={handleOverlayClick}>
        <ModalContainer onClick={(e) => e.stopPropagation()}>
          <CloseButton onClick={handleClose}>×</CloseButton>
          <Title>Location Not Found</Title>
          <Content>
            <ModalText>{price.error}</ModalText>
          </Content>
          <Footer>
            <CancelButton onClick={handleClose}>Close</CancelButton>
          </Footer>
        </ModalContainer>
      </Overlay>
    );
  }

  return (
    <Overlay onClick={handleOverlayClick}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={handleClose}>×</CloseButton>
        {title && <Title>{title}</Title>}
        <Content>
          <ModalText>
            Confirm booking for <strong>{selectedActivity}</strong>
          </ModalText>

          <InfoCard>
            <InfoRow>
              {price.distanceKm < 30 && (
                <InfoLabel>
                  <span style={{ marginRight: "4px" }}>🔁</span> Round Trip
                </InfoLabel>
              )}
            </InfoRow>
            {/* Car Type Selector */}
            <InfoRow>
              <InfoIcon>🚗</InfoIcon>
              <div style={{ flex: 1 }}>
                <InfoLabel>Select Car Type</InfoLabel>
                <div style={{ display: "flex", gap: "10px", marginTop: "4px" }}>
                  <button
                    onClick={() => setSelectedCarType("sedan")}
                    style={{
                      padding: "6px 16px",
                      borderRadius: "6px",
                      border:
                        selectedCarType === "sedan"
                          ? "2px solid #4CAF50"
                          : "1px solid #ddd",
                      background:
                        selectedCarType === "sedan" ? "#e8f5e9" : "white",
                      cursor: "pointer",
                      fontSize: "13px",
                      fontWeight: selectedCarType === "sedan" ? "600" : "400",
                      color: selectedCarType === "sedan" ? "#2e7d32" : "#333",
                      transition: "all 0.2s",
                    }}
                  >
                    Sedan (4-Seater)
                  </button>
                  <button
                    onClick={() => setSelectedCarType("suv")}
                    style={{
                      padding: "6px 16px",
                      borderRadius: "6px",
                      border:
                        selectedCarType === "suv"
                          ? "2px solid #4CAF50"
                          : "1px solid #ddd",
                      background:
                        selectedCarType === "suv" ? "#e8f5e9" : "white",
                      cursor: "pointer",
                      fontSize: "13px",
                      fontWeight: selectedCarType === "suv" ? "600" : "400",
                      color: selectedCarType === "suv" ? "#2e7d32" : "#333",
                      transition: "all 0.2s",
                    }}
                  >
                    SUV (6-Seater)
                  </button>
                </div>
              </div>
            </InfoRow>

            <InfoRow>
              <InfoIcon>📍</InfoIcon>
              <div>
                <InfoLabel>Distance from {baseLocation}</InfoLabel>
                <InfoValue>{price.distance}</InfoValue>
              </div>
            </InfoRow>

            <InfoRow last>
              <InfoIcon>💰</InfoIcon>
              <div>
                <InfoLabel>Estimated Cost</InfoLabel>
                <InfoValue style={{ fontSize: "18px", color: "#4CAF50" }}>
                  {price.finalPrice}
                </InfoValue>
                <InfoLabel
                  style={{ fontSize: "11px", color: "#888", marginTop: "2px" }}
                >
                  {price.carType}
                </InfoLabel>
              </div>
            </InfoRow>
          </InfoCard>
        </Content>

        {showFooter && (
          <Footer>
            <CancelButton onClick={handleClose}>{cancelText}</CancelButton>
          </Footer>
        )}
      </ModalContainer>
    </Overlay>
  );
};

export default PriceCalculateModal;
