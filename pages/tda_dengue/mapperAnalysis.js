import HeaderTitle from '../../components/headerTitle'
import styles from '../../styles/mapperAnalysis.module.css'
import Abstract from './tda_components/abstract'
import DataContainers from './tda_components/data_containers'


export default function mapperAnalysis() {

    return (
        <div className={styles.mainContainers}>
            <HeaderTitle />
            <h2 className={styles.texts}>Análise do mapper com o aumento dos casos de acordo com a latiude</h2>

            <Abstract/>

            <DataContainers/>

        </div>
    )
}