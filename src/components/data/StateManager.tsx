import { postRequest } from '../../apis/PostRequest'; // Assuming you have this in your project structure
import { decodeJwt, getJwt } from '../../utils/jwt';
import { v4 as uuidv4 } from 'uuid';

interface StateManagerProps {
  userId: string;
  bookId: string;
  pdfFileUrl: string | undefined;
  pageNumber: number;
  annotations: string;
  notes: string;
  selectedText: string;
  uiState: {
    showWorkspace: boolean;
    splitPosition: number[];
    pdfZoom: string;
    workspaceComponent: number;
  }
}

interface StateManagerState {
  userId: string;
  bookId: string;
  pdfFileUrl: string | undefined;
  pageNumber: number;
  annotations: string;
  notes: string;
  selectedText: string;
  uiState: {
    showWorkspace: boolean;
    splitPosition: number[];
    pdfZoom: string;
    workspaceComponent: number;
  };
  chatbot: {
    makeApiRequest: (question: string) => Promise<void>;
  }
}

class StateManager {
  state: StateManagerState;
  timer: any; // Reference to the timer

  constructor(props: StateManagerProps) {
    this.state = {
      userId: props.userId,
      bookId: props.bookId,
      pdfFileUrl: props.pdfFileUrl,
      pageNumber: props.pageNumber,
      annotations: props.annotations,
      notes: props.notes,
      selectedText: props.selectedText,
      uiState: props.uiState,
      chatbot: {
        makeApiRequest: (question: string) => Promise.resolve(),
      },
    };

    // Random guid
    const _uuid = uuidv4();
    console.log('StateManager:constructor:uuid', _uuid);
    // Start the timer when the class is instantiated
  }



  updatePdfFileUrl(pdfFileUrl: string) {
    this.setState({ pdfFileUrl });
  }

  updatePageNumber(pageNumber: number) {
    this.setState({ pageNumber });
  }

  updateSelectedText(selectedText: string) {
    this.setState({ selectedText });
  }

  updateAnnotations(annotationsPromise: Promise<string>) {
    annotationsPromise.then((annotations) => {
      this.setState({ annotations });
    });
  }

  updateNotes(notes: string) {
    this.setState({ notes });
  }

  updatePdfZoom(pdfZoom: string) {
    const zoom = parseFloat(pdfZoom) * 100;
    const zoomString = zoom.toString();
    this.setState({ uiState: { ...this.state.uiState, pdfZoom: zoomString } });
  }

  updateSplitPosition(splitPosition: number[]) {
    this.setState({ uiState: { ...this.state.uiState, splitPosition } });
  }

  updateShowWorkspace(showWorkspace: boolean) {
    this.setState({ uiState: { ...this.state.uiState, showWorkspace } });
  }

  updateWorkspaceComponent(workspaceComponent: number) {
    this.setState({ uiState: { ...this.state.uiState, workspaceComponent } });
  }

  updateChatbotMakeApiRequest(makeApiRequest: (question: string) => Promise<void>) {
    this.setState({ chatbot: { ...this.state.chatbot, makeApiRequest } });
  }

  public getState(): StateManagerState {
    return this.state;
  }

  // This function will be called every 5 seconds by the timer
  runEvery5Seconds = () => {
    // log the traceback
    // console.log('StateManager:runEvery5Seconds');
    // const bookId = localStorage.getItem('bookId') || '';
    // const jwt = getJwt();
    // if (jwt) {
    //   const user = decodeJwt(jwt);
    //   this.setState({ userId: user.id });
    //   this.setState({ bookId });
    // }
    
    const apiUrl = `${process.env.REACT_APP_API_URL}/api/v1/state`;
    postRequest(apiUrl, 
      {
        body: this.getState(),
      })
      .then(response => {
        console.log('Data posted successfully:', response);
        console.log('Current time:', new Date().toLocaleTimeString('en-US'))
      })
      .catch(error => {
        console.error('Error posting data:', error);
      });
  }

  // Helper method to update the state object
  private setState(newState: Partial<StateManagerState>) {
    this.state = { ...this.state, ...newState };
  }
}

export default StateManager;
