import "./styles/styles.css";
import { IFormData, useFormContext } from "../context/FormContext";
import { Layout } from "../layout/Layout";
import ButtonsArea from "../components/ButtonsArea";
import FormScreen from "../components/FormScreen";
import InfoArea from "../components/InfoArea";
import InputLine from "../components/InputLine";
import Modal from "../components/Modal";
import NavigationButton from "../components/NavigationButton";
import OptionButton from "../components/OptionButton";
import OptionsArea from "../components/OptionsArea";
import ProgressBar from "../components/ProgressBar";
import React, { useState } from "react";
import StepIndicator from "../components/StepIndicator";
// import axios from "axios";

const FormCustomer: React.FC = () => {
  const { state, dispatch } = useFormContext();
  const { currentStep, formData } = state;

  const [tempSelection, setTempSelection] = useState<string | undefined>(
    formData.name
  );

  const [showModal, setShowModal] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState("");

  const handleNext = () => {
    if (currentStep === 0) {
      const isValidName =
        /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(tempSelection || "") &&
        (tempSelection?.trim().length || 0) > 3;

      if (!isValidName) {
        setConfirmationMessage(
          "Por favor, ingresa un nombre válido. Debe contener solo letras, sin caracteres especiales, y tener más de 3 letras."
        );
        setShowModal(true);
        return;
      }
      handleDataChange("name", tempSelection!.trim());
    } else if (!formData[getFormKey(currentStep)]) {
      setConfirmationMessage(
        "Por favor, completa la información solicitada antes de continuar."
      );
      setShowModal(true);
      return;
    }

    // Avanza al siguiente paso si todo es válido
    dispatch({ type: "SET_STEP", step: currentStep + 1 });
  };
  const handleBack = () => {
    if (currentStep > 0) dispatch({ type: "SET_STEP", step: currentStep - 1 });
  };

  const handleDataChange = (key: keyof typeof formData, value: string) => {
    dispatch({ type: "SET_DATA", data: { [key]: value } });
  };
  const redirectToCustomerScoops = () => {
    window.location.href = "https://www.customerscoops.com/";
  };

  const getFormKey = (step: number): keyof IFormData => {
    const keys: (keyof IFormData)[] = [
      "name",
      "position",
      "challenges",
      "crm",
      "industry",
    ];
    return keys[step];
  };

  const handleSubmit = async () => {
    try {
      // const email = "miulerbm00@gmail.com";
      // const response = await axios.post("http://localhost:3001/send-email", {
      //   email,
      //   formData,
      // });
      // console.log(response.data.message);
      // setConfirmationMessage(response.data.message);
      setConfirmationMessage(
        "Datos enviados correctamente!" + JSON.stringify(formData)
      );
      setShowConfirmationModal(true);
    } catch (error) {
      console.error("Error al enviar el correo:", error);
      setConfirmationMessage("Hubo un error al enviar el correo.");
      setShowConfirmationModal(true);
    }
  };

  return (
    <>
      <ProgressBar currentStep={currentStep} totalSteps={6} />
      <StepIndicator currentStep={currentStep} totalSteps={6} />
      <Layout>
        {showModal && (
          <Modal
            message={confirmationMessage}
            onClose={() => setShowModal(false)}
          />
        )}
        {showConfirmationModal && (
          <Modal
            message={confirmationMessage}
            onClose={() => setShowConfirmationModal(false)}
          />
        )}
        {currentStep === 0 && (
          <FormScreen>
            <InfoArea>
              <p className="infoAreaText">
                Muchas gracias por tu interés en conocer{" "}
                <span>customerScoops</span>, que a través de Formularios
                Conversacionales Inteligentes te ayudamos a aumentar el revenue
                y rentabilidad de tu negocio.
                <br />
                <br />
                Queremos conocerte, ¿cuál es tu nombre?
                <br />
                <br />
              </p>
              <InputLine
                value={tempSelection || ""}
                onChange={(e) => setTempSelection(e.target.value)}
                placeholder="Ingresa tu nombre"
              />
            </InfoArea>

            <ButtonsArea>
              <NavigationButton
                label="Comenzar"
                direction="next"
                onClick={handleNext}
                showArrow={false}
              />
            </ButtonsArea>
          </FormScreen>
        )}
        {currentStep === 1 && (
          <FormScreen>
            <InfoArea>
              <p className="infoAreaText">
                Genial <span>{formData.name}</span>, ahora nos gustaría tener
                cierta info para diseñar una gran propuesta de valor para ti:
                <br />
                <br />
                ¿Cuál es tu cargo/posición dentro de tu empresa?
              </p>
            </InfoArea>
            <OptionsArea>
              {[
                "Board member",
                "C-level",
                "Gerente",
                "Subgerente",
                "Jefe de área",
                "Líder de área",
                "Ejecutivo/Analista",
                "Otro",
              ].map((option) => (
                <OptionButton
                  key={option}
                  onClick={() => handleDataChange("position", option)}
                  selected={formData.position === option}
                >
                  {option}
                </OptionButton>
              ))}
            </OptionsArea>

            <ButtonsArea>
              {/* <NavigationButton direction="back" onClick={handleBack} /> */}
              <NavigationButton
                label="Siguiente"
                direction="next"
                onClick={handleNext}
              />
            </ButtonsArea>
          </FormScreen>
        )}

        {currentStep === 2 && (
          <FormScreen>
            <InfoArea>
              <p className="infoAreaText">
                ¿Cuáles son tus principales desafíos para 2024?
              </p>
            </InfoArea>
            <OptionsArea columns={2}>
              {[
                "Aumentar conversión de leads a clientes",
                "Reducir customer churn",
                "Implementar un programa VoC",
                "Reducir costos en gestión de reclamos",
                "Optimizar procesos comerciales",
                "Optimizar procesos operativos",
                "Otro",
              ].map((option, index) => (
                <OptionButton
                  key={option}
                  onClick={() => handleDataChange("challenges", option)}
                  selected={formData.challenges === option}
                >
                  <div
                    style={{
                      textAlign: "left",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "#00CCBC",
                        paddingTop: 5,
                        paddingBottom: 5,
                        paddingLeft: 10,
                        paddingRight: 10,
                        borderRadius: 50,
                        marginRight: 10,
                      }}
                    >
                      <span style={{ color: "#fff" }}>
                        {String.fromCharCode(65 + index)}
                      </span>
                    </div>{" "}
                    {option}
                  </div>
                </OptionButton>
              ))}
            </OptionsArea>

            <ButtonsArea>
              <NavigationButton direction="back" onClick={handleBack} />
              <NavigationButton
                label="Siguiente"
                direction="next"
                onClick={handleNext}
              />
            </ButtonsArea>
          </FormScreen>
        )}

        {currentStep === 3 && (
          <FormScreen>
            <InfoArea>
              <p className="infoAreaText">
                ¿Cuál CRM están utilizando en tu empresa? CRM:
              </p>
            </InfoArea>
            <OptionsArea>
              {[
                "SAP",
                "Microsoft Dynamics",
                "Salesforce",
                "HubSpot",
                "Zoho",
                "Netsuite (Oracle)",
                "Monday",
                "CRM Propio",
                "No tengo CRM",
              ].map((option) => (
                <OptionButton
                  key={option}
                  onClick={() => handleDataChange("crm", option)}
                  selected={formData.crm === option}
                >
                  {option}
                </OptionButton>
              ))}
            </OptionsArea>

            <ButtonsArea>
              <NavigationButton direction="back" onClick={handleBack} />
              <NavigationButton
                label="Siguiente"
                direction="next"
                onClick={handleNext}
              />
            </ButtonsArea>
          </FormScreen>
        )}

        {currentStep === 4 && (
          <FormScreen>
            <InfoArea>
              <p className="infoAreaText">
                <span>Ahora te vamos a sorprender...</span>
                <br />
                ¿A cuál industria pertenece tu empresa?
              </p>
            </InfoArea>
            <OptionsArea>
              {[
                "Tecnología",
                "Software",
                "Servicios",
                "Financiera",
                "Telecomunicaciones",
                "Producción/Fabricación",
                "Logística",
                "Consumo Masivo",
                "Mayorista",
                "Retail",
                "Otra",
              ].map((option) => (
                <OptionButton
                  key={option}
                  onClick={() => handleDataChange("industry", option)}
                  selected={formData.industry === option}
                >
                  {option}
                </OptionButton>
              ))}
            </OptionsArea>

            <ButtonsArea>
              <NavigationButton direction="back" onClick={handleBack} />
              <NavigationButton
                label="Siguiente"
                direction="next"
                onClick={() => {
                  handleNext();
                  handleSubmit();
                }}
              />
            </ButtonsArea>
          </FormScreen>
        )}

        {currentStep === 5 && (
          <FormScreen>
            <InfoArea>
              <p className="infoAreaFinale">
                <br />
                <span>Muchas Gracias</span>
                <br />
                por querer ser parte de la familia Scoopers.
                <br />
                <br />
                <span className="italic">Nos vemos pronto</span>
              </p>
            </InfoArea>
            <ButtonsArea>
              <NavigationButton
                label="Finalizar"
                direction="next"
                onClick={redirectToCustomerScoops}
                showArrow={false}
              />
            </ButtonsArea>
          </FormScreen>
        )}
      </Layout>
    </>
  );
};

export default FormCustomer;
