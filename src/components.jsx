const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export function Steps({ isOpen, step, onPrevious, onNext, onOpen }) {
  function handleLearnClick() {
    window.scrollTo({ top: 450, behavior: "smooth" });
  }

  return (
    <>
      <button className="close" onClick={onOpen}>
        {isOpen ? "⏫⏫" : "⏬⏬"}
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <StepMessage step={step}>
            {messages[step - 1]}
            <div className="buttons">
              <Button
                bgColor="#e7e7e7"
                textColor="#333"
                onClick={handleLearnClick}
              >
                Learn how
              </Button>
            </div>
          </StepMessage>

          <div className="buttons">
            <Button bgColor="#7950f2" textColor="#fff" onClick={onPrevious}>
              <span>👈</span> Previous
            </Button>

            <Button bgColor="#7950f2" textColor="#fff" onClick={onNext}>
              Next <span>👉</span>
              <span>🤓</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

export function StepMessage({ step, children, className }) {
  return (
    <div className={`message ${className}`}>
      <h3>Step {step}</h3>
      {children}
    </div>
  );
}
