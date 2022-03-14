import Accordion from "../components/FAQ/Accordion";

export default function FAQ() {
    const firstFAQTitle = "¿Qué es Leer-té?";
    const firstFAQContent = "Aquí podrás leer y escribir microrelatos, pequeñas historias en pequeño formato para leer cómodamente en cualquier momento del día. Creando las tuyas contribuyes también a la comunidad de Leer-té.";

    const secondFAQTitle = "¿Qué puedo escribir?";
    const secondFAQContent = "Tu relato pertenecerá a una de las categorías: romance, ciencia ficción, fantasía, horror, misterio y no ficción. En cualquiera de los casos, la lectura debe ser apta para todos los públicos, así como los comentarios de esta. En caso contrario, uno de nuestros administradores podrá borrar dicho relato y/o comentario.";

    const thirdFAQTitle = "¿Cómo de largo puede ser mi microrelato?";
    const thirdFAQContent = "Un microrelato deberá tener 300 palabras o menos, que es la cantidad que puedes introducir en el apartado de escritura. No tienes que preocuparte por contar las palabras, cuando no puedas escribir más es que has llegado.";

    const fourthFAQTitle = "Tengo un problema con mi cuenta, ¿qué puedo hacer?";
    const fourthFAQContent = "Puedes contactar con nosotros mandando un correo a leer.te.answer@gmail.com o usando el formulario de contacto."

    const fifthFAQTitle = "¿Cómo funcionan los borradores";
    const fifthFAQContent = "Los borradores sirven para esos momentos en los que llega la inspiración pero no estás preparado del todo para mostrar tu creación al mundo. Para usarla, selecciona la opción al terminar de escribir y se guardará en tu perfil, donde solo tu podrás leerlo y acceder para modificarlo o publicarlo en cualquier momento";
    return (
        <section className='faq-div-wrapper'>

            <h1>Preguntas frecuentes</h1>

            <Accordion title={firstFAQTitle} content={firstFAQContent}></Accordion>
            <Accordion title={secondFAQTitle} content={secondFAQContent}></Accordion>
            <Accordion title={thirdFAQTitle} content={thirdFAQContent}></Accordion>
            <Accordion title={fourthFAQTitle} content={fourthFAQContent}></Accordion>
            <Accordion title={fifthFAQTitle} content={fifthFAQContent}></Accordion>

            <div className='faq-div-bottom'>
                <span>"Mientras el corazón late, mientras el cuerpo y alma siguen juntos, no puedo admitir que cualquier criatura dotada de voluntad tiene necesidad de perder la esperanza en la vida."  (Viaje al centro de la tierra, Julio Verne)</span>
            </div>
        </section>
    )
}
