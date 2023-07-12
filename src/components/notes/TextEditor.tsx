import * as React from 'react';
import { useEffect } from 'react';
import {
    BoldExtension,
    HeadingExtension,
    ItalicExtension,
    UnderlineExtension,
    BlockquoteExtension,
    BulletListExtension,
    NodeFormattingExtension,
    HorizontalRuleExtension,
} from "remirror/extensions";

import {
    MarkdownToolbar,
    useRemirror,
    useHelpers,
    Remirror,
    ThemeProvider,
    OnChangeHTML,
    FloatingToolbar as FloatingToolbarComponent,
} from "@remirror/react";

import { AllStyledComponent } from '@remirror/styles/styled-components';
import TextEditorToolbar from "./TextEditorToolbar";
import './TextEditor.css';
import 'remirror/styles/all.css';
import StateManagerProps from '../../components/data/StateManager';


const extensions = () => [
    new HeadingExtension(),
    new BoldExtension({}),
    new ItalicExtension(),
    new UnderlineExtension(),
    new BlockquoteExtension(),
    new BulletListExtension(),
    new NodeFormattingExtension(),
    new HorizontalRuleExtension(),
];

interface TextEditorProps {
    stateManager: StateManagerProps | undefined;
}


const TextEditor: React.FC<TextEditorProps> = ({ stateManager }) => {
    const { manager, state } = useRemirror({
        extensions,
        content: stateManager?.state.notes,
        selection: "end",
        stringHandler: "html"
    });

    // const { getHTML } = useRemirrorContext();

    const handleChange = (html: string) => {

        // Call stateManager.updateNotes(html); and wait for 2 seconds
        stateManager?.updateNotes(html);

        setTimeout(() => {
            console.log(stateManager?.state.notes);
        }, 2000);

    }

    return (
        <AllStyledComponent>
            <ThemeProvider>
                <Remirror
                    manager={manager}
                    initialContent={state}
                    autoFocus
                    autoRender="end"
                >
                    <TextEditorToolbar />
                    {/* <MarkdownToolbar /> */}
                    <OnChangeHTML onChange={handleChange} />
                    {/* <FloatingToolbarComponent /> */}
                </Remirror>
            </ThemeProvider>
        </AllStyledComponent>
    );
}


export default TextEditor;