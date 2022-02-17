import { useNavigate } from 'react-router-dom';

import { routes } from '../../constants/routes';

import Home from '../../components/home';

function HomeContainer() {
    const navigate = useNavigate();

    const handleClickStart = () => {
        navigate(routes.quiz);
        console.log('handleClickStart');
    };

    return <Home onClick={handleClickStart} />;
}

export default HomeContainer;
