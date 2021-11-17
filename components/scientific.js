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

                <Link href={"/static/rjPages/" + statePath + "/2010.html"}>
                    <div className={styles.linkContainers}>
                        <img src={"images/rjImgs/" + statePath + "/2010.png"} className={styles.img}></img>
                    </div>
                </Link>

                <Link href={"/static/rjPages/" + statePath + "/2011.html"}>
                    <div className={styles.linkContainers}>
                        <img src={"images/rjImgs/" + statePath + "/2011.png"} className={styles.img}></img>
                    </div>
                </Link>

                <Link href={"/static/rjPages/" + statePath + "/2012.html"}>
                    <div className={styles.linkContainers}>
                        <img src={"images/rjImgs/" + statePath + "/2012.png"} className={styles.img}></img>
                    </div>
                </Link>

                <Link href={"/static/rjPages/" + statePath + "/2013.html"}>
                    <div className={styles.linkContainers}>
                        <img src={"images/rjImgs/" + statePath + "/2013.png"} className={styles.img}></img>
                    </div>
                </Link>

                <Link href={"/static/rjPages/" + statePath + "/2014.html"}>
                    <div className={styles.linkContainers}>
                        <img src={"images/rjImgs/" + statePath + "/2014.png"} className={styles.img}></img>
                    </div>
                </Link>

                <Link href={"/static/rjPages/" + statePath + "/2015.html"}>
                    <div className={styles.linkContainers}>
                        <img src={"images/rjImgs/" + statePath + "/2015.png"} className={styles.img}></img>
                    </div>
                </Link>

            </div>

        </>
    )
}