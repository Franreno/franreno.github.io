import styles from '../../../styles/mapperAnalysis.module.css'

export default function Abstract() {

    const created_data_link = 'https://github.com/Franreno/TDA-Dengue/tree/main/data/created-data'
    const kepplerMapper_link = 'https://kepler-mapper.scikit-tda.org/en/latest/'

    return (
        <div className={styles.abstract}>
            <p className={styles.texts}>
                Para tentar compreender os output gerado pelo mapper, foram criados <a href={created_data_link}>dados </a>
                com a intenção de verificar a formação das estruturas topológicas a partir do algoritmo <a href={kepplerMapper_link}>KepperMapper.</a>
            </p>
            <p className={styles.texts}>
                Dessa maneira, os dados foram gerados a partir de uma latitude limite.
                Esta latitude é o centro geodésico do estado do Rio de Janeiro, definido na cidade de Nova Friburgo.
            </p>
            <p className={styles.texts}>
                Assim, os dados são gerados de acordo com a latitude na qual o municipio se encontra.
                Todos os municipios começam com um número de casos igual a 10.
                E dependendo da categoria dos dados, Se o município se localiza acima da latidude limite, seu numero de casos aumenta por um fator x.
                Se o município se encontra abaixo da latitude limite, seu numero de casos aumenta em uma taxa constante.
            </p>

        </div>
    )
}