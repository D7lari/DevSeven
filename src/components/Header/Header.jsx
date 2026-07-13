import styles from './Header.module.css';

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <span className={styles.logoNumero}>7</span>
                <span className={styles.logoTexto}>Dev<strong>Seven</strong></span>
            </div>
            <nav className={styles.nav}>
                <a href="#servicos">Serviços</a>
                <a href="#projetos">Projetos</a>
                <a href="#depoimentos">Depoimentos</a>
                <a href="#contato">Contato</a>
            </nav>
            <div className={styles.acoes}>
                <a
                    href="https://wa.me/5585999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.redesSociais}
                >
                    📱
                </a>

                <a
                    href="https://instagram.com/devseven"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.redesSociais}
                >
                    📸
                </a>

                <a href="#contato" className={styles.botao}>
                    Fale conosco
                </a>
            </div>

        </header>
    )
}

export default Header
