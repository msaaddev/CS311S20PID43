import React, { useState } from 'react';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import Homepage from './components/Homepage';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Settings from './components/Settings';
import Room from './components/Room';
import CourseInfo from './components/CourseInfo';
import Schedule from './components/Schedule';
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import 'react-popupbox/dist/react-popupbox.css';
import './App.css';
import SectionSchedule from './components/SectionSchedule';

// popup Box Body
const openPopupboxForSettings = () => {
    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
    };
    const content = (
        <div className='popup'>
            <ul id='styling'>
                <Link to='/settings'>
                    <li>Settings</li>
                </Link>
                <Link to='/dashboard'>
                    <li>Dashboard</li>
                </Link>
                <Link to='/'>
                    <li onClick={logout}>Logout</li>
                </Link>
            </ul>
        </div>
    );
    PopupboxManager.open({ content });
};

// popup box configs
const popupboxConfig = {
    fadeIn: true,
    fadeInSpeed: 400,
    fadeOutSpeed: 500,
    overlayOpacity: 0.8,
    escClose: true,
};

function App() {
    const [roomArr, setRoomArr] = useState([]);
    const [sectionArr, setSectionArr] = useState([]);
    const [sessionArr, setSessionArr] = useState([]);
    const [courseNameArr, setcourseNameArr] = useState([]);
    const [courseIDArr, setCourseIDArr] = useState([]);
    const [creditHrsArr, setCreditHrsArr] = useState([]);
    const [sectionForSchedule, setSectionForSchedule] = useState(0);
    const [sectionName] = useState(['A', 'B', 'C']);

    return (
        <>
            <Switch>
                <Route
                    exact
                    path='/login'
                    render={() => <Login openPopupboxForSettings={openPopupboxForSettings} />}
                />
                <Route
                    exact
                    path='/dashboard'
                    render={() => (
                        <Dashboard
                            openPopupboxForSettings={openPopupboxForSettings}
                            setSectionForSchedule={setSectionForSchedule}
                        />
                    )}
                />
                <Route
                    exact
                    path='/settings'
                    render={() => <Settings openPopupboxForSettings={openPopupboxForSettings} />}
                />
                <Route
                    exact
                    path='/room'
                    render={() => (
                        <Room
                            openPopupboxForSettings={openPopupboxForSettings}
                            roomArr={roomArr}
                            setRoomArr={setRoomArr}
                            sectionArr={sectionArr}
                            setSectionArr={setSectionArr}
                            sessionArr={sessionArr}
                            setSessionArr={setSessionArr}
                        />
                    )}
                />
                <Route
                    exact
                    path='/courseinfo'
                    render={() => (
                        <CourseInfo
                            openPopupboxForSettings={openPopupboxForSettings}
                            sectionArr={sectionArr}
                            sessionArr={sessionArr}
                            courseNameArr={courseNameArr}
                            setcourseNameArr={setcourseNameArr}
                            courseIDArr={courseIDArr}
                            setCourseIDArr={setCourseIDArr}
                            creditHrsArr={creditHrsArr}
                            setCreditHrsArr={setCreditHrsArr}
                        />
                    )}
                />
                <Route
                    exact
                    path='/schedule'
                    render={() => <Schedule openPopupboxForSettings={openPopupboxForSettings} />}
                />

                <Route
                    exact
                    path='/section_schedule'
                    render={() => (
                        <SectionSchedule
                            section={sectionForSchedule}
                            sectionName={sectionName[sectionForSchedule]}
                        />
                    )}
                />
                <Route exact path='/' render={() => <Homepage />} />
                <Redirect to='/' />
            </Switch>
            <PopupboxContainer {...popupboxConfig} />
        </>
    );
}

export default App;
