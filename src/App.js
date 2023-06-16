// import Feedbackitem from "./components/Feedbackitem"
import FeedbackList from './components/FeedbackList'
import Header from "./components/Header"
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import About from './pages/About';
import { FeedbackProvider } from './context/FeedbackContext'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AboutIconLink from './components/AboutIconLink';

function App() {

     

    

    return (
        <FeedbackProvider>
            <Router>
                <Header />
                
                    
                <div className = 'container'>
                    <Routes>
                        <Route exact path='/' element = {
                            <>
                                <FeedbackForm />
                                <FeedbackStats />
                                <FeedbackList/> 
                                <AboutIconLink />
                            </>
                        }>

                        </Route>
                        <Route path = '/about' element={<About />}/> 
                    </Routes> 

                </div>
            
                
            </Router>
        </FeedbackProvider>
    )
}

export default App 