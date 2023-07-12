import React, { useState } from 'react';
import Assessment from './Assessment';
import AssessmentTopics from './AssessmentTopics';
import './AssessmentSelector.css';

interface Topic {
    name: string;
    questions: Question[];
}

interface Question {
    prompt: string;
    options: string[];
    answer: string;
}

const topics: Topic[] = AssessmentTopics;

const AssessmentSelector: React.FC = () => {
    const [selectedTopicIndex, setSelectedTopicIndex] = useState<number | null>(null);
    const [showScore, setShowScore] = useState(false);

    const handleTopicSelect = (index: number) => {
        setSelectedTopicIndex(index);
    };

    const handleScoreReset = () => {
        setSelectedTopicIndex(null);
        setShowScore(false);
    }

    return (
        <div className="assessment-selector">
            {selectedTopicIndex === null && !showScore && (
                <>
                    <h2>Choose a topic for assessment:</h2>
                    <ul>
                        {topics.map((topic, index) => (
                            <li key={index}>
                                <button onClick={() => handleTopicSelect(index)}>{topic.name}</button>
                            </li>
                        ))}
                    </ul>
                </>
            )}
            {selectedTopicIndex !== null && !showScore && (
                <Assessment questions={topics[selectedTopicIndex].questions} onScore={() => setShowScore(true)} />
            )}
            {showScore && (
                <>
                    <div className="assessment-selector__score">
                        You scored {topics[selectedTopicIndex as number].questions.length} out of {topics[selectedTopicIndex as number].questions.length}
                        <button onClick={handleScoreReset}>Back</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default AssessmentSelector;
