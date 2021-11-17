import styles from '../styles/irashai.module.css'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import React from 'react';
import TabPanel from '../components/tabPanel';
import Scientific from './scientific';
import UnderConstruction from './underConstruction';

export default function Irashai() {

    const [value, setValue] = React.useState(1);

    const selectTab = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <>
            <div className={styles.mainContainer}>
                <div className={styles.titleDiv}>
                    <h2 className={styles.title}>いらっしゃい</h2>
                    <img src={"/images/teaGif.gif"} className={styles.titleTeaGif}></img>
                </div>

                <AppBar position="static" style={{ background: '#3f2372' }}>
                    <Tabs centered value={value} onChange={selectTab}>
                        <Tab label="About" />
                        <Tab label="Research Projects" />
                        <Tab label="Blog" />
                    </Tabs>
                </AppBar>
            </div>

            <div className={styles.contentContainer}>
                <TabPanel index={0} value={value}>
                    <UnderConstruction/>
                </TabPanel>

                <TabPanel index={1} value={value}>
                    <Scientific />
                </TabPanel>

                <TabPanel index={2} value={value}>
                    <UnderConstruction/>
                </TabPanel>
            </div>

        </>
    )
}