import styles from '../styles/scientific.module.css'
import Link from 'next/link'

export default function Scientific() {
    return (
        <>
        <Link href={"/static/rjPages/porSemana/2010.html"}>
            <div className={styles.mainScientific}>
                <img src={"images/Rio.png"} className={styles.img}></img>
                <h3>2010</h3>
            </div>
        </Link>
        </>
    )
}