import { server } from "../../config";
import Edit from "../../component/EditInfo/Edit";
function editinfo({ _data }) {
  return <Edit data={_data} />;
}
export async function getServerSideProps(context) {
  const { req, query } = context;
  const host = req.headers.host;
  const id = query.id;
  const url = `${server}${host}/api/users/findOne/${id}`;
  const data = await fetch(url);
  const _data = await data.json();
  return {
    props: {
      _data,
    },
  };
}
export default editinfo;
