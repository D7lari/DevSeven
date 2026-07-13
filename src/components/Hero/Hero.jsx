import styles from './Hero.module.css';

function Hero(){
    return (
        <section className={styles.hero}>
            <div className={styles.conteudo}>
                <span className={styles.tag}>Desenvolvendo o Futuro</span>
                <h1 className={styles.titulo}>Sistemas sob medida para um <span className={styles.destaque}>mundo em evolução</span></h1>
                <p className={styles.subtitulo}>Transformamos desafios em soluções digitais. Desenvolvemos sistemas, aplicativos e sites que impulsionam negócios e conectam pessoas. </p>
                <div className={styles.botoes}>
                    <a href="#servicos" className={styles.botaoPrimario}>Conheça nossos Serviços</a>
                    <a href="#projetos" className={styles.botaoSecundario}>Ver projetos</a>
                </div>
            
            </div>
        </section>
    )
}

export default Hero