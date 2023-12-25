export const questionFirstPart = [
    {
    question: 'How does Fortify work?',
    answer: "Fortify is a locally installed application that listens on a known TCP port. Web applications use the Fortify WebCrypto polyfill to communicate with this application which enables the web application to use smart cards, security tokens and locally installed certificates."
    },
    {
        question: 'What smart cards do you support??',
        answer: "Generally Fortify should work with any PKCS#11 enabled smart card. For it to work though it needs to know which driver to load for a given smart card. "
        },
]

export const questionSecondPart = [
    {
        question: "What Browsers does Fortify support?",
        answer: "IE 11, Edge, Safari, Firefox, and Chrome"
    },
    {
        question: "What Operating Systems does Fortify support?",
        answer: "OSX, Windows 7 and later"
    }
]