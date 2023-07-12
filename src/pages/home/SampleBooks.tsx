export interface BookProps {
    id: number;
    title: string;
    author: string;
    coverImage: string;
    description: string;
    pdfFileUrl: string;
}


const SampleBooks: BookProps[] = [
    {
        id: 1,
        title: 'Indian Polity',
        author: 'M. Laxmikanth',
        coverImage: '/static/images/IndianPolity.png',
        description: 'This is one book that is sure to find a place in the IAS aspirants list of books for the UPSC exam. Polity is a tough subject to get into. Unfortunately, Laxmikanth won’t make it easier. However, reading through Laxmikanth is the best way we know to get students attuned to the subject.',
        pdfFileUrl: '/pdfs/IndianPolity.pdf',
    },
    // {
    //     id: 2,
    //     title: 'Indian Economy',
    //     author: 'Ramesh Singh',
    //     coverImage: '/static/images/IndianEconomy.png',
    //     description: 'Indian Economy by Ramesh Singh is a highly recommended book for anyone who wants to gain a comprehensive and practical understanding of the Indian economy. The book covers various economic aspects and provides up-to-date information on the latest economic developments in India.',
    // },
    {
        id: 8,
        title: 'Economic Survey of India',
        author: 'Govt. of India',
        coverImage: '/static/images/EconomicSurveyOfIndia.png',
        description: 'The Economic Survey of India is an important and comprehensive document that provides a detailed analysis of the country\'s economic performance, challenges, and future prospects. Reading the survey can help individuals gain a better understanding of the Indian economy and its various sectors, which is essential for making informed decisions in business or policy-making.',
        pdfFileUrl: '/pdfs/EconomicSurveyOfIndia.pdf',
    },
    {
        id: 9,
        title: 'Union Budget 2023-24',
        author: 'Nirmala Sitharaman',
        coverImage: '/static/images/BudgetSpeech.png',
        description: 'The Budget 2023-2024 speech delivered by Nirmala Sitharaman, Minister of Finance, is a crucial document that outlines the government\'s economic policies and priorities for the upcoming financial year. Reading the speech can help individuals understand the government\'s plans for various sectors and make informed decisions about investments, business strategies, and financial planning.',
        pdfFileUrl: '/pdfs/BudgetSpeech.pdf',
    },
    {
        id: 3,
        title: 'India After Gandhi',
        author: 'Ramachandra Guha',
        coverImage: '/static/images/IndiaAfterGandhi.png',
        description: 'India After Gandhi by Ramachandra Guha is a must-read book for anyone interested in gaining a deep understanding of India\'s post-independence history. It provides comprehensive and well-researched insights into the political, social, and economic changes that have taken place in India since gaining independence from British colonial rule.',
        pdfFileUrl: '/pdfs/IndiaAfterGandhi.pdf',
    },
    {
        id: 4,
        title: 'India 2020',
        author: 'A. P. J. Abdul Kalam',
        coverImage: '/static/images/India2020.png',
        description: 'India 2020 by A. P. J. Abdul Kalam is a must-read book for anyone interested in gaining a deep understanding of India\'s post-independence history. It provides comprehensive and well-researched insights into the political, social, and economic changes that have taken place in India since gaining independence from British colonial rule.',
        pdfFileUrl: '/pdfs/India2020.pdf',
    },
    {
        id: 5,
        title: 'Introductory Microeconomics',
        author: 'NCERT',
        coverImage: '/static/images/IntroductoryMicroeconomics.png',
        description: 'They should form the basics of your preparation. No matter what coaching you go to or what books you refer to, NCERTs are a must-read for every aspirant. How to Read NCERTs is a separate article. Read it for a comprehensive overview of NCERT study Strategy.',
        pdfFileUrl: '/pdfs/IntroductoryMicroeconomics.pdf',
    },
    {
        id: 6,
        title: 'India\'s Struggle for Independence',
        author: ' Bipin Chandra',
        coverImage: '/static/images/IndiasStruggleForIndependence.png',
        description: 'India\'s Struggle for Independence by Bipan Chandra is a highly recommended book for anyone interested in gaining a deep understanding of the Indian independence movement. The book offers a comprehensive and well-researched account of the various events and movements that shaped India\'s struggle for freedom, providing valuable insights into the country\'s history and culture.',
        pdfFileUrl: '/pdfs/IndiasStruggleForIndependence.pdf',
    },
    // {
    //     id: 7,
    //     title: 'Introduction to Constitution of India',
    //     author: 'D.D Basu',
    //     coverImage: '/static/images/IntroductionToConstitutionOfIndia.png',
    //     description: 'Introduction to the Constitution of India by D.D. Basu is a must-read for anyone interested in understanding the fundamental principles and structure of India\'s constitutional framework. The book provides a comprehensive and detailed analysis of the Indian Constitution, covering various aspects such as fundamental rights, directive principles of state policy, and the distribution of powers between the Union and State governments.'
    // }
];

export default SampleBooks;

