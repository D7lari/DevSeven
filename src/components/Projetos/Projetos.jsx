import styles from "./Projetos.module.css"

const projetos = [
    {
        id: 1,
        tag: "Aplicativo Mobile",
        titulo: "App de Delivery",
        descricao: "Aplicativo completo de delivery com rastreamento em tempo real, pagamento integrado e painel administrativo.",
        tecnologias: ["React Native", "Node.js", "MongoDB"],
        imagem: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80"
    },
    {
        id: 2,
        tag: "Sistema Web",
        titulo: "Sistema de Gestão Empresarial",
        descricao: "Plataforma completa para gestão de estoque, vendas, clientes e relatórios financeiros em tempo real.",
        tecnologias: ["React", "Node.js", "PostgreSQL"],
        imagem: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80"
    },
    {
        id: 3,
        tag: "Site Completo",
        titulo: "E-commerce de Moda",
        descricao: "Loja virtual completa com catálogo de produtos, carrinho de compras e integração com meios de pagamento.",
        tecnologias: ["React", "Stripe", "Firebase"],
        imagem: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80"
    }
]

function Projetos() {
    return (
        <section className={styles.projetos} id="projetos">
            <div className={styles.cabecalho}>
                <span className={styles.tag}>Nossos projetos</span>
                <h2 className={styles.titulo}>Soluções que já transformaram negócios</h2>
                <p className={styles.subtitulo}>Conheça alguns dos projetos que desenvolvemos para nossos clientes.</p>
            </div>
            <div className={styles.grid}>
                {projetos.map((projeto) => (
                    <div key={projeto.id} className={styles.card}>
                        <div className={styles.imagemContainer}>
                            <img src={projeto.imagem} alt={projeto.titulo} className={styles.imagem} />
                            <span className={styles.cardTag}>{projeto.tag}</span>
                        </div>
                        <div className={styles.cardConteudo}>
                            <h3 className={styles.cardTitulo}>{projeto.titulo}</h3>
                            <p className={styles.cardDescricao}>{projeto.descricao}</p>
                            <div className={styles.tecnologias}>
                                {projeto.tecnologias.map((tech) => (
                                    <span key={tech} className={styles.tech}>{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projetos