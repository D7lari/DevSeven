import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Servicos from "./components/Servicos/Servicos"
import Projetos from "./components/Projetos/Projetos"
import Depoimentos from "./components/Depoimentos/Depoimentos"
import Contato from "./components/Contato/Contato"
import Footer from "./components/Footer/Footer"

function App() {
    return (
        <div>
            <Header />
            <Hero />
            <Servicos />
            <Projetos />
            <Depoimentos />
            <Contato />
            <Footer />

        </div>
    )
}

export default App