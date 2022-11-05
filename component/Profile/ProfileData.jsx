import ViewPicture from "./ViewPicture";
import Info from "./Info";
import BottomNav from "../Home/BottomNavigator";

function ProfileData({ data }) {
  return (
    <>
      <ViewPicture id={data._id} picture={data.picture} />
      <Info data={data} />
      <BottomNav />
    </>
  );
}

export default ProfileData;
