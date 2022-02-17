import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomeContainer from 'src/containers/HomeContainer';
import QuizContainer from 'src/containers/QuizContainer';

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
