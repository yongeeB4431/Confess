import { server } from "../../../config/index";
import EditConfession from "../../../component/EditConfession/EditConfession";
function editConfession({ data }) {
  return <EditConfession data={data} />;
}
export async function getServerSideProps(context) {
  const { req, query } = context;
  const host = req.headers.host;
  const id = query.id;
  const path = `${server}${host}/api/confession/findOne/${id}`;
  const response = await fetch(path);
  const data = await response.json();
  return {
    props: { data },
  };
}
export default editConfession;
