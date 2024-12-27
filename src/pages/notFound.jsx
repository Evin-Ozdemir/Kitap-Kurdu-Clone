import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center">
      <h1 className="text-warning">Aratılan sayfa bulunamadı</h1>
      <img src="/notFound.gif" className="w-100 rounded not-found-image" />
      <p className="fs-1">
        <Link to="/">Ana Sayfa</Link>'ya gidiniz
      </p>
    </div>
  );
};
export default NotFound;
