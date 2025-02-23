import { createSignal, createEffect } from "olova";

const TypingEffect = ({ words, speed }) => {
  const [currentWordIndex, setCurrentWordIndex] = createSignal(0);
  const [displayedText, setDisplayedText] = createSignal("");

  createEffect(() => {
    const word = words[currentWordIndex()];
    let charIndex = 0;
    const interval = setInterval(() => {
      setDisplayedText(word.slice(0, charIndex + 1));
      charIndex++;
      if (charIndex === word.length) {
        clearInterval(interval);
        setTimeout(() => {
          setCurrentWordIndex((currentWordIndex() + 1) % words.length);
        }, speed);
      }
    }, speed / word.length);

    return () => clearInterval(interval);
  }, [currentWordIndex]);

  return (
    <div>
      <h1 className="font-bold">
        <span>{() => displayedText()}</span>
        <span className="text-7xl text-green-500 font-extralight">|</span>
      </h1>
    </div>
  );
};

export default TypingEffect;
