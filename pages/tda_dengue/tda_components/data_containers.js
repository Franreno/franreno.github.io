import styles from '../../../styles/mapperAnalysis.module.css'
import Link from 'next/link'

export default function DataContainers() {

    const link_prefix = '/static/mappers/created_data/'

    const links = [
        'north/north_factor=2.html',
        'north/north_factor=4.html',
        'north/north_factor=16.html',

        'south/south_factor=2.html',
        'south/south_factor=4.html',
        'south/south_factor=16.html'
    ]

    return (
        <div>

            <h2 className={styles.texts}>Municípios ao norte aumentam por um fator x</h2>

            <div className={styles.mainLinkContainers}>

                {links.slice(0, 3).map((link) => {
                    return (
                        <Link href={link_prefix + link}>
                            <div className={styles.linkContainers}>
                                <h3 className={styles.texts}> {link.split('/')[1].split('.')[0].split('_')[1]} </h3>
                                <img src={"/images/clusterLogo.png"} className={styles.clusterImg}></img>
                            </div>
                        </Link>
                    )
                })}

            </div>


            <h2 className={styles.texts}>Municípios ao sul aumentam por um fator x</h2>

            <div className={styles.mainLinkContainers}>

                {links.slice(3, 6).map((link) => {
                    return (
                        <Link href={link_prefix + link}>
                            <div className={styles.linkContainers}>
                                <h3 className={styles.texts}> {link.split('/')[1].split('.')[0].split('_')[1]} </h3>
                                <img src={"/images/clusterLogo.png"} className={styles.clusterImg}></img>
                            </div>
                        </Link>
                    )
                })}

            </div>


        </div>
    )

}