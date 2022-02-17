import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from 'src/constants/routes';

import HomeContainer from 'src/containers/HomeContainer';
import QuizContainer from 'src/containers/QuizContainer';

function App() {
    return (
        <Router>
            <Routes>
                <Route path={routes.home} element={<HomeContainer />} />
                <Route path={routes.quiz} element={<QuizContainer />} />
            </Routes>
        </Router>
    );
}

export default App;
