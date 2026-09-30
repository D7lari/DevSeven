import { useState } from 'react';
import styles from './Header.module.css';

function Header() {
    const [menuAberto, setMenuAberto] = useState(false);

    function fecharMenu() {
        setMenuAberto(false);
    }


    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <span className={styles.logoNumero}>7</span>
                <span className={styles.logoTexto}>Dev<strong>Seven</strong></span>
            </div>

            <button
                className={styles.menuToggle}
                onClick={() => setMenuAberto((aberto)=> !aberto)}
                aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
                aria-expanded={menuAberto}
            >
                {menuAberto ? '✕' : '☰'}

            </button>
            <div className={`${styles.menuMobile} ${menuAberto ? styles.menuMobileAberto : ''}`}>
                <nav className={styles.nav}>
                    <a href="#servicos" onClick={fecharMenu}>Serviços</a>
                    <a href="#projetos" onClick={fecharMenu}>Projetos</a>
                    <a href="#depoimentos" onClick={fecharMenu}>Depoimentos</a>
                    <a href="#contato" onClick={fecharMenu}>Contato</a>
                </nav>
                <div className={styles.acoes}>
                    <a
                        href="https://wa.me/5585991174824"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.redesSociais}
                    >
                        📱
                    </a>

                    <a
                        href="https://www.instagram.com/devseven_/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.redesSociais}
                    >
                        📸
                    </a>

                    <a href="#contato" className={styles.botao} onClick={fecharMenu}>
                        Fale conosco
                    </a>
                </div>
            </div>

        </header>
    )
}

export default Header
