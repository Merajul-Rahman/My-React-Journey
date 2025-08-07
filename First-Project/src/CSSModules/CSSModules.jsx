import styles from './CSSModules.module.css'
function CSSModules()
{
    return (
        <div className={styles.block}>
            <h3 className={styles.heading}>This is an example of CSS using Modules</h3>
            <p className={styles.text}>I will style this paragraph using class of .modules.css file</p>
        </div>
    );
}
export default CSSModules