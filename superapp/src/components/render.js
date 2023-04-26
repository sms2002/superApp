export const renderTime = ({ remainingTime }) => {
      if (remainingTime === 0) {
        return <div className="timer">Too lale...</div>;
      }
      return (
        <div className="timer">
          <div className="text">Remaining</div>
          <div className="value">{remainingTime}</div>
          <div className="text">seconds</div>
        </div>
      );
}