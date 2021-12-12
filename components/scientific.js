import styles from '../styles/scientific.module.css'
import Link from 'next/link'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import React from 'react';


export default function Scientific() {
    var types = ["Grafos", "Semana", "Mês", "Porcentagem por Semana", "Porcentagem por Mês"];
    var correspondencies = ["Grafos", "porSemana", "porMediaMovel", "porcentagemPorSemana", "porcentagemPorMes"];

    const [statePath, setStatePath] = React.useState("Grafos");
    const [triggerName, setTriggerName] = React.useState("Selecione o tipo de Plot")

    const updateStates = (newValue, itemSelected) => {
        setStatePath(newValue);
        setTriggerName(itemSelected);
    }

    const statesNames = [['Acre', 'AC'], ['Alagoas', 'AL'], ['Amapá', 'AP'], ['Amazonas', "AM"], ['Bahia', 'BA'], ['Ceará', 'CE'], ['Distrito Federal', 'DF'], ['Espirito Santo', 'ES'], ['Goiás', 'GO'], ['Maranhão', 'MA'], ['Mato Grosso', 'MT'], ['Mato Grosso do Sul', 'MS'], ['Minas Gerais', 'MG'], ['Paraná', 'PR'], ['Paraíba', 'PB'], ['Pará', 'PA'], ['Pernambuco', 'PE'], ['Piauí', 'PI'], ['Rio Grande do Norte', 'RN'], ['Rio Grande do Sul', 'RS'], ['Rio de Janeiro', 'RJ'], ['Rondônia', 'RO'], ['Roraima', 'RR'], ['Santa Catarina', 'SC'], ['Sergipe', 'SE'], ['São Paulo', 'SP'], ['Tocantins', 'TO']];
    const years = ['2010', '2011', '2012', '2013', '2014', '2015']

    return (
        <>
            <div className={styles.dropDownDiv}>
                <DropdownMenu.Root className={"Root"}>
                    <DropdownMenu.Trigger className={"trigger"}>{triggerName}</DropdownMenu.Trigger>
                    <DropdownMenu.Content className={"content"} >
                        <DropdownMenu.Item className={"item"} onSelect={() => updateStates(correspondencies[0], types[0])}>{types[0]}</DropdownMenu.Item>
                        <DropdownMenu.Item className={"item"} onSelect={() => updateStates(correspondencies[1], types[1])}>{types[1]}</DropdownMenu.Item>
                        <DropdownMenu.Item className={"item"} onSelect={() => updateStates(correspondencies[2], types[2])}>{types[2]}</DropdownMenu.Item>
                        <DropdownMenu.Item className={"item"} onSelect={() => updateStates(correspondencies[3], types[3])}>{types[3]}</DropdownMenu.Item>
                        <DropdownMenu.Item className={"item"} onSelect={() => updateStates(correspondencies[4], types[4])}>{types[4]}</DropdownMenu.Item>
                    </DropdownMenu.Content>
                </DropdownMenu.Root>
            </div>

            <div className={styles.mainLinkContainers}>
                {
                    years.map((year) => {
                        return (
                            <Link href={"/static/rjPages/" + statePath + "/" + year + ".html"}>
                                <div className={styles.linkContainers}>
                                    <img src={"images/rjImgs/" + statePath + "/" + year +".png"} className={styles.img}></img>
                                </div>
                            </Link>
                        )
                    })

                }
            </div>


            <h2 className={styles.texts}> Comparação dos dados </h2>
            <div className={styles.mainLinkContainers}>

                <Link href={"/static/comparison/Diff.html"}>
                    <div className={styles.linkContainers}>
                        <img src={"images/comparison/diff.png"} className={styles.img}></img>
                    </div>
                </Link>

                <Link href={"/static/comparison/Porcentagem.html"}>
                    <div className={styles.linkContainers}>
                        <img src={"images/comparison/porcentagem.png"} className={styles.img}></img>
                    </div>
                </Link>

                <Link href={"/static/comparison/Bar.html"}>
                    <div className={styles.linkContainers}>
                        <img src={"images/comparison/bar.png"} className={styles.img}></img>
                    </div>
                </Link>

            </div>

            <h2 className={styles.texts}> Casos de COVID-19 por mês em cada estado brasileiro</h2>
            <div className={styles.mainLinkContainers}>
                {
                    statesNames.map((state) => {
                        return (
                            <div>
                                <h3 className={styles.texts}> {state[0]} </h3>
                                <Link href={"/static/covid/" + state[1] + ".html"}>
                                    <img src={"images/states/" + state[0] + ".png"} className={styles.img}></img>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}