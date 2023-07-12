import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "What are the quadratures of the quantized field?",
        value: "What are the quadratures of the quantized field?"
    },
    {
        text: "What are the four basic principles of quantum mechanics?",
        value: "What are the four basic principles of quantum mechanics?"
    },
    {
        text: "Please summarize the concepts in page 3.",
        value: "Please summarize the concepts in page 3."
    },
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
