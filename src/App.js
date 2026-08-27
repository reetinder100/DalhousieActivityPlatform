import ContactUs from "./Webpages/ContactUs";
import { Header } from "./Header&Footer/Header";
import ScrollToTop from "./component/ScrolltoTop";
import { Dashboard } from "./Webpages/Dashboard";
import ThingsToDo from "./Webpages/ThingstoDo";
import { Routes, Route } from "react-router-dom";
import { Footer } from "./Header&Footer/Footer";
import ContentData from "./component/CardforChildren";
import BikeRentalSection from "./component/Bikerental";
import BeforeChildrenContentData from "./component/BeforeChildrenCard";
import { outdoorActivities } from "./data/thingstoDoData";
import { CulturalExperiences } from "./data/CulturealExperiencesData";
import { NatureWildlifeData } from "./data/NatureData";
import { FoodDiningData } from "./data/FoodData";
import { ShoppingData } from "./data/ShoppingData";
import { SportsRecreationData } from "./data/SportsData";
import { FamilyPlacesData } from "./data/FamilyandPicnicData";
import { offbeatPlacesData } from "./data/OffbeatPlacesData";
import { hikingTrailsData } from "./data/HinkingTrailsData";
import {
  churchesData,
  historyOfDalhousie,
  templesData,
} from "./data/Churches-Temples-HistoryData";
import {
  chambyaliCultureData,
  gaddiCultureData,
} from "./data/CulturealExperiencesData";
import { localFoodData } from "./data/FoodData";
import {
  floraFaunaData,
  sanctuaryAreasData,
  waterfallsData,
} from "./data/Sanctuary-FloraFauna-WaterfallData";
import { popularSpotsData1, popularSpotsData } from "./data/PopularSpotData";
import GlobalStyles from "./styling/BorderBoxGlobal";
import TrailsGuide from "./component/Adventuredisplay";

import { hikingTrailsDalhousie } from "./data/chooseactivitydata/AdventureActivityData";
import { campingSitesDalhousie } from "./data/chooseactivitydata/campingdata";
import { paraglidingSitesDalhousie } from "./data/chooseactivitydata/paraglidingdata";
import { ropeActivitiesDalhousie } from "./data/chooseactivitydata/Ropedata";
import { riverRaftingChamba } from "./data/chooseactivitydata/RiverraftingData";
import { mountainBikingDalhousie } from "./data/chooseactivitydata/mountainbikingdata";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Header></Header>

      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/things-to-do" element={<ThingsToDo />} />
        <Route
          path="/activities/Outdoor-Adventure"
          element={
            <BeforeChildrenContentData
              data={outdoorActivities}
              title="Adventure Activities"
              subtitle=""
            />
          }
        />
        <Route
          path="/dashboard/Chase-your-next-adventure"
          element={
            <BeforeChildrenContentData
              data={outdoorActivities}
              title="Adventure Activities"
              subtitle=""
            />
          }
        />
        <Route
          path="/activities/Cultural-Experiences"
          element={
            <BeforeChildrenContentData
              data={CulturalExperiences}
              title="Cultural Experiences"
              subtitle=""
              showButton={false}
            />
          }
        />

        <Route
          path="/activities/Nature-Wildlife"
          element={
            <ContentData
              Data={NatureWildlifeData}
              title="Explore about Nature and Wildlife"
              subtitle=""
              showExploreButton={false}
            />
          }
        />

        <Route
          path="/activities/Food-Dining"
          element={
            <BeforeChildrenContentData
              data={FoodDiningData}
              title="Food & Dining"
              subtitle=""
              showButton={false}
            />
          }
        />
        <Route
          path="/activities/Shopping"
          element={
            <ContentData
              Data={ShoppingData}
              title="Shopping"
              subtitle=""
              showExploreButton={false}
            />
          }
        />
        <Route
          path="/activities/Sports-Recreation"
          element={
            <ContentData
              Data={SportsRecreationData}
              title="Sports & Recreation"
              subtitle=""
              showExploreButton={false}
            />
          }
        />
        <Route
          path="/things-to-do/Family-FriendlyPlaces-Explore"
          element={
            <ContentData
              Data={FamilyPlacesData}
              title="Family Friendly Places"
              subtitle=""
            />
          }
        />
        <Route
          path="/things-to-do/Picnic-Spots"
          element={
            <ContentData
              Data={FamilyPlacesData}
              title="Picnic Spots"
              subtitle=""
            />
          }
        />
        <Route
          path="/things-to-do/Offbeat-places"
          element={
            <ContentData
              Data={offbeatPlacesData}
              title="Offbeat Places"
              subtitle=""
            />
          }
        />
        <Route
          path="/things-to-do/Hiking-trails"
          element={
            <ContentData
              Data={hikingTrailsData}
              title="Hiking Trails"
              subtitle=""
            />
          }
        />
        <Route
          path="/things-to-do/Churches"
          element={
            <ContentData Data={churchesData} title="Churches" subtitle="" />
          }
        />
        <Route
          path="/things-to-do/History"
          element={
            <ContentData
              Data={historyOfDalhousie}
              title="History of Dalhousie"
              subtitle=""
              showExploreButton={false}
            />
          }
        />
        <Route
          path="/things-to-do/Temples"
          element={
            <ContentData Data={templesData} title="Temples" subtitle="" />
          }
        />
        <Route
          path="/things-to-do/Chambyali-Culture"
          element={
            <ContentData
              Data={chambyaliCultureData}
              title="Chambyali Culture"
              subtitle=""
              showExploreButton={false}
            />
          }
        />
        <Route
          path="/things-to-do/Gadi-Culture"
          element={
            <ContentData
              Data={gaddiCultureData}
              title="Gaddi Culture"
              subtitle=""
              showExploreButton={false}
            />
          }
        />
        <Route
          path="/things-to-do/Local-Food"
          element={
            <ContentData
              Data={localFoodData}
              title="Local Food"
              subtitle=""
              showExploreButton={false}
            />
          }
        />
        <Route
          path="/things-to-do/Waterfalls"
          element={
            <ContentData Data={waterfallsData} title="Waterfalls" subtitle="" />
          }
        />
        <Route
          path="/things-to-do/Flora-Fauna"
          element={
            <ContentData
              Data={floraFaunaData}
              title="Flora & Fauna"
              subtitle=""
              showExploreButton={false}
            />
          }
        />
        <Route
          path="/things-to-do/Sanctuary-Areas"
          element={
            <ContentData
              Data={sanctuaryAreasData}
              title="Sanctuary Areas"
              subtitle=""
              showExploreButton={false}
            />
          }
        />
        <Route
          path="/dashboard/Devotional-Delights"
          element={
            <ContentData
              Data={templesData}
              title="Devotional Delights"
              subtitle=""
            />
          }
        />
        <Route
          path="dashboard/immerse-yourself-in-culture"
          element={
            <ContentData
              Data={CulturalExperiences}
              title="Immerse Yourself in Culture"
              subtitle=""
              showExploreButton={false}
            />
          }
        />
        <Route
          path="dashboard/Book-a-taxi"
          element={
            <ContentData
              Data={popularSpotsData}
              title="Book a Taxi"
              subtitle=""
            />
          }
        />
        <Route
          path="dashboard/popular-spots"
          element={
            <BeforeChildrenContentData
              data={popularSpotsData1}
              title="Popular Spots"
              subtitle=""
              buttonText="Book a Taxi for"
            />
          }
        />
        <Route
          path="/popular-locations"
          element={
            <ContentData
              Data={popularSpotsData}
              title="Popular Locations"
              subtitle=""
            />
          }
        />
        <Route
          path="/dashboard/Book-a-rental"
          element={
            <BikeRentalSection title="Rent a Bike in Dalhousie" subtitle="" />
          }
        />
        {/* Hiking Trails */}
        <Route
          path="/activities/Hiking-Trails"
          element={
            <TrailsGuide
              trails={hikingTrailsDalhousie}
              title="Dalhousie Hiking Trails"
              subtitle=""
            />
          }
        />

        {/* Camping Sites */}
        <Route
          path="/activities/Camping-Sites"
          element={
            <TrailsGuide
              trails={campingSitesDalhousie}
              title="Camping Sites in Dalhousie"
              subtitle=""
            />
          }
        />

        {/* Paragliding */}
        <Route
          path="/activities/Paragliding"
          element={
            <TrailsGuide
              trails={paraglidingSitesDalhousie}
              title="Paragliding in & around Dalhousie"
              subtitle=""
            />
          }
        />

        {/* Rope Activities */}
        <Route
          path="/activities/Rope-Activity"
          element={
            <TrailsGuide
              trails={ropeActivitiesDalhousie}
              title="Rope Activities at Panchpula, Dalhousie"
              subtitle=""
            />
          }
        />

        {/* River Rafting */}
        <Route
          path="/activities/River-Rafting"
          element={
            <TrailsGuide
              trails={riverRaftingChamba}
              title="River Rafting in Chamba"
              subtitle=""
            />
          }
        />

        {/* Mountain Biking */}
        <Route
          path="/activities/Mountain-Biking"
          element={
            <TrailsGuide
              trails={mountainBikingDalhousie}
              title="Mountain Biking in Dalhousie & Chamba"
              subtitle=""
            />
          }
        />
        <Route
          path="/things-to-do/Mountain-Biking"
          element={
            <TrailsGuide
              trails={mountainBikingDalhousie}
              title="Mountain Biking in Dalhousie & Chamba"
              subtitle=""
            />
          }
        />

        <Route path="/contact" element={<ContactUs />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
