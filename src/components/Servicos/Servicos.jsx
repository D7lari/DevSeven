import styles from './Servicos.module.css';


const servicos = [
    {
        id: 1,
        icone: "🌐",
        titulo: "Desenvolvimento Web",
        descricao: "Criação de sites e sistemas web modernos, rápidos e responsivos. Do desing á entrega, com foco em resultados."
    },
    {
        id: 2,
        icone: "📱",
        titulo: "Aplicativos Mobile",
        descricao: "Desenvolvemos apps IOS e Android com experiência de usuário fluida e intuitiva para o seu negócio."
    },
    {
        id: 3,
        icone: "💡",
        titulo: "Consultoria em TI",
        descricao: "Analisamos seu negócio e indicamos as melhores soluções tecnológicas para escalar seus resultados."
    },
    {
        id: 4,
        icone: "🔧",
        titulo: "Manutenção e Suporte",
        descricao: "Suporte técnico contínuo para gaarantir que seus sistemas funcionem com estabilidade e segurança, minimizando interrupções."
    }
]

function Servicos() {
    return (
        <section className={styles.servicos} id="servicos">
            <div className={styles.cabecalho}>
                <span className={styles.tag}>O que fazemos</span>
                <h2 className={styles.titulo}>Soluções completas para o seu negócio</h2>
                <p className={styles.subtitulo}>Da ideia ao produto final, cuidamos de cada etapa do desenvolvimento. </p>
            </div>

            <div className={styles.grid}>
                {servicos.map((servico) => (
                    <div key={servico.id} className={styles.card}>
                        <span className={styles.icone}>{servico.icone}</span>
                        <h3 className={styles.cardTitulo}>{servico.titulo}</h3>
                        <p className={styles.cardDescricao}>{servico.descricao}</p>
                    </div>
                ))}
            </div>
          
        </section>
    

    )
        
    
}
export default Servicos