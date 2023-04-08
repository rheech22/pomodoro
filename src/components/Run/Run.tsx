interface RunProps {
  init: boolean;
  isRunning: boolean;
  onToggle: () => void;
  onStart: () => void;
}

const Run = ({ init, isRunning, onToggle, onStart }: RunProps) => {
  return (
    <>
      {
        init
          ? <button onClick={onToggle} className={styles.toggleButton} >
              <span className={styles.startSpan}>{isRunning ? '일시정지' : '계속'}</span>
            </button>
          : <button className={styles.startButton} onClick={onStart}>
              <span className={styles.startSpan}>집중 시작하기</span>
            </button>
      }
    </>
  );
};

export default Run;

const styles = {
  toggleButton: 'relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white focus:outline-none',
  toggleSpan: 'relative px-5 py-2.5 transition-all ease-in duration-200 bg-white rounded-md group-hover:bg-opacity-0',
  startButton: 'relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white focus:outline-none',
  startSpan: 'relative px-5 py-2.5 transition-all ease-in duration-200 bg-white rounded-md group-hover:bg-opacity-0',
};
