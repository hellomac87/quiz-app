import styles from './App.module.css';
import { useStore } from './store';

function App() {
    const theme = useStore((state) => state.theme);
    const setTheme = useStore((state) => state.setTheme);

    const handleClickThemeButton = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };
    return (
        <div>
            {theme}
            <button onClick={handleClickThemeButton}>toggleTheme</button>
            <div className={styles.container}>i`m dobby!</div>;
        </div>
    );
}

export default App;
