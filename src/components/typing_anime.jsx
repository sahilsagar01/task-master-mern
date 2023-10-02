import { TypeAnimation } from 'react-type-animation';

const TypeAnime = (props) => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        props.typingText || 'Create new Task.',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        props.typingText || 'Update Tasks.',
        1000,
        props.typingText || 'Delete Tasks.',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
  );
};
export default TypeAnime