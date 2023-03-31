import { useParams } from "react-router-dom";

const ReportPage = (props) => {
  const params = useParams();
  const { url } = params;

  return (
    <div className="container-fluid px-5">
      <div className="embed-responsive ratio ratio-16x9">
        <iframe
          className="embed-responsive-item"
          title="PBI_Report"
          src={url}
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default ReportPage;
