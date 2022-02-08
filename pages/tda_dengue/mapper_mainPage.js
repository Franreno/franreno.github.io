import styles from '../../styles/scientific.module.css'
import Link from 'next/link'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import React from 'react';
import HeaderTitle from '../../components/headerTitle';


export default function mapperMainPage() {

    const title1 = "Mapper dos casos de dengue entre os anos de 2010 e 2015"
    const title2 = "Análise do mapper com o aumento dos casos de acordo com a latiude"


    return (
        <>

            <HeaderTitle />
            <div className={styles.mainContainers}>

                <div>
                    <h2 className={styles.texts}>Mapper dos casos de dengue por ano</h2>
                    <div>
                        <Link href={"byYears"}>
                            <div className={styles.mainLinkContainers}>
                                <img src={"/images/clusterLogo.png"} className={styles.clusterImg}></img>
                                <div className={styles.paddingContainer} />
                                <div className={styles.pTextContainer}>
                                    <p className={styles.texts}>{title1}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>

                <div>
                    <h2 className={styles.texts}>Análise topológica com dados fabricados</h2>
                    <div>
                        <Link href={"mapperAnalysis"}>
                            <div className={styles.mainLinkContainers}>
                                <img src={"/images/clusterLogo.png"} className={styles.clusterImg}></img>
                                <div className={styles.paddingContainer} />
                                <div className={styles.pTextContainer}>
                                    <p className={styles.texts}>{title2}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>


            </div>
        </>
    )
}