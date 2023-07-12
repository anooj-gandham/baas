import React, { FC, useState, useEffect } from 'react';
import ReadLayout from '../../layouts/ReadLayout';
import PdfViewer from '../../components/pdf/PdfViewer';
import TextEditor from '../../components/notes/TextEditor';
import Navbar from '../../components/navbar/Navbar';
import Chatbot from '../../components/chatbot/ChatGptWrapper';
import AssessmentSelector from '../../components/assesment/AssessmentSelector';
import StateManager from '../../components/data/StateManager';
import sampleBooks from '../home/SampleBooks';
// import { getRequest } from '../../apis/GetRequest';
import { postRequest } from '../../apis/PostRequest';

import './Read.css';
import { url } from 'inspector';

const Read: FC = () => {
	const [stateManager, setStateManager] = useState<StateManager>();

	// Get book id from local storage
	const bookId = localStorage.getItem('bookId');
	// Get book from sample books
	const book = sampleBooks.find((book) => book.id.toString() === bookId);

	const userStateUrl = process.env.REACT_APP_API_URL + '/books/userState';

	useEffect(() => {
		postRequest(userStateUrl, {
			body: {
				bookId: bookId,
				userId: 1
			}
		})
			.then((data: any) => {
				console.log(data);
				// makeApiRequest: (question: string) => Promise<void>;
				const makeApiRequest = (question: string) => {
					return;
				};
				data.makeApiRequest = makeApiRequest;
				setStateManager(new StateManager(data));
			}
			)
			.catch((err: any) => console.log(err));
	}, []);

	const workspaceComponents = [
		{ component: <Chatbot stateManager={stateManager} />, title: 'Chat' },
		{ component: <TextEditor stateManager={stateManager} />, title: 'Notes' },
		{ component: <AssessmentSelector />, title: 'Assessments' },
	];

	return (
		<div className="read-container">
			<ReadLayout
				Topbar={() => <Navbar username="John Doe" />}
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
