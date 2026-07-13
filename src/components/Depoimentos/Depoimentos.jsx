import styles from "./Depoimentos.module.css"

const depoimentos = [
    {
        id: 1,
        nome: "Carlos Mendes",
        cargo: "Dono - Restaurante Sabor & Arte",
        texto: "A DevSeven transformou completamente nossa operação. O sistema de pedido triplicou nossas vendas em apenas 3 meses. Equipe extremamente profissional e comprometida.",
        avatar: "CM"
    },
    {
        id: 2,
        nome: "Dra. Ana Lucia",
        cargo: "Diretora - Clínica Vida Plena",
        texto: "O sistema de agendamento desenvolvido pela DevSeven eliminou filas e reduziu faltas de 60%. Nossos pacientes adoraram a facilidade de marcar consultas pelo app.",
        avatar: "AL"
    },
    {
        id: 3,
        nome: "Roberto Silva",
        cargo:"Gerente - Loja Moda Urbana",
        texto:"Nossa loja virtual foi entregue no prazo e superou todas as expectativas. As vendas online já representam 40% do nosso faturamento. ",
        avatar:"RS"
    }

]

function Depoimentos(){
    return (
        <section className={styles.depoimentos} id="depoimentos">
            <div className={styles.cabecalho}>
                <span className={styles.tag}>Depoimentos</span>
                <h2 className={styles.titulo}>O que nossos clientes dizem</h2>
                <p className={styles.subtitulo}>Resultados reais de quem confiou na DevSeven.</p>
            </div>
            <div className={styles.grid}>
                {depoimentos.map((depoimentos) => (
                    <div key={depoimentos.id} className={styles.card}>
                        <p className={styles.texto}>"{depoimentos.texto}"</p>
                        <div className={styles.autor}>
                            <div className={styles.avatar}>{depoimentos.avatar}</div>
                        </div>
                        <p className={styles.nome}>{depoimentos.nome}</p>
                        <p className={styles.cargo}>{depoimentos.cargo}</p>
                    </div>

                ))}
            </div>
        </section>

    )  
}





export default Depoimentos
