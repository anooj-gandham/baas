import {
    BasicFormattingButtonGroup,
    Toolbar,
    CommandButtonGroup,
    CommandButton,
    CommandMenuItem,
    DropdownButton,
    IndentationButtonGroup,
    TextAlignmentButtonGroup,
    useCommands,
    InsertHorizontalRuleButton,
} from "@remirror/react";

import MyIcon from "../ui/icon/MyIcon";

// const LineHeightButtonDropdown = () => {
//     const { setLineHeight } = useCommands();
//     return (
//         <CommandButtonGroup>
//             <DropdownButton aria-label='Line height' icon='lineHeight'>
//                 <CommandMenuItem
//                     commandName='setLineHeight'
//                     onSelect={() => setLineHeight(1)}
//                     enabled={setLineHeight.enabled(1)}
//                     label='Narrow'
//                 />
//                 <CommandMenuItem
//                     commandName='setLineHeight'
//                     onSelect={() => setLineHeight(2)}
//                     enabled={setLineHeight.enabled(2)}
//                     label='Wide'
//                 />
//             </DropdownButton>
//         </CommandButtonGroup>
//     );
// };

const CustomHeadingButtonGroup = () => {
    // Have 3 levels of heading and one normal text
    const { toggleHeading } = useCommands();
    return (
        <CommandButtonGroup>
            <DropdownButton
                aria-label='Heading'
                icon={<MyIcon
                    name='Heading'
                    path='/static/icons/heading.svg'
                    height='1rem' />}>
                <CommandMenuItem
                    commandName='toggleHeading'
                    onSelect={() => toggleHeading({ level: 1 })}
                    enabled={toggleHeading.enabled({ level: 1 })}
                    label='Heading 1'
                    icon={<MyIcon
                        name='h1'
                        path='/static/icons/h1.svg'
                        height='1rem' />}
                    displayShortcut={false}
                />
                <CommandMenuItem
                    commandName='toggleHeading'
                    onSelect={() => toggleHeading({ level: 2 })}
                    enabled={toggleHeading.enabled({ level: 2 })}
                    label='Heading 2'
                    icon={<MyIcon
                        name='h2'
                        path='/static/icons/h2.svg'
                        height='1rem' />}
                    displayShortcut={false}
                />
                <CommandMenuItem
                    commandName='toggleHeading'
                    onSelect={() => toggleHeading({ level: 3 })}
                    enabled={toggleHeading.enabled({ level: 3 })}
                    label='Heading 3'
                    icon={<MyIcon
                        name='h3'
                        path='/static/icons/h3.svg'
                        height='1rem' />}
                    displayShortcut={false}
                />
                <CommandMenuItem
                    commandName='toggleHeading'
                    onSelect={() => toggleHeading({ level: 4 })}
                    enabled={toggleHeading.enabled({ level: 4 })}
                    label='Heading 4'
                    icon={<MyIcon
                        name='h4'
                        path='/static/icons/h4.svg'
                        height='1rem' />}
                    displayShortcut={false}
                />
            </DropdownButton>
        </CommandButtonGroup>

    );
};


const CustomTextAlignmentButtonGroup = () => {
    const { leftAlign, centerAlign, rightAlign, justifyAlign } = useCommands();
    return (
        <CommandButtonGroup>
            <DropdownButton
                aria-label='Text alignment'
                icon={<MyIcon
                    name='align'
                    path='/static/icons/formatLeftAlign.svg'
                    height='1rem' />}
            >

                <CommandMenuItem
                    commandName='leftAlign'
                    onSelect={leftAlign}
                    enabled={leftAlign.enabled()}
                    label='Left'
                    icon={<MyIcon
                        name='alignLeft'
                        path='/static/icons/formatLeftAlign.svg'
                        height='1rem' />}
                    displayShortcut={false}
                    // onClick={() => console.log('Left')}
                />
                <CommandMenuItem
                    commandName='centerAlign'
                    onSelect={centerAlign}
                    enabled={centerAlign.enabled()}
                    label='Center'
                    icon={<MyIcon
                        name='alignCenter'
                        path='/static/icons/formatCenterAlign.svg'
                        height='1rem' />}
                    displayShortcut={false}
                />
                <CommandMenuItem
                    commandName='rightAlign'
                    onSelect={rightAlign}
                    enabled={rightAlign.enabled()}
                    label='Right'
                    icon={<MyIcon
                        name='alignRight'
                        path='/static/icons/formatRightAlign.svg'
                        height='1rem' />}
                    displayShortcut={false}
                />
            </DropdownButton>

        </CommandButtonGroup>
    );
};


const CustomBasicFormattingButtonGroup = () => {
    const { toggleBold, toggleItalic, toggleUnderline } = useCommands();
    return (
        <CommandButtonGroup>
            <CommandButton
                commandName='toggleBold'
                onSelect={toggleBold}
                enabled={true}
                label='Bold'
                icon={<MyIcon
                    name='bold'
                    path='/static/icons/bold.svg'
                    height='1rem' />}
                displayShortcut={false}
            />
            <CommandButton
                commandName='toggleItalic'
                onSelect={toggleItalic}
                enabled={toggleItalic.enabled()}
                label='Italic'
                icon={<MyIcon
                    name='italic'
                    path='/static/icons/italic.svg'
                    height='1rem' />}
                displayShortcut={false}
            />
            <CommandButton
                commandName='toggleUnderline'
                onSelect={toggleUnderline}
                enabled={toggleUnderline.enabled()}
                label='Underline'
                icon={<MyIcon
                    name='underline'
                    path='/static/icons/underline.svg'
                    height='1rem' />}
                displayShortcut={false}
            />
        </CommandButtonGroup>
    );
};


const CustomInsertHorizontalRuleButton = () => {
    const { insertHorizontalRule } = useCommands();
    return (
        <CommandButton
            commandName='insertHorizontalRule'
            onSelect={insertHorizontalRule}
            enabled={insertHorizontalRule.enabled()}
            label='Horizontal rule'
            icon={<MyIcon
                name='horizontalRule'
                path='/static/icons/horizontalRule.svg'
                height='1rem' />}
            displayShortcut={false}
        />
    );
};


const CustomIndentationButtonGroup = () => {
    const { increaseIndent, decreaseIndent } = useCommands();
    return (
        <CommandButtonGroup>
            <CommandButton
                commandName='increaseIndent'
                onSelect={increaseIndent}
                enabled={increaseIndent.enabled()}
                label='Increase indentation'
                icon={<MyIcon
                    name='increaseIndent'
                    path='/static/icons/indentIncrease.svg'
                    height='1rem' />}
                displayShortcut={false}
            />
            <CommandButton
                commandName='decreaseIndent'
                onSelect={decreaseIndent}
                enabled={decreaseIndent.enabled()}
                label='Decrease indentation'
                icon={<MyIcon
                    name='decreaseIndent'
                    path='/static/icons/indentDecrease.svg'
                    height='1rem' />}
                displayShortcut={false}
            />
        </CommandButtonGroup>
    );
};


const TextEditorToolbar = () => {

    return (
        <Toolbar>
            <CustomBasicFormattingButtonGroup />
            {/* <HeadingLevelButtonGroup showAll /> */}
            <CustomHeadingButtonGroup />
            {/* <TextAlignmentButtonGroup /> */}
            <CustomTextAlignmentButtonGroup />
            <CustomIndentationButtonGroup />
            <CustomInsertHorizontalRuleButton />
        </Toolbar>
    );
};

export default TextEditorToolbar;