import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './constants/routes';
import HomeContainer from './containers/HomeContainer';
import QuizContainer from './containers/QuizContainer';

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
