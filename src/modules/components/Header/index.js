import styles from "./Header.module.scss"

export default function Header() {
    return (
        <header className={styles.headerWrapper}>
            <div className={styles.header}>
                <img src="/emirates-logo.jpg" alt="Emirates logo" />
            </div>
        </header>
    )
}