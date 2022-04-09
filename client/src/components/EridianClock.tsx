import react from 'React';

export const EridianClock = () => {
  return (
    <div>
      <h1>{new Date().toISOString()}</h1>
    </div>
  );
};
