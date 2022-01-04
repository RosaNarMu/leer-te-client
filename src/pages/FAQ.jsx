import Accordion from "../components/FAQ/Accordion";

export default function FAQ() {
    return (
        <wrapper className='faq-div-wrapper'>

            <span>Preguntas frecuentes</span>

            <Accordion></Accordion>
            <Accordion></Accordion>
            <Accordion></Accordion>
            <Accordion></Accordion>
            <Accordion></Accordion>

            <div className='faq-div-bottom'>
                <span>Mientras el corazón late, mientras el cuerpo y alma siguen juntos, no puedo admitir que cualquier criatura dotada de voluntad tiene necesidad de perder la esperanza en la vida  (Viaje al centro de la tierra, Julio Verne)</span>
            </div>
        </wrapper>
    )
}
