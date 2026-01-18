import CardsCar from "../../components/CardsCard";
import CommentsCar from "../../components/CommentsCard";
import Header from "../../components/Header";
import './styles.css'

export default function Catalog() {
  return (
    <>
      <Header />

        <main>
            <section className="cards-section">
                <h1>Venha nos visitar</h1>
                <div className="catalog-cards-container">
                  <CardsCar />
                  <CardsCar />
                </div>
            </section>

            <section className="comments-section">
              <h1>O que estão dizendo</h1>
              <div className="catalog-comments-container">
                <CommentsCar />
                <CommentsCar />
                <CommentsCar />
                <CommentsCar />
                <CommentsCar />
              </div>
            </section>

        </main>
    
    </>
  )
}