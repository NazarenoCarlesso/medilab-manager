import Accordion from "react-bootstrap/Accordion";
import styles from "./Faq.module.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Faq() {
  return (
    <div className="container">
      <div className={styles.faqTitle}>
        <p>Preguntas Frecuentes:</p>
      </div>
      <div className={styles.faqFondo}>
        <h4>
          Ahorre tiempo, obtenga las respuestas a las preguntas frecuentemente
          consultadas por los pacientes sin necesidad de llamar a la central
          telefónica.
        </h4>
      </div>
      <div className={styles.faqAcordion}>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              ¿Cómo puedo comprar exámenes en su sitio web?
            </Accordion.Header>
            <Accordion.Body>
              R: Para comprar exámenes en nuestro sitio web, simplemente
              seleccione el examen que desea realizar y agregue al carrito de
              compras. Luego, siga los pasos para completar la compra y se le
              asignará una cita para realizar el examen.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              ¿Cuánto tiempo tardan en procesar los resultados de los exámenes?
            </Accordion.Header>
            <Accordion.Body>
              R: El tiempo de procesamiento de los resultados puede variar
              dependiendo del tipo de examen que haya realizado. En general, los
              resultados de los exámenes de laboratorio estarán disponibles en
              un plazo de 24 a 72 horas.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              ¿Cómo puedo acceder a mis resultados de exámenes en línea?
            </Accordion.Header>
            <Accordion.Body>
              R: Para acceder a sus resultados de exámenes en línea, simplemente
              inicie sesión en su cuenta en nuestro sitio web y seleccione la
              opción para ver sus resultados. Allí encontrará los resultados de
              todos los exámenes que haya realizado con nosotros.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              ¿Cómo puedo cancelar o cambiar una cita para un examen?
            </Accordion.Header>
            <Accordion.Body>
              R: Si necesita cancelar o cambiar una cita para un examen, por
              favor comuníquese con nosotros con al menos 24 horas de
              anticipación para que podamos reprogramar su cita o realizar el
              reembolso correspondiente.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              ¿Cómo puedo saber si necesito hacer algún examen en particular?
            </Accordion.Header>
            <Accordion.Body>
              R: Si no está seguro de qué exámenes debe realizarse, le
              recomendamos que consulte a su médico de cabecera o especialista
              de confianza para obtener asesoramiento. Además, nuestro sitio web
              también ofrece información detallada sobre los exámenes que
              ofrecemos, sus indicaciones y el procedimiento para realizarlos.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>
              ¿Puedo ir al laboratorio si no cuento con una orden médica?
            </Accordion.Header>
            <Accordion.Body>
              R: Claro, no es necesario una orden médica, podemos orientarla con
              pruebas de rutina.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>
              ¿Cuál es el horario de atención al público?
            </Accordion.Header>
            <Accordion.Body>
              R: El horario de atención es de lunes a viernes de 7am a 7pm y los
              sábados de 7am a 2pm.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Accordion.Header>
              ¿Ofrecen el historial de exámenes realizados en el pasado?
            </Accordion.Header>
            <Accordion.Body>
              R: Sí, en el reporte de resultados que recibe en cada atención
              aparecen tanto los valores de la atención actual como de
              atenciones anteriores.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="8">
            <Accordion.Header>
              ¿Puedo cambiar la contraseña para ingresar a mis resultados?
            </Accordion.Header>
            <Accordion.Body>
              R: Sí. Después de haber ingresado a su cuenta (sección Resultados)
              haga clic en ‘Actualizar mis datos’
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="9">
            <Accordion.Header>
              ¿Realizan tomas de muestra a domicilios?
            </Accordion.Header>
            <Accordion.Body>
              R: Sí realizamos tomas de muestra a domicilio. Debido a la alta
              demanda, es necesario agendar el servicio con anticipación.
              Generalmente, reservando el servicio el día anterior es
              suficiente, aunque si puede reservarlo con más anticipación podrá
              garantizar que exista disponibilidad. Para reservar llame al 123
              456 789.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="10">
            <Accordion.Header>
              ¿Realizan prueba de ADN a domicilio?
            </Accordion.Header>
            <Accordion.Body>
              R: Para pruebas de ADN las realizamos en nuestras sedes o, en el
              caso de Paternidad Judicial, en los juzgados. No realizamos
              pruebas de ADN a domicilio.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="11">
            <Accordion.Header>
              ¿Es posible solicitar el servicio de toma de muestra a domicilio
              por internet?
            </Accordion.Header>
            <Accordion.Body>R: Sí</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="12">
            <Accordion.Header>
              ¿Cómo puedo saber qué examen me debo realizar?
            </Accordion.Header>
            <Accordion.Body>
              R: Brindamos amplia información sobre los exámenes en nuestra
              página web para que sirvan de orientación al paciente, tanto en
              cuestión de descripción del examen, listar algunas de sus
              limitaciones y la preparación que requiere el paciente antes de
              realizarse las pruebas. Puede encontrar dicha información en la
              sección{" "}
              <Link
                to={"http://localhost:3000/search"}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.aboutLink}
              >
                medilab.com/search
              </Link>
              . Sin embargo, recomendamos la asesoría de un médico tratante. Los
              exámenes de laboratorio tienen limitaciones y la selección del
              tipo de examen es compleja.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="13">
            <Accordion.Header>¿Necesito llevar mi DNI?</Accordion.Header>
            <Accordion.Body>
              R: Sí, es necesario que muestre su DNI en físico para poder
              atenderse.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="14">
            <Accordion.Header>
              ¿Necesitan alguna autorización los menores de edad para realizarse
              exámenes de laboratorio?
            </Accordion.Header>
            <Accordion.Body>
              R: Sí, la atención a menores de edad requerirá de la compañía de
              un apoderado (generalmente, el padre o la madre). Será necesario
              la presentación de documentos legales que permitan verificar la
              identidad del menor, la identidad del apoderado y la condición de
              apoderado. En la mayoría de casos será suficiente presentando el
              DNI del menor en donde figuren los apoderados y el DNI del
              apoderado.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="15">
            <Accordion.Header>
              ¿Cómo es el procedimiento de toma de muestra de sangre?
            </Accordion.Header>
            <Accordion.Body>
              R: Para la mayoría de las personas, la extracción de sangre es
              rápida, fácil y relativamente indolora. La persona que tome su
              muestra de sangre insertará una pequeña aguja en una de sus venas.
              Por lo general, esto está en su brazo. Usted deberá apretar el
              puño cuando se le pida. Esto ayuda a que la vena sea más
              prominente. Cuando se inserta la aguja debajo de la piel, es
              posible que sienta un ligero pinchazo y puede haber una molestia
              adicional cuando se retira. Extraerán una pequeña cantidad de
              sangre y pasará a tubos. Después de tomar una muestra de sangre,
              se coloca un vendaje de algodón sobre el lugar de la punción. Por
              lo general, se le pedirá que aplique una presión suave para ayudar
              a que la sangre se coagule y evitar la hinchazón y los hematomas.
              Deje el curita en su lugar durante un tiempo breve (generalmente
              de 2 a 4 horas).
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="16">
            <Accordion.Header>
              ¿Cuántos tubos de sangre me sacaran para la toma de muestra?
            </Accordion.Header>
            <Accordion.Body>
              R: La cantidad de tubos dependerá del número de pruebas que se
              necesita realizar. En ocasiones, un mismo tubo se puede usar para
              más de una prueba.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="17">
            <Accordion.Header>
              ¿Me puede hacer daño la toma de muestra?
            </Accordion.Header>
            <Accordion.Body>
              R: Es un procedimiento muy seguro y en la gran mayoría de casos no
              habrá complicaciones. En Perú se realizan millones de análisis de
              sangre cada año. La complicación más común son los hematomas en el
              sitio de la punción de la aguja. Esto suele aparecer dentro de las
              24 horas y puede variar en tamaño desde una pequeña mancha hasta
              un gran hematoma púrpura. Es causada por una fuga de sangre desde
              la vena perforada hacia los tejidos justo debajo de la piel. Esto
              se puede reducir presionando con el dedo en el sitio durante
              aproximadamente un minuto después de que se haya extraído la
              sangre. Es más probable que se formen hematomas si la extracción
              es difícil, si no se mantiene la presión en el sitio durante
              aproximadamente un minuto después de que se retire la aguja, si
              está tomando medicamentos anticoagulantes como aspirina o
              warfarina, si es una persona mayor con venas frágiles o si usted
              ejercita el brazo poco después del análisis de sangre, por
              ejemplo, levantando bolsas pesadas de la compra o yendo al
              gimnasio. Si bien los hematomas son desagradables, no son
              peligrosos y desaparecerán lentamente durante unos días o semanas,
              dependiendo de qué tan extensos sean. Los hematomas grandes pueden
              volverse sensibles durante unos días porque las células que están
              involucradas en limpiar el hematoma liberan sustancias que causan
              dolor en el área. Esto es poco común, pero tampoco peligroso. Es
              parte del proceso de curación. Sin embargo, si la sensibilidad le
              molesta, debe comunicarse con el laboratorio. Si después de la
              toma de muestra experimenta hinchazón, moretones o dolor, siga
              coloque hielo en el sitio, usando el brazo afectado lo menos
              posible. Considere tomar un analgésico de venta sin receta médica.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="18">
            <Accordion.Header>
              Tengo nervios o ansiedad ante la toma de muestra. ¿Qué puedo
              hacer?
            </Accordion.Header>
            <Accordion.Body>
              R: Para algunas personas tomarse muestras de sangre les puede
              resultar en una experiencia tensa. La angustia emocional es más
              probable cuando su experiencia de un procedimiento no coincide con
              sus expectativas o si ha tenido una mala experiencia. No dude en
              informar a la persona que está tomando la muestra si ha tenido una
              mala experiencia previa. Por ejemplo, si se ha sentido mareado o
              se ha desmayado mientras le extraen sangre, pida que le permitan
              recostarse para el procedimiento. Los técnicos de laboratorio han
              recibido formación para ser sensibles a las necesidades de los
              pacientes aprensivos y las personas con necesidades especiales.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}
