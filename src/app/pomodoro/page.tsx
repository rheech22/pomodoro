import Timer from './(clock)/Timer';
import Stopwatch from './(clock)/Stopwatch';

const Pomodoro = () => {
  return (
    <main>
      <div style={{ textAlign: 'center' }}>
        <Timer />
        <Stopwatch />
      </div>
    </main>
  );
};

export default Pomodoro;
