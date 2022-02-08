import styles from '../styles/headerTitle.module.css'
import Link from 'next/link'

export default function HeaderTitle() {
    return (
        <>
            <Link href={'/'}>
                <div className={styles.titleDiv}>
                    <h2 className={styles.title}>いらっしゃい</h2>
                    <img src={"/images/teaGif.gif"} className={styles.titleTeaGif}></img>
                </div>
            </Link>
        </>
    )
}