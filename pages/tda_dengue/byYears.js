import styles from '../../styles/scientific.module.css'
import Link from 'next/link'
import React from 'react';
import HeaderTitle from '../../components/headerTitle';


export default function mapperByYears() {

    const years = ['2011', '2012', '2013', '2014', '2015']

    return (
        <>
            <HeaderTitle />

            <div className={styles.mainContainers}>

                <h1 className={styles.texts}> Mappers por ano </h1>
                <p className={styles.texts}>Referência: <a href='https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0255584'> Topological data analysis model for the spread of the coronavirus</a> </p>
                <div className={styles.mainLinkContainers}>



                    <div className={styles.linkContainers}>
                        <h3 className={styles.texts}> 2010 </h3>
                        <Link href={"analise2010"}>
                            <img src={"/images/clusterLogo.png"} className={styles.clusterImg}></img>
                        </Link>
                    </div>

                    {

                        years.map((year) => {
                            return (
                                <div className={styles.linkContainers}>
                                    <h3 className={styles.texts}> {year} </h3>
                                    <Link href={"/static/mappers/years/" + year + "DengueData.html"}>
                                        <img src={"/images/clusterLogo.png"} className={styles.clusterImg}></img>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </>
    )
}