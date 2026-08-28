import React, { useState } from "react";

import {
  ContactContainer,
  ContactWrapper,
  ContactInfoSection,
  ContactInfoText,
  ContactInfoGrid,
  ContactInfoCard,
  IconWrapper,
  InfoContent,
  InfoTitle,
  InfoText,
  FormSection,
  FormWrapper,
  FormTitle,
  FormSuccessMessage,
  FormRow,
  FormGroup,
  FormLabel,
  FormInput,
  FormTextarea,
  SubmitButton,
  MapSection,
  MapContainer,
} from "../styling/ContactUsStyling";
import {
  HeroSection2,
  HeroContent,
  SectionTitle,
} from "../styling/DashboardStyle";

export const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);

    setFormStatus({
      submitted: true,
      success: true,
      message: "Thank you! We'll get back to you soon.",
    });

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setFormStatus({
        submitted: false,
        success: false,
        message: "",
      });
    }, 3000);
  };

  const handleContactClick = (type) => {
    if (type === "email") {
      window.location.href = "mailto:info@dhauladharadventure.com";
    } else if (type === "phone") {
      window.location.href = "tel:+919876543210";
    }
  };

  return (
    <div>
      <HeroSection2>
        <HeroContent>
          <h1>Contact Us</h1>
          <p>Get in touch with us for any queries or assistance</p>
        </HeroContent>
      </HeroSection2>

      <ContactContainer>
        <ContactWrapper>
          {/* Contact Info Section */}
          <ContactInfoSection>
            <SectionTitle style={{ marginLeft: 0 }}>Get in Touch</SectionTitle>
            <ContactInfoText>
              Have questions about your trip to Dalhousie? We're here to help!
              Reach out to us anytime.
            </ContactInfoText>

            <ContactInfoGrid>
              <ContactInfoCard>
                <IconWrapper>📍</IconWrapper>
                <InfoContent>
                  <InfoTitle>Address</InfoTitle>
                  <InfoText>
                    Dalhousie, Himachal Pradesh
                    <br />
                    India - 176304
                  </InfoText>
                </InfoContent>
              </ContactInfoCard>

              <ContactInfoCard>
                <IconWrapper>📞</IconWrapper>
                <InfoContent>
                  <InfoTitle>Phone</InfoTitle>
                  <InfoText
                    onClick={() => handleContactClick("phone")}
                    style={{ cursor: "pointer", color: "#667eea" }}
                  >
                    +91 98765 43210
                  </InfoText>
                </InfoContent>
              </ContactInfoCard>

              <ContactInfoCard>
                <IconWrapper>✉️</IconWrapper>
                <InfoContent>
                  <InfoTitle>Email</InfoTitle>
                  <InfoText
                    onClick={() => handleContactClick("email")}
                    style={{ cursor: "pointer", color: "#667eea" }}
                  >
                    info@dhauladharadventure.com
                  </InfoText>
                </InfoContent>
              </ContactInfoCard>

              <ContactInfoCard>
                <IconWrapper>🕐</IconWrapper>
                <InfoContent>
                  <InfoTitle>Working Hours</InfoTitle>
                  <InfoText>
                    Mon - Sat: 9:00 AM - 8:00 PM
                    <br />
                    Sunday: Closed
                  </InfoText>
                </InfoContent>
              </ContactInfoCard>
            </ContactInfoGrid>
          </ContactInfoSection>

          {/* Form Section */}
          <FormSection>
            <FormWrapper onSubmit={handleSubmit}>
              <FormTitle>Send Us a Message</FormTitle>

              {formStatus.submitted && (
                <FormSuccessMessage success={formStatus.success}>
                  {formStatus.message}
                </FormSuccessMessage>
              )}

              <FormRow>
                <FormGroup>
                  <FormLabel htmlFor="name">Full Name *</FormLabel>
                  <FormInput
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </FormGroup>

                <FormGroup>
                  <FormLabel htmlFor="email">Email Address *</FormLabel>
                  <FormInput
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                  />
                </FormGroup>
              </FormRow>

              <FormRow>
                <FormGroup>
                  <FormLabel htmlFor="phone">Phone Number</FormLabel>
                  <FormInput
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                  />
                </FormGroup>

                <FormGroup>
                  <FormLabel htmlFor="subject">Subject *</FormLabel>
                  <FormInput
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Enter subject"
                  />
                </FormGroup>
              </FormRow>

              <FormGroup>
                <FormLabel htmlFor="message">Message *</FormLabel>
                <FormTextarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Write your message here..."
                />
              </FormGroup>

              <SubmitButton type="submit">Send Message</SubmitButton>
            </FormWrapper>
          </FormSection>

          {/* Map Section */}
          <MapSection>
            <SectionTitle style={{ marginLeft: 0, marginBottom: "20px" }}>
              Find Us Here
            </SectionTitle>
            <MapContainer>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27070.42974798261!2d75.9756348!3d32.5303823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b83e8b900b1b3%3A0x4a8d5c4f5c2b6b6b!2sDalhousie%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1698765432100!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dalhousie Location"
              />
            </MapContainer>
          </MapSection>
        </ContactWrapper>
      </ContactContainer>
    </div>
  );
};

export default ContactUs;
