import HeaderTitle from "../../components/headerTitle";
import styles from '../../styles/analise2010.module.css'
import Link from 'next/link'



export default function analise2010() {

    return (
        <>
            <div className={styles.mainContainers}>

                <HeaderTitle />
                <h1 className={styles.texts}> Análise do mapper de 2010 </h1>

                <div className={styles.mainLinkContainers}>
                    <div className={styles.linkContainers}>
                        <h3 className={styles.texts}> Mapper 2010 </h3>
                        <Link href={"/static/mappers/years/2010DengueData.html"}>
                            <img src={"/images/clusterLogo.png"} className={styles.clusterImg}></img>
                        </Link>
                    </div>
                </div>



                <h2 className={styles.texts}> Analise de alguns clusters </h2>

                <h3 className={styles.texts}> Primeiro cluster </h3>
                <p className={styles.texts}> O cluster abaixo mostra uma relação entre as regiões das cidades de Goyatacazes, São João da Barra e São Francisco de Itabapoana.</p>
                <div className={styles.mainLinkContainers}>
                    <img src={'/images/Analise/clusterIsolado1.png'} style={{ height: '240px' }, { width: '240px' }} />
                    <div className={styles.paddingDiv}> </div>
                    <img src={'/images/Analise/mapaIsolado1.png'} style={{ height: '300px' }, { width: '300px' }} />

                </div>

                <h3 className={styles.texts}> Segundo cluster </h3>
                <p className={styles.texts}> O cluster abaixo mostra uma relação entre varias regiões desde Teresópolis até Duque de caxias e Rio Bonito.</p>
                <div className={styles.mainLinkContainers}>
                    <img src={'/images/Analise/RegiaoCapital.png'} style={{ height: '400px' }, { width: '400px' }} />
                    <div className={styles.paddingDiv}> </div>
                    <img src={'/images/Analise/RegiaoCapitalMapa.png'} style={{ height: '400px' }, { width: '400px' }} />

                </div>

                <h3 className={styles.texts}> Terceiro cluster </h3>
                <p className={styles.texts}> O cluster abaixo mostra uma relação entre as cidades vizinhas de Cambuci.</p>
                <div className={styles.mainLinkContainers}>
                    <img src={'/images/Analise/CambuciCluster.png'} style={{ height: '400px' }, { width: '400px' }} />
                    <div className={styles.paddingDiv}> </div>
                    <img src={'/images/Analise/Cambuci.png'} style={{ height: '400px' }, { width: '400px' }} />

                </div>

                <h3 className={styles.texts}> Quarto cluster </h3>
                <p className={styles.texts}> O cluster abaixo mostra uma relação entre as cidades vizinhas de Trajano de Moraes.</p>
                <div className={styles.mainLinkContainers}>
                    <img src={'/images/Analise/trajanoCluster.png'} style={{ height: '400px' }, { width: '400px' }} />
                    <div className={styles.paddingDiv}> </div>
                    <img src={'/images/Analise/Trajano.png'} style={{ height: '400px' }, { width: '400px' }} />

                </div>

                <h3 className={styles.texts}> Duque de Caxias e Belford Roxo </h3>
                <p className={styles.texts}> Esse cluster mostra uma relação intensa ao final do ano de 2010 para as duas regiões de Duque de Caxias e Belford Roxo.</p>
                <div className={styles.mainLinkContainers}>
                    <img src={'/images/Analise/Duque-Belford.png'} style={{ height: '250px' }, { width: '250px' }} />
                    <div className={styles.paddingDiv}> </div>
                    <img src={'/images/Analise/Duque-Belford-Data.png'} style={{ height: '250px' }, { width: '250px' }} />
                    <div className={styles.paddingDiv}> </div>
                    <img src={'/images/Analise/Duque-Belford-Mapa.png'} style={{ height: '500px' }, { width: '500px' }} />

                </div>


                <h3 className={styles.texts}> Angra dos Reis e Magaratiba </h3>
                <p className={styles.texts}> O cluster isolado mostra uma relação entre as cidades de Angra dos Reis e Magaratiba.</p>
                <div className={styles.mainLinkContainers}>
                    <img src={'/images/Analise/Angra-Magaratiba-Macabu.png'} style={{ height: '600px' }, { width: '600px' }} />
                    <div className={styles.paddingDiv}> </div>
                    <img src={'/images/Analise/Angra-Magaratiba-Mapa.png'} style={{ height: '400px' }, { width: '400px' }} />

                </div>



                <h2 className={styles.texts}> Segmentos separados </h2>

                <p className={styles.texts}> Há a existência de vários segmentos isolados do resto do Mapper.</p>
                <p className={styles.texts}>Isso pode indicar algumas coisas como o isolamento geográfico de outras cidades, uma grande aumento no numero de casos do municipio ou pouca relação entre a distância e a quantidade de casos de outras cidades vizinhas.</p>

                <div className={styles.mainLinkContainers}>
                    <img src={'/images/Analise/Carmo-RJ.png'} style={{ height: '300px' }, { width: '300px' }} />
                    <div className={styles.paddingDiv}> </div>
                    <img src={'/images/Analise/Goytacazes-cabofrio-silvajardim.png'} style={{ height: '300px' }, { width: '300px' }} />
                    <div className={styles.paddingDiv}> </div>
                    <img src={'/images/Analise/Parati-Itaperuna.png'} style={{ height: '300px' }, { width: '300px' }} />
                    

                </div>


            </div>
        </>
    )

}