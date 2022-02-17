import { useNavigate } from 'react-router-dom';

import { routes } from 'src/constants/routes';
import Home from 'src/components/home';

function HomeContainer() {
    const navigate = useNavigate();

    const handleClickStart = () => {
        navigate(routes.quiz);
        console.log('handleClickStart');
    };

    return <Home onClick={handleClickStart} />;
}

export default HomeContainer;
