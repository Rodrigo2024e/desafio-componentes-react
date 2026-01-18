import Cards from "../../components/Cards";
import Header from "../../components/Header";
import './styles.css'

export default function Catalog() {
  return (
    <>
      <Header />

        <main>
            <section className="cards-section">
                <h1>Venha nos visitar</h1>
                <Cards />
                <Cards />
                
            </section>

            <section className="comments-section">
                <div>

                </div>
            </section>

        </main>
    
    </>
  )
}