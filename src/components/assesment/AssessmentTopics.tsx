import React from 'react';

export interface Question {
    prompt: string;
    options: string[];
    answer: string;
}

export interface AssessmentTopic {
    name: string;
    questions: Question[];
}

const topics: AssessmentTopic[] = [
    {
        name: 'State of the Economy 2022-23: Recovery Complete',
        questions: [
            {
                prompt: 'What is the current state of India\'s economy?', options: ['Stable', 'Recovering', 'Declining', 'Growing'], answer: 'Recovering'
            },
            { prompt: 'What is the projected GDP growth rate for India in 2022-23?', options: ['6%', '7%', '8%', '9%'], answer: '7%' },
            { prompt: 'What are some of the growth drivers for India\'s economy?', options: ['Manufacturing and Services', 'Agriculture', 'Mining and Construction', 'All of the above'], answer: 'All of the above' },
            // add more questions here...
        ]
    },
    {
        name: 'The Global Economy Battles Through a Unique Set of Challenges',
        questions: [
            { prompt: 'What are some of the challenges facing the global economy?', options: ['Climate change', 'Geopolitical tensions', 'Pandemic', 'All of the above'], answer: 'All of the above' },
            { prompt: 'What is the impact of the pandemic on the global economy?', options: ['Negative', 'Positive', 'Neutral', 'None of the above'], answer: 'Negative' },
            { prompt: 'What is the role of technology in the global economy?', options: ['Driver of growth', 'Threat to jobs', 'Both of the above', 'None of the above'], answer: 'Both of the above' },
            // add more questions here...
        ]
    },
    {
        name: 'Macroeconomic and Growth Challenges in the Indian Economy',
        questions: [
            { prompt: 'What are some of the macroeconomic challenges facing India?', options: ['Inflation', 'Fiscal deficit', 'Current account deficit', 'All of the above'], answer: 'All of the above' },
            { prompt: 'What is the role of government in addressing these challenges?', options: ['Increase spending', 'Reduce taxes', 'Introduce reforms', 'All of the above'], answer: 'All of the above' },
            { prompt: 'What is the projected growth rate for India in 2023-24?', options: ['6%', '7%', '8%', '9%'], answer: '8%' },
            // add more questions here...
        ]
    },
    {
        name: 'India’s Economic Resilience and Growth Drivers',
        questions: [
            {
                prompt: 'What are some of the factors contributing to India\'s economic resilience?', options: ['Large domestic market', 'Strong workforce', 'Reform - oriented government', 'All of the above'], answer: 'All of the above'
            },
            {
                prompt: 'What are some of the growth drivers for India\'s economy?', options: ['Manufacturing and Services', 'Agriculture', 'Mining and Construction', 'All of the above'], answer: 'All of the above'
            },
            { prompt: 'What is the impact of technology on India\'s economy?', options: ['Positive', 'Negative', 'Neutral', 'None of the above'], answer: 'Positive' },
            // add more questions here...
        ]
    },
    {
        name: 'India’s Inclusive Growth',
        questions: [
            { prompt: 'What is inclusive growth?', options: ['Growth that benefits everyone', 'Growth that benefits only the rich', 'Growth that benefits only the poor', 'None of the above'], answer: 'Growth that benefits everyone' },
            {
                prompt: 'What are some of the ways in which India can achieve inclusive growth?',
                options: ['Increase spending on social welfare programs', 'Reduce taxes', 'Introduce reforms', 'All of the above'],
                answer: 'All of the above'
            },
            {
                prompt: 'What are some of the challenges facing India in achieving inclusive growth?',
                options: ['Inflation', 'Fiscal deficit', 'Current account deficit', 'All of the above'],
                answer: 'All of the above'
            },
            {
                prompt: 'What is the role of government in addressing these challenges?',
                options: ['Increase spending', 'Reduce taxes', 'Introduce reforms', 'All of the above'],
                answer: 'All of the above'
            },
            {
                prompt: 'What is the projected growth rate for India in 2023-24?',
                options: ['6%', '7%', '8%', '9%'],
                answer: '8%'
            },



        ]
    },
    {
        name: 'India’s Economic Resilience and Growth Drivers',
        questions: [
            {
                prompt: 'What are some of the factors contributing to India\'s economic resilience?',
                options: ['Large domestic market', 'Strong workforce', 'Reform - oriented government', 'All of the above'],
                answer: 'All of the above'
            },
            {
                prompt: 'What are some of the growth drivers for India\'s economy?',
                options: ['Manufacturing and Services', 'Agriculture', 'Mining and Construction', 'All of the above'],
                answer: 'All of the above'
            },
            {
                prompt: 'What is the impact of technology on India\'s economy?',
                options: ['Positive', 'Negative', 'Neutral', 'None of the above'],
                answer: 'Positive'
            },

        ]
    },
    {
        name: 'State of the Economy 2022-23: Recovery Complete',
        questions: [
            {
                prompt: 'What is the current state of India\'s economy?', options: ['Stable', 'Recovering', 'Declining', 'Growing'], answer: 'Recovering'
            },
            { prompt: 'What is the projected GDP growth rate for India in 2022-23?', options: ['6%', '7%', '8%', '9%'], answer: '7%' },
            { prompt: 'What are some of the growth drivers for India\'s economy?', options: ['Manufacturing and Services', 'Agriculture', 'Mining and Construction', 'All of the above'], answer: 'All of the above' },
            // add more questions here...
        ]
    },
    {
        name: 'The Global Economy Battles Through a Unique Set of Challenges',
        questions: [
            { prompt: 'What are some of the challenges facing the global economy?', options: ['Climate change', 'Geopolitical tensions', 'Pandemic', 'All of the above'], answer: 'All of the above' },
            { prompt: 'What is the impact of the pandemic on the global economy?', options: ['Negative', 'Positive', 'Neutral', 'None of the above'], answer: 'Negative' },
            { prompt: 'What is the role of technology in the global economy?', options: ['Driver of growth', 'Threat to jobs', 'Both of the above', 'None of the above'], answer: 'Both of the above' },
            // add more questions here...
        ]
    },
    {
        name: 'Macroeconomic and Growth Challenges in the Indian Economy',
        questions: [
            { prompt: 'What are some of the macroeconomic challenges facing India?', options: ['Inflation', 'Fiscal deficit', 'Current account deficit', 'All of the above'], answer: 'All of the above' },
            { prompt: 'What is the role of government in addressing these challenges?', options: ['Increase spending', 'Reduce taxes', 'Introduce reforms', 'All of the above'], answer: 'All of the above' },
            { prompt: 'What is the projected growth rate for India in 2023-24?', options: ['6%', '7%', '8%', '9%'], answer: '8%' },
            // add more questions here...
        ]
    },
    {
        name: 'India’s Economic Resilience and Growth Drivers',
        questions: [
            {
                prompt: 'What are some of the factors contributing to India\'s economic resilience?', options: ['Large domestic market', 'Strong workforce', 'Reform - oriented government', 'All of the above'], answer: 'All of the above'
            },
            {
                prompt: 'What are some of the growth drivers for India\'s economy?', options: ['Manufacturing and Services', 'Agriculture', 'Mining and Construction', 'All of the above'], answer: 'All of the above'
            },
            { prompt: 'What is the impact of technology on India\'s economy?', options: ['Positive', 'Negative', 'Neutral', 'None of the above'], answer: 'Positive' },
            // add more questions here...
        ]
    },
    {
        name: 'India’s Inclusive Growth',
        questions: [
            { prompt: 'What is inclusive growth?', options: ['Growth that benefits everyone', 'Growth that benefits only the rich', 'Growth that benefits only the poor', 'None of the above'], answer: 'Growth that benefits everyone' },
            {
                prompt: 'What are some of the ways in which India can achieve inclusive growth?',
                options: ['Increase spending on social welfare programs', 'Reduce taxes', 'Introduce reforms', 'All of the above'],
                answer: 'All of the above'
            },
            {
                prompt: 'What are some of the challenges facing India in achieving inclusive growth?',
                options: ['Inflation', 'Fiscal deficit', 'Current account deficit', 'All of the above'],
                answer: 'All of the above'
            },
            {
                prompt: 'What is the role of government in addressing these challenges?',
                options: ['Increase spending', 'Reduce taxes', 'Introduce reforms', 'All of the above'],
                answer: 'All of the above'
            },
            {
                prompt: 'What is the projected growth rate for India in 2023-24?',
                options: ['6%', '7%', '8%', '9%'],
                answer: '8%'
            },



        ]
    },
    {
        name: 'India’s Economic Resilience and Growth Drivers',
        questions: [
            {
                prompt: 'What are some of the factors contributing to India\'s economic resilience?',
                options: ['Large domestic market', 'Strong workforce', 'Reform - oriented government', 'All of the above'],
                answer: 'All of the above'
            },
            {
                prompt: 'What are some of the growth drivers for India\'s economy?',
                options: ['Manufacturing and Services', 'Agriculture', 'Mining and Construction', 'All of the above'],
                answer: 'All of the above'
            },
            {
                prompt: 'What is the impact of technology on India\'s economy?',
                options: ['Positive', 'Negative', 'Neutral', 'None of the above'],
                answer: 'Positive'
            },

        ]
    },
]

export default topics;