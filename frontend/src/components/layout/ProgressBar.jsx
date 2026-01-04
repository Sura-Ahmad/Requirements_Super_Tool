const ProgressBar = ({ percentage }) => {
  return (
    <div style={{ background: "#eee", height: 8, borderRadius: 4 }}>
      <div
        style={{
          width: `${percentage}%`,
          height: "100%",
          background: "#4f46e5",
          borderRadius: 4,
        }}
      />
    </div>
  );
};

export default ProgressBar;
