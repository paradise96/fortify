
function Questions(data) {
    const infoStorage = data.data;
    return (
        <>
            {infoStorage.map((item, index) => {
                return (
                    <div className="questions" key={index}>
                    <div className="questions_left">
                        {item.question}
                    </div>
                    <div className="questions_right">
                            <p>{ item.answer }</p>
                    </div>
                </div>
            )
        })}
        </>
    )
}

export default Questions;