export const paraglidingSitesDalhousie = [
  {
    id: 1,
    title: "Paragliding at Khajjiar",
    description:
      "Known as the 'Mini Switzerland of India,' Khajjiar is the premier paragliding destination near Dalhousie. The vast meadow is surrounded by thick deodar forests and offers stunning views of the Dhauladhar range. Taking off from this picturesque spot allows you to soar like a bird over green fields and serene landscapes, making it perfect for both beginners and experienced flyers.",
    imageContent: "🪂",
    image: "/images/images2/Dal-proj-img-paragliding.jpg", // Added image path
    alt: "Paragliding over the lush green meadows of Khajjiar near Dalhousie.", // Added alt text
    reverse: false,
    // TrailGuide specific fields:
    fields: {
      length: "N/A",
      difficulty: "Beginner to Pro (Tandem flights available)",
      duration: "10-15 minutes (joy ride)",
      elevationGain: "~1,920m",
      bestSeason: "September to November, January to June",
      trailType: "N/A",
    },
    activityConfig: {
      // Additional activity-specific config if needed
    },
    renderDetails: null, // or pass custom render function if needed
    onBookCab: null, // or pass booking function
    onBookGuide: null, // or pass booking function
    getProTip: null, // or pass pro tip function
    bookingButtonText: "Book Now", // or custom text
    // Keeping your original fields for reference
    tandem: "Available",
    altitude: "~1,920 m",
    activityType: "Paragliding",
  },
];
