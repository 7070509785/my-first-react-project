import './App.css';
import News from './news /news';
import Mandal from './product-top-filter/mandal';
import ProductTopFilters from './product-top-filter/product-top-filters';
import ProfileDetails from './profile/Profile-Details';
import ChangeNumber from './profile/change-number';
import ChangePasswopde from './profile/change-passwoped';
import EditProFile from './profile/edit-profile';
import Input from './profile/input';
function App() {
  return (
    <div>
      <News></News>

      <ProfileDetails></ProfileDetails>
      <EditProFile></EditProFile>
      <ChangePasswopde></ChangePasswopde>
      <ChangeNumber></ChangeNumber>
    </div>
  );
}
export default App;
