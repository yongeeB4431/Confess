import { server } from "../../config";
import ProfileData from "../../component/Profile/ProfileData";
function Profile({ data }) {
  console.log(data);
  return <ProfileData data={data.data[0]} />;
}

export async function getServerSideProps(context) {
  const { req, query } = context;
  const response = await fetch(
    `${server}${req.headers.host}/api/users/findOne/${query.id}`
  );
  const data = await response.json();
  return {
    props: { data },
  };
}
export default Profile;
