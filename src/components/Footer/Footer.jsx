import styles from "./Footer.module.css"

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.conteudo}>
                <div className={styles.logo}>
                    <span className={styles.logoNumero}>7</span>
                    <span className={styles.logoTexto}>dev<strong>Seven</strong></span>
                </div>
                <p className={styles.slogan}>Código que transforma. Soluções que conectam.</p>
                <div className={styles.redes}>
    <a
        href="https://wa.me/5585991174824"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.rede}
    >
        📱 WhatsApp
    </a>

    <a
        href="https://www.instagram.com/devseven_/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.rede}
    >
        📸 Instagram
    </a>
</div>
                <p className={styles.copyright}>© 2026 DevSeven. Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}

export default Footer