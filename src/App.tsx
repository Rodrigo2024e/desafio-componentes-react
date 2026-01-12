


import Header from './components/Header'
import CarCard from './components/CarCard'
import CommentCard from './components/CommentCard'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />

      <main className="container">
        <CarCard
          title="Audi R8"
          description="Um superesportivo com motor V10 e desempenho impressionante."
        />

        <CarCard
          title="BMW M5"
          description="Sedã esportivo com luxo, conforto e muita potência."
        />

        <CommentCard text="Excelente atendimento e carros de altíssima qualidade." />
        <CommentCard text="Melhor experiência que já tive comprando um carro." />
      </main>

      <Footer />
    </>
  )
}



