import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";

import MainLayout from "./layouts/MainLayout";
import ProfileLayout from "./layouts/ProfileLayout/ProfileLayout";
import DashboardLayout from "./layouts/DashboardLayout/DashboardLayout";
import NotificationsLayout from "./layouts/NotificationsLayout/NotificationsLayout";

import PageNotFound from "./pages/PageNotFound/PageNotFound";

import LogIn from "./pages/LogIn/LogIn";
import Register from "./pages/Register/Register";
import ResetPassword from "./pages/ResetPassword/ResetPassword";

import ViewProfile from "./pages/Profile/ViewProfile";
import ProfileOrders from "./pages/Profile/ProfileOrders";
import ProfileMedicines from "./pages/Profile/ProfileMedicines";
import Articles from "./pages/Profile/Articles";

import Home from "./pages/Home/Home";
import Doctors from "./pages/Doctors/Doctors";
import Medicines from "./pages/Medicines/Medicines";
import Hospitals from "./pages/Hospitals/Hospitals";
import Pharmacies from "./pages/Pharmacies/Pharmacies";
import Pharmacy from "./pages/Pharmacy/Pharmacy";
import PharmacyMedicines from "./pages/PharmacyMedicines/PharmacyMedicines";
import Blog from "./pages/Blog/Blog";
import Article from "./pages/Article/Article";
import Charities from "./pages/Charities/Charities";
import Charity from "./pages/Charity/Charity";
import OrderMessage from "./pages/Orders/OrderMessage";
import AboutUs from "./pages/AboutUs/AboutUs";

import DashMain from "./pages/Dashboard/DashMain/DashMain";
import DashDoctors from "./pages/Dashboard/DashDoctors";
import DashMedicines from "./pages/Dashboard/DashMedicines";
import DashPharmacies from "./pages/Dashboard/DashPharmacies";
import DashHospitals from "./pages/Dashboard/DashHospitals";
import DashBlog from "./pages/Dashboard/DashBlog";
import DashCharities from "./pages/Dashboard/DashCharities";

import AddNewDoctor from "./pages/AddItems/AddNewDoctor";
import AddNewMedicine from "./pages/AddItems/AddNewMedicine";
import AddNewHospital from "./pages/AddItems/AddNewHospital";
import AddNewPharmacy from "./pages/AddItems/AddNewPharmacy";
import AddNewCharity from "./pages/AddItems/AddNewCharity";
import AddNewArticle from "./pages/AddItems/AddNewArticle";

import { fetchDoctors } from "./store/slices/DoctorSlice";
import { fetchMedicines } from "./store/slices/medicineSlice";
import { fetchHospitals } from "./store/slices/hospitalSlice";
import { fetchPharmacies } from "./store/slices/pharmacySlice";
import { fetchArticles } from "./store/slices/articleSlice";
import { fetchCharities } from "./store/slices/charitySlice";

import ViewDoctorDash from "./pages/ViewItems/ViewDoctorDash";
import ViewMedicineDash from "./pages/ViewItems/ViewMedicineDash";
import ViewHospitalDash from "./pages/ViewItems/ViewHospitalDash";
import ViewPharmacyDash from "./pages/ViewItems/ViewPharmacyDash";
import ViewArticleDash from "./pages/ViewItems/ViewArticleDash";
import ViewCharityDash from "./pages/ViewItems/ViewCharityDash";

import EditDoctor from "./pages/EditItem/EditDoctor";
import EditMedicine from "./pages/EditItem/EditMedicine";
import EditHospital from "./pages/EditItem/EditHospital";
import EditPharmacy from "./pages/EditItem/EditPharmacy";
import EditArticle from "./pages/EditItem/EditArticle";
import EditCharity from "./pages/EditItem/EditCharity";
import { fetchUsers } from "./store/slices/usersSlice";
import DashUsers from "./pages/Dashboard/DashUsers";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchDoctors());
    dispatch(fetchMedicines());
    dispatch(fetchHospitals());
    dispatch(fetchPharmacies());
    dispatch(fetchArticles());
    dispatch(fetchCharities());
  }, [dispatch]);

  return (
    <>
      <Routes>
        {/* layout without header and footer */}
        <Route path="login" element={<LogIn />} />
        <Route path="register" element={<Register />} />
        <Route path="reset-password" element={<ResetPassword />} />
        {/* main layout with header and footer */}
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<Home />} />
          <Route path="doctors" element={<Doctors />} />
          <Route path="medicines" element={<Medicines />} />
          <Route path="hospitals" element={<Hospitals />} />
          <Route path="pharmacies" element={<Pharmacies />} />
          <Route path="pharmacies/:pharmacyId" element={<Pharmacy />} />
          <Route
            path="pharmacies/:pharmacyId/medicines"
            element={<PharmacyMedicines />}
          />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:articleId" element={<Article />} />
          <Route path="charities" element={<Charities />} />
          <Route path="charities/:charityId" element={<Charity />} />
          <Route path="about-us" element={<AboutUs />} />
          {/* modify items pages */}
          <Route path="add-new-doctor" element={<AddNewDoctor />} />
          <Route path="add-new-medicine" element={<AddNewMedicine />} />
          <Route path="add-new-hospital" element={<AddNewHospital />} />
          <Route path="add-new-pharmacy" element={<AddNewPharmacy />} />
          <Route path="add-new-charity" element={<AddNewCharity />} />
          <Route path="add-new-article" element={<AddNewArticle />} />
          {/* errors page */}
          <Route path="*" element={<PageNotFound />} />
        </Route>
        {/* profile layout with header, footer and aside */}
        <Route path="profile" element={<ProfileLayout />}>
          <Route path="" element={<ViewProfile />} />
          <Route path="orders" element={<ProfileOrders />} />
          <Route path="medicines" element={<ProfileMedicines />} />
          <Route path="liked-articles" element={<Articles />} />
          <Route path="saved-articles" element={<Articles />} />
        </Route>
        {/* notifications layout with header, footer and aside */}
        <Route path="notifications" element={<NotificationsLayout />}>
          <Route path=":messageId" element={<OrderMessage />} />
        </Route>
        {/* dashboard layout with header, footer and aside */}
        <Route path="dashboard" element={<DashboardLayout />}>
          <Route path="" element={<DashMain />} />
          <Route path="users" element={<DashUsers />}>
            {/* <Route path=":userId" element={<ViewUserDash />} /> */}
          </Route>
          <Route path="doctors" element={<DashDoctors />}>
            <Route path=":doctorId" element={<ViewDoctorDash />} />
            <Route path=":doctorId/edit" element={<EditDoctor />} />
          </Route>
          <Route path="medicines" element={<DashMedicines />}>
            <Route path=":medicineId" element={<ViewMedicineDash />} />
            <Route path=":medicineId/edit" element={<EditMedicine />} />
          </Route>
          <Route path="hospitals" element={<DashHospitals />}>
            <Route path=":hospitalId" element={<ViewHospitalDash />} />
            <Route path=":hospitalId/edit" element={<EditHospital />} />
          </Route>
          <Route path="pharmacies" element={<DashPharmacies />}>
            <Route path=":pharmacyId" element={<ViewPharmacyDash />} />
            <Route path=":pharmacyId/edit" element={<EditPharmacy />} />
          </Route>
          <Route path="blog" element={<DashBlog />}>
            <Route path=":articleId" element={<ViewArticleDash />} />
            <Route path=":articleId/edit" element={<EditArticle />} />
          </Route>
          <Route path="charities" element={<DashCharities />}>
            <Route path=":charityId" element={<ViewCharityDash />} />
            <Route path=":charityId/edit" element={<EditCharity />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
