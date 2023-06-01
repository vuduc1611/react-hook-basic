import { useParams, useHistory } from "react-router-dom";
import { useFetch } from "../customize/fetch";
import "./Blog.scss";
const DetailBlog = () => {
  let { id } = useParams();
  let history = useHistory();

  const {
    data: dataBlogDetail,
    isLoading,
    isError,
  } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  let newData = [];
  const handleBackData = () => {
    history.push("/blog");
  };
  console.log("datablogdetail >>>>", dataBlogDetail, dataBlogDetail.title);
  return (
    <>
      <div onClick={handleBackData}>
        <span>&lt;-- Back</span>
      </div>
      <div className="blog-detail">
        {dataBlogDetail && (
          <>
            <div className="title">
              Blog ID {id} :{" "}
              {isLoading === true ? "Loading data ..." : dataBlogDetail.title}
            </div>
            <div className="content">{dataBlogDetail.body}</div>
          </>
        )}
      </div>
    </>
  );
};
export default DetailBlog;
