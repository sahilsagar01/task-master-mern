import { TypeAnimation } from 'react-type-animation';

const TypeAnime = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Create new Task.',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Update Tasks.',
        1000,
        'Delete Tasks.',
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