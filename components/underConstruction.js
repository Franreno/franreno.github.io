import styles from '../styles/underConstruction.module.css'

export default function UnderConstruction() {
    return (
        <>
            <div className={styles.MainDiv}>
                <img src={"/images/teaGif.gif"} className={styles.teaImg}></img>
            </div>
            <h2 className={styles.subtitle}>Under Construction</h2>
        </>
    )
}