import { Steps, StepMessage } from "./components";
import { useState } from "react";
import { learnData } from "./util/learn-data";

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 3) {
      setStep((s) => s + 1);
    }
  }
  function onOpen() {
    setIsOpen((is) => !is);
  }

  return (
    <div>
      <Steps
        isOpen={isOpen}
        step={step}
        onPrevious={handlePrevious}
        onNext={handleNext}
        onOpen={onOpen}
      />

      {isOpen && (
        <>
          {step === 1 && (
            <StepMessage className="article" step={1}>
              {learnData[0].map((p) => (
                <p>{p}</p>
              ))}
              <p>✌️</p>
            </StepMessage>
          )}

          {step === 2 && (
            <StepMessage className="article" step={2}>
              {learnData[1].map((p) => (
                <p>{p}</p>
              ))}
              <p>✌️</p>
            </StepMessage>
          )}
          {step === 3 && (
            <StepMessage className="article" step={3}>
              {learnData[2].map((p) => (
                <p>{p}</p>
              ))}
              <p>✌️</p>
            </StepMessage>
          )}
        </>
      )}
    </div>
  );
}
