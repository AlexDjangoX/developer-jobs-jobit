import { FadeLoader } from 'react-spinners';

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <FadeLoader
        color={'#529cf1'}
        loading={true}
        size={100}
        speedMultiplier={2}
      />
    </div>
  );
};

export default Loader;
