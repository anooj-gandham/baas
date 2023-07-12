import * as React from 'react';
import { useState } from 'react';
import Split from 'react-split';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import StateManagerProps from '../components/data/StateManager';
import './Layout.css';
import './ReadLayout.css';

interface ReadLayoutProps {
    Topbar?: React.FC;
    Reader?: React.FC;
    Workspace?: { title: string; component: React.ReactNode }[];
    stateManager: StateManagerProps | undefined;
}

const ReadLayout: React.FC<ReadLayoutProps> = ({ Topbar, Reader, Workspace, stateManager }) => {

    console.log("showWorkspace");
    console.log(stateManager?.state.uiState.showWorkspace)
    const [showWorkspace, setShowWorkspace] = useState<boolean>(stateManager?.state.uiState.showWorkspace || true);
    const [splitPosition, setSplitPosition] = useState(stateManager?.state.uiState.splitPosition || [70, 30]);

    console.log("showWorkspace");
    console.log(showWorkspace);

    const handleToggleWorkspace = () => {
        setShowWorkspace(!showWorkspace);
        if (stateManager) {
            stateManager?.updateShowWorkspace(!showWorkspace);
        }
    };

    const handleDragEnd = (sizes: number[]) => {
        setSplitPosition(sizes);
        if (stateManager) {
            stateManager?.updateSplitPosition(sizes);
        }
    };

    const workspaceSize = showWorkspace ? splitPosition[1] : 0;
    const readerSize = showWorkspace ? splitPosition[0] : 100;
    const maxWorkspaceSize = showWorkspace ? 10000 : 0;
    const minWorkspaceSize = showWorkspace ? 500 : 0;
    const minReaderSize = 920;
    const toggleWorkspaceClass = showWorkspace ? 'open' : 'closed';


    return (
        <div className="flex-row">
            <div className="read-header">
                {Topbar && <Topbar />}
            </div>
            <Split
                className="read-split-element flex"
                direction="horizontal"
                sizes={[readerSize, workspaceSize]}
                minSize={[minReaderSize, minWorkspaceSize]}
                maxSize={[10000, maxWorkspaceSize]}
                onDrag={handleDragEnd}
            >
                <div className="reader-container">

                    {Reader && <Reader />}
                    <img
                        src="/static/icons/minimizeRightPanel.svg"
                        className={`toggle-workspace-${toggleWorkspaceClass}`}
                        style={showWorkspace ? { left: `calc(${readerSize}% - 0.9rem)` } : { right: '-0.1rem' }}
                        onClick={handleToggleWorkspace}
                        alt=""
                    />
                </div>
                <div
                    className="workspace-container"
                    style={showWorkspace ? { display: 'block' } : { display: 'none' }}
                >
                    {Workspace && Workspace.length > 0 &&
                        <Tabs defaultIndex={stateManager?.state.uiState.workspaceComponent || 0}>
                            <TabList className="tab-headers">
                                {Workspace.map((tab, index) => (
                                    <Tab className='tab-header' key={index}>{tab.title}<br /></Tab>
                                ))}
                            </TabList>
                            {Workspace.map((tab, index) => (
                                <TabPanel key={index}>
                                    {tab.component}
                                </TabPanel>
                            ))}
                        </Tabs>
                    }
                </div>
            </Split>
        </div>
    );
};

export default ReadLayout;

