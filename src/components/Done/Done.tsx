const Done = ({ onClick }: { onClick: ()=> void;}) => {
  return (
    <button onClick={onClick} className={styles.button}>
      <span className={styles.span}>종료</span>
    </button>
  );
};

export default Done;

const styles = {
  button: 'relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white focus:outline-none',
  span: 'relative px-5 py-2.5 transition-all ease-in duration-200 bg-white rounded-md group-hover:bg-opacity-0',
};
