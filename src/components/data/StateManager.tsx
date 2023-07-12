// Default selectedText is empty string
interface StateManagerProps {
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
      pdfFileUrl: props.pdfFileUrl,
      pageNumber: props.pageNumber,
      annotations: props.annotations,
      notes: props.notes,
      selectedText: '',
      uiState: props.uiState,
      chatbot: {
        makeApiRequest: (question: string) => Promise.resolve(),
      },
    };
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
    // console.log(this.state)
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
    pdfZoom = zoomString;
    this.setState({ uiState: { ...this.state.uiState, pdfZoom } });
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
    console.log(makeApiRequest);
    this.setState({ chatbot: { ...this.state.chatbot, makeApiRequest } });
  }


  // This function will be called every 5 seconds by the timer
  runEvery5Seconds() {
  }

  // Helper method to update the state object
  private setState(newState: Partial<StateManagerState>) {
    this.state = { ...this.state, ...newState };
  }
}

export default StateManager;
