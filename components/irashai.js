import styles from '../styles/irashai.module.css'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export default function Irashai() {
    return (
        <>
        <div className={styles.mainContainer}>
            <h2 className={styles.title}>いらっしゃい</h2>

            <AppBar position="static" style={{background: '#3f2372'}}>
                <Tabs centered>
                    <Tab label="Research Projects"/>
                    <Tab label="Blog"/>
                </Tabs>
            </AppBar>

        </div>
    
        </>
    )
}