import Head from 'next/head';
import { Menu } from '../components/Menu';
import styles from '../styles/Home.module.css'; // Importe o arquivo CSS de estilos

const Home: React.FC = () => {
    return (
        <div className="container">
            <Head>
                <title>Loja Next</title>
            </Head>
            <Menu /> {/* Adiciona o componente Menu */}
            <main className={styles.main}>
                <h1 className={styles.title}>Página Inicial</h1>
            </main>
        </div>
    );
};

export default Home;
