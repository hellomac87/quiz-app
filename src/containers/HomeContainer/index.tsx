import { useNavigate } from 'react-router-dom';

import { routes } from 'src/constants/routes';

import Layout from 'src/components/common/Layout';
import Home from 'src/components/home';

function HomeContainer() {
    const navigate = useNavigate();

    const handleClickStart = () => {
        navigate(routes.quiz);
    };

    return (
        <Layout>
            <Home onClick={handleClickStart} />
        </Layout>
    );
}

export default HomeContainer;
