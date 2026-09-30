import { useState } from "react"
import styles from "./Contato.module.css"

function Contato() {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [mensagem, setMensagem] = useState("")
    const [enviado, setEnviado] = useState(false)

    function lidarComEnvio(evento) {
        evento.preventDefault()
        console.log("Nome:", nome)
        console.log("Email:", email)
        console.log("Mensagem:", mensagem)
        setEnviado(true)
        setNome("")
        setEmail("")
        setMensagem("")
    }

    return (
        <section className={styles.contato} id="contato">
            <div className={styles.cabecalho}>
                <span className={styles.tag}>Contato</span>
                <h2 className={styles.titulo}>Vamos construir algo incrível juntos?</h2>
                <p className={styles.subtitulo}>Fale com a DevSeven e descubra como podemos transformar sua ideia em realidade.</p>
            </div>

            <div className={styles.conteudo}>
                <div className={styles.info}>
                    <div className={styles.infoItem}>
                        <span className={styles.infoIcone}>📧</span>
                        <div>
                            <p className={styles.infoTitulo}>Email</p>
                            <p className={styles.infoTexto}>larissadevseven@gmail.com</p>
                        </div>
                    </div>
                    <div className={styles.infoItem}>
                        <span className={styles.infoIcone}>📱</span>
                        <div>
                            <p className={styles.infoTitulo}>WhatsApp</p>
                            <p className={styles.infoTexto}>(85) 99117-4824</p>
                        </div>
                    </div>
                    <div className={styles.infoItem}>
                        <span className={styles.infoIcone}>📍</span>
                        <div>
                            <p className={styles.infoTitulo}>Localização</p>
                            <p className={styles.infoTexto}>Fortaleza, Ceará</p>
                        </div>
                    </div>
                </div>

                <form className={styles.formulario} onSubmit={lidarComEnvio}>
                    {enviado && (
                        <div className={styles.sucesso}>
                            ✅ Mensagem enviada com sucesso! Entraremos em contato em breve.
                        </div>
                    )}
                    <div className={styles.campo}>
                        <label htmlFor="nome">Nome</label>
                        <input
                            type="text"
                            id="nome"
                            placeholder="Seu nome completo"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.campo}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="seu@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.campo}>
                        <label htmlFor="mensagem">Mensagem</label>
                        <textarea
                            id="mensagem"
                            placeholder="Conte sobre seu projeto..."
                            value={mensagem}
                            onChange={(e) => setMensagem(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className={styles.botao}>
                        Enviar mensagem
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Contato