import { useEffect, useState } from "react";
import Filter from "../components/filter";
import axios from "axios";
import Card from "../components/card";
import { useNavigate, useSearchParams } from "react-router-dom";

const Product = () => {
  const navigate = useNavigate();
  // Kitap verilerini yönetmek için bir state oluştur
  const [books, setBooks] = useState([]);
  // Url'deki parametrelere erişip api'a istek at
  const [searchParams] = useSearchParams();

  useEffect(() => {
    // Url'deki parametrelere erişip bunları api'a gönder
    const params = {
      q: searchParams.get("search"),
      _sort: "title",
      _order: searchParams.get("sort") === "z-a" ? "desc" : "asc",
    };

    // Bileşen ekrana geldiğinde api'a istek at
    axios
      .get("http://localhost:3030/books", { params })
      .then((res) => setBooks(res.data))
      .catch((err) => {
        navigate("/notfound");
      });
  }, [searchParams]);
  return (
    <div className="container my-5">
      {books.length === 0 ? (
        <h3 className="bg-danger p-3 rounded fs-2 text-center">
          Aratilan Kitap Bulunamadı!!
        </h3>
      ) : (
        <h3>{books.length} kitap bulundu.</h3>
      )}
      <Filter />
      <div className="cards-container">
        {books.map((book) => (
          <Card key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};
export default Product;
