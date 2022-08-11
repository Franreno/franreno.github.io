import styles from '../../styles/scientific.module.css'
import Link from 'next/link'
import React from 'react';
import HeaderTitle from '../../components/headerTitle';


export default function mapperByYears() {

    const years = ['2010', '2011', '2012', '2013', '2014', '2015']

    const years_without_2010 = years.slice(1)

    return (
        <>
            <HeaderTitle />
            <div className={styles.mainContainers}>

                <h2 className={styles.texts}> Dados Socioeconômicos sem PIB e sem Búzios </h2>

                <div className={styles.mainLinkContainers}>


                    <div className={styles.linkContainers}>
                        <h3 className={styles.texts}> Projeção PCA </h3>
                        <Link href={"/static/mappers/social/2014DenguePCA"}>
                            <img src={"/images/clusterLogo.png"} className={styles.clusterImg}></img>
                        </Link>
                    </div>

                    <div className={styles.linkContainers}>
                        <h3 className={styles.texts}> Projeção 3 coordenadas </h3>
                        <Link href={"/static/mappers/social/2014DenguePIB-RENDA-CASOS.html"}>
                            <img src={"/images/clusterLogo.png"} className={styles.clusterImg}></img>
                        </Link>
                    </div>

                    <div className={styles.linkContainers}>
                        <h3 className={styles.texts}> Sem projeção </h3>
                        <Link href={"/static/mappers/social/2014DengueSemProjecao.html"}>
                            <img src={"/images/clusterLogo.png"} className={styles.clusterImg}></img>
                        </Link>
                    </div>


                </div>




                <h2 className={styles.texts}> Dados Socioeconômicos </h2>

                <div className={styles.mainLinkContainers}>


                    <div className={styles.linkContainers}>
                        <h3 className={styles.texts}> Projeção PCA </h3>
                        <Link href={"/static/mappers/social/2014DenguePCA"}>
                            <img src={"/images/clusterLogo.png"} className={styles.clusterImg}></img>
                        </Link>
                    </div>

                    <div className={styles.linkContainers}>
                        <h3 className={styles.texts}> Projeção 3 coordenadas </h3>
                        <Link href={"/static/mappers/social/2014DenguePIB-RENDA-CASOS.html"}>
                            <img src={"/images/clusterLogo.png"} className={styles.clusterImg}></img>
                        </Link>
                    </div>

                    <div className={styles.linkContainers}>
                        <h3 className={styles.texts}> Sem projeção </h3>
                        <Link href={"/static/mappers/social/2014DengueSemProjecao.html"}>
                            <img src={"/images/clusterLogo.png"} className={styles.clusterImg}></img>
                        </Link>
                    </div>


                </div>



                <h1 className={styles.texts}> Mappers por ano </h1>
                <p className={styles.texts}>Referência: <a href='https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0255584'> Topological data analysis model for the spread of the coronavirus</a> </p>
                <br></br>

                <h2 className={styles.texts}> Local + Casos de dengue por semana + Semana </h2>

                <div className={styles.mainLinkContainers}>




                    <div className={styles.linkContainers}>
                        <h3 className={styles.texts}> 2010 </h3>
                        <Link href={"analise2010"}>
                            <img src={"/images/clusterLogo.png"} className={styles.clusterImg}></img>
                        </Link>
                    </div>

                    {

                        years_without_2010.map((year) => {
                            return (
                                <div className={styles.linkContainers}>
                                    <h3 className={styles.texts}> {year} </h3>
                                    <Link href={"/static/mappers/years/" + year + '/' + year + "DengueData.html"}>
                                        <img src={"/images/clusterLogo.png"} className={styles.clusterImg}></img>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>

                <h2 className={styles.texts}> Local + Casos de dengue por semana + Semana + IDHM</h2>

                <div className={styles.mainLinkContainers}>
                    {
                        years.map((year) => {
                            return (
                                <div className={styles.linkContainers}>
                                    <h3 className={styles.texts}> {year} </h3>
                                    <Link href={"/static/mappers/years/" + year + '/' + year + "DengueData-IDHM.html"}>
                                        <img src={"/images/clusterLogo.png"} className={styles.clusterImg}></img>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>

                <h2 className={styles.texts}> Local + Casos de dengue por semana + Semana + PIB</h2>

                <div className={styles.mainLinkContainers}>
                    {
                        years.map((year) => {
                            return (
                                <div className={styles.linkContainers}>
                                    <h3 className={styles.texts}> {year} </h3>
                                    <Link href={"/static/mappers/years/" + year + '/' + year + "DengueData-PIB.html"}>
                                        <img src={"/images/clusterLogo.png"} className={styles.clusterImg}></img>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>

                <h2 className={styles.texts}> Local + Casos de dengue por semana + Semana + IDHM + PIB</h2>

                <div className={styles.mainLinkContainers}>
                    {
                        years.map((year) => {
                            return (
                                <div className={styles.linkContainers}>
                                    <h3 className={styles.texts}> {year} </h3>
                                    <Link href={"/static/mappers/years/" + year + '/' + year + "DengueData-IDHM-PIB.html"}>
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