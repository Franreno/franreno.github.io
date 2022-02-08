import styles from '../../styles/scientific.module.css'
import Link from 'next/link'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import React from 'react';
import HeaderTitle from '../../components/headerTitle';


export default function mapperByYears() {

    const years = ['2010', '2011', '2012', '2013', '2014', '2015']
    const overlap = ['0.15', '0.3', '0.45']

    const [mapperPath, setMapperPath] = React.useState("2010")
    const [mapperTriggerName, setMapperTriggerName] = React.useState("2010")

    const updateMapperStates = (newValue) => {
        setMapperPath(newValue)
        setMapperTriggerName(newValue)
    }

    return (
        <>
            <HeaderTitle/>
            <div className={styles.mainContainers}>


            <h2 className={styles.texts}> Mapper dos casos de Dengue por ano </h2>
            <div className={styles.dropDownDiv}>
                <DropdownMenu.Root className={"Root"}>
                    <DropdownMenu.Trigger className={"trigger"}>{mapperTriggerName}</DropdownMenu.Trigger>
                    <DropdownMenu.Content className={"content"} >
                        <DropdownMenu.Item className={"item"} onSelect={() => updateMapperStates(years[0])}>{years[0]}</DropdownMenu.Item>
                        <DropdownMenu.Item className={"item"} onSelect={() => updateMapperStates(years[1])}>{years[1]}</DropdownMenu.Item>
                        <DropdownMenu.Item className={"item"} onSelect={() => updateMapperStates(years[2])}>{years[2]}</DropdownMenu.Item>
                        <DropdownMenu.Item className={"item"} onSelect={() => updateMapperStates(years[3])}>{years[3]}</DropdownMenu.Item>
                        <DropdownMenu.Item className={"item"} onSelect={() => updateMapperStates(years[4])}>{years[4]}</DropdownMenu.Item>
                        <DropdownMenu.Item className={"item"} onSelect={() => updateMapperStates(years[5])}>{years[5]}</DropdownMenu.Item>
                    </DropdownMenu.Content>
                </DropdownMenu.Root>
            </div>


            <div className={styles.mainLinkContainers}>
                {
                    overlap.map((overlap) => {
                        return (
                            <div className={styles.linkContainers}>
                                <h3 className={styles.texts}>Overlap = {overlap}</h3>
                                <Link href={"/static/mappers/years/" + mapperPath + "/overlap=" + overlap + ".html"}>
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