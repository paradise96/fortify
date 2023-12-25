import Questions from "./small_components/Questions";
import Table from "./small_components/Table";
import { questionFirstPart, questionSecondPart } from "../data/questions";

function FrequentlyAskedQuestionsSection() {
    return (
        <section className="faq">
            <div className="container">
                <h2 className="header">Frequently asked questions</h2>
                <div className="faq_wrapper">
                    <Questions data={questionFirstPart} />
                    <Table />
                    <Questions data={ questionSecondPart} />
                </div>
            </div>
        </section>
    )
}

export default FrequentlyAskedQuestionsSection;