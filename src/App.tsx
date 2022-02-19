import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from 'src/constants/routes';

import HomeContainer from 'src/containers/HomeContainer';
import QuizContainer from 'src/containers/QuizContainer';
import ResultContainer from 'src/containers/ResultContainer';

function App() {
    return (
        <Router>
            <Routes>
                <Route path={routes.home} element={<HomeContainer />} />
                <Route path={routes.quiz} element={<QuizContainer />} />
                <Route path={routes.result} element={<ResultContainer />} />
            </Routes>
        </Router>
    );
}

export default App;
