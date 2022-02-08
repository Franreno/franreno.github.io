import styles from '../styles/scientific.module.css'
import Link from 'next/link'
import React from 'react';


export default function Scientific() {

    return (
        <>

            <div>
                <h1 className={styles.texts}>TDA Dengue</h1>
                <div>
                    <Link href={"tda_dengue/mapper_mainPage"}>
                        <div className={styles.mainLinkContainers}>
                            <img src={"images/clusterLogo.png"} className={styles.clusterImg}></img>
                            <div className={styles.paddingContainer} />
                            <div className={styles.pTextContainer}>
                                <p className={styles.texts}>{"Análise topológica de dados biológicos sobre os casos de Dengue no estado do Rio de Janeiro."}</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>

            <div>
                <h1 className={styles.texts}>Visualização Dengue</h1>
                <div>
                    <Link href={"visualization/vis_mainPage"}>
                        <div className={styles.mainLinkContainers}>
                            <img src={"/images/rjImgs/porcentagemPorMes/2010.png"} className={styles.img}></img>
                            <div className={styles.paddingContainer} />
                            <div className={styles.pTextContainer}>
                                <p className={styles.texts}>{"Visualização dos casos de Dengue no estado do Rio de Janeiro."}</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>



        </>
    )
}