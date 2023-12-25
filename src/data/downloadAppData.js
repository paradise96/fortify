const svgCross = <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="none"><path fill="#0097FC" d="M25 50c13.807 0 25-11.193 25-25S38.807 0 25 0 0 11.193 0 25s11.193 25 25 25Z" /><path fill="#fff" d="m15.631 40.91 21.49-31.062h-1.994L13.637 40.91h1.994Z" /><path fill="#fff" d="M35.127 40.91 13.637 9.847h1.994l21.49 31.061h-1.994Z" /></svg>

const svgWindows = <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="none"><path fill="#0097FC" d="m0 43.036 20.453 2.82V26.331H0v16.704ZM0 23.812h20.453V4.05L0 6.868v16.944ZM22.703 46.155l27.2 3.749V26.332h-27.2v19.823ZM22.703 3.749v20.063h27.2V0l-27.2 3.749Z" /></svg>


export const downloadInfo = [
    {
        svg: svgCross,
        header: 'Download for Mac',
        description: 'macOS 10.9 and later',
    },
    {
        svg: svgWindows,
        header: 'Download for Windows',
        description: 'Windows 7 and later',
    },
]