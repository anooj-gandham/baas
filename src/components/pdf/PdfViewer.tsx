import React, { useRef, useEffect, useState, useCallback } from 'react';
import WebViewer from '@pdftron/webviewer';
import StateManagerProps from '../../components/data/StateManager';

import './PdfViewer.css';
import IconMap from './IconMap';
import disabledPdfElements from './DisabledPdfElements';

interface PdfViewerProps {
    stateManager: StateManagerProps;
}

const PdfViewer = React.memo(({ stateManager }: PdfViewerProps) => {
    const viewer = useRef<HTMLDivElement>(null);
    const [documentViewer, setDocumentViewer] = useState<any>(null);

    const handleDocumentLoaded = useCallback((event: any) => {
        const { documentViewer } = event.target.Core;
        setDocumentViewer(documentViewer);
    }, []);

    useEffect(() => {
        const instance = WebViewer(
            {
                path: '/webviewer/lib',
                initialDoc: stateManager.state.pdfFileUrl,
                // initialDoc: '/pdfs/0410100.pdf',
                // initialDoc: '/pdfs/Document1.pdf',
                // licenseKey: 'demo',
                disabledElements: disabledPdfElements,
            },
            viewer.current as HTMLElement,
        );

        instance.then((instance) => {
            const { documentViewer } = instance.Core;
            instance.UI.setActiveLeftPanel('outlinesPanel');
            const aa = instance.UI.contextMenuPopup.add([
                {
                    type: 'actionButton',
                    img: '/static/icons/pageSummarizer.svg',
                    title: 'Summarize the page',
                    dataElement: 'page-summarizer',
                    onClick: () => {
                        // console.log(stateManager.state.chatbot.makeApiRequest);
                        stateManager.state.chatbot.makeApiRequest('Please summarize the concepts in page ' + stateManager.state.pageNumber);
                    },
                },
                {
                    type: 'divider',
                }
            ]);

            instance.UI.textPopup.add([
                {
                    type: 'actionButton',
                    img: '/static/icons/textExplainer.svg',
                    title: 'Explain selected text',
                    dataElement: 'text-explainer',
                    onClick: () => {
                        // console.log('Text Explainer: ' + stateManager.state.selectedText);
                        stateManager.state.chatbot.makeApiRequest('Please Explain:\t' + stateManager.state.selectedText);
                    },
                },
                {
                    type: 'divider',
                }
            ]);

            IconMap.forEach((icon) => {
                instance.UI.updateElement(icon.dataElement, {
                    img: icon.img,
                });
            });

            documentViewer.addEventListener('documentLoaded', () => {
                documentViewer.setCurrentPage(stateManager.state.pageNumber, false);
                instance.UI.setZoomLevel(stateManager.state.uiState.pdfZoom);

                const annotManager = documentViewer.getAnnotationManager();
                annotManager.addEventListener('annotationChanged', (annotations, action) => {
                    const guestAnnotations = annotManager.getAnnotationsList().filter((annotation: any) => {
                        return annotation.Author === 'Guest';
                    });
                    const guestAnnotationsExport = annotManager.exportAnnotations({ annotList: guestAnnotations });
                    stateManager.updateAnnotations(guestAnnotationsExport);
                });

                const xml = stateManager.state.annotations;
                const { annotationManager } = instance.Core;
                annotationManager.importAnnotations(xml);
            });

            documentViewer.addEventListener('pageNumberUpdated', (pageNumber) => {
                stateManager.updatePageNumber(pageNumber);
            });

            documentViewer.addEventListener('textSelected', (quads, selectedText, pageNumber) => {
                stateManager.updateSelectedText(selectedText);
            });

            documentViewer.addEventListener('zoomUpdated', (zoom) => {
                stateManager.updatePdfZoom(zoom);
            });

            const annotManager = documentViewer.getAnnotationManager();
            annotManager.addEventListener('annotationChanged', (annotations, action) => {
                const guestAnnotations = annotManager.getAnnotationsList().filter((annotation: any) => {
                    return annotation.Author === 'Guest';
                });
                const guestAnnotationsExport = annotManager.exportAnnotations({ annotList: guestAnnotations });
                stateManager.updateAnnotations(guestAnnotationsExport);
            });

        });

        return () => {
            instance.then((instance) => {
                const { documentViewer } = instance.Core;

                documentViewer.removeEventListener('documentLoaded', handleDocumentLoaded);
            });
        };
    }, []);

    return (
        <div className="pdf-div-wrapper">

            <div className="pdf-viewer" ref={viewer} />
        </div>
    );
});

export default PdfViewer;
