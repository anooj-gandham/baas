import React, { FC, useState, useEffect } from 'react';
import ReadLayout from '../../layouts/ReadLayout';
import PdfViewer from '../../components/pdf/PdfViewer';
import TextEditor from '../../components/notes/TextEditor';
import Navbar from '../../components/navbar/Navbar';
import Chatbot from '../../components/chatbot/ChatGptWrapper';
import AssessmentSelector from '../../components/assesment/AssessmentSelector';
import StateManager from '../../components/data/StateManager';
import { getRequest } from '../../apis/GetRequest';
import { getJwt, decodeJwt } from '../../utils/jwt';

import './Read.css';
import { User } from '../../components/ui/UserProfile/UserProfile';

const Read: FC = () => {
    const [stateManager, setStateManager] = useState<StateManager | undefined>(undefined);
    const [user, setUser] = useState<User | null>(null);

    // Get book id from local storage
    const bookId = localStorage.getItem('bookId');

    useEffect(() => {
        const token = getJwt();
        if (token) {
            const decoded = decodeJwt(token);
            setUser(decoded);
        }
    }, []);

    useEffect(() => {
        // Ensure the user is defined before constructing the URL
        if (user) {
            const userStateUrl = `${process.env.REACT_APP_API_URL}/api/v1/state?userId=${user.id}&bookId=${bookId}`;

            getRequest(userStateUrl)
                .then(response => {
                    const stateManager = new StateManager(response);
                    setStateManager(stateManager);
                });
        }
    }, [user]);

    useEffect(() => {
        let interval: NodeJS.Timeout | undefined;

        if (stateManager) {
            interval = setInterval(() => {
                stateManager.runEvery5Seconds();
            }, 10000); // 10 seconds
        }

        // Clear the interval when the component is unmounted
        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [stateManager]);

    const workspaceComponents = [
        { component: <Chatbot stateManager={stateManager} />, title: 'Chat' },
        { component: <TextEditor stateManager={stateManager} />, title: 'Notes' },
        { component: <AssessmentSelector />, title: 'Assessments' },
    ];

    return (
        <div className="read-container">
            <ReadLayout
                Topbar={() => <Navbar username={user?.name || "Loading..."} />}
                Reader={React.memo(() => (
                    <>
                        {stateManager ? (
                            <PdfViewer stateManager={stateManager} />
                        ) : (
                            <p>Loading...</p>
                        )}
                    </>
                ))}
                Workspace={workspaceComponents}
                stateManager={stateManager}
            />
        </div>
    );
};

export default Read;
