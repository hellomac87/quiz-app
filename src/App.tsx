import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import QuizContainer from './containers/QuizContainer';

function App() {
    return (
        <Router>
            <Routes>
                <Route path={'/'} element={<HomeContainer />} />
                <Route path={'/quiz'} element={<QuizContainer />} />
            </Routes>
        </Router>
    );
}

export default App;
