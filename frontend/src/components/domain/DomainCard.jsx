const DomainCard = ({ title, onSelect }) => {
  return (
    <div
      onClick={onSelect}
      style={{
        border: "1px solid #ddd",
        padding: 25,
        width: 200,
        cursor: "pointer",
        borderRadius: 8,
        textAlign: "center",
      }}
    >
      <h3>{title}</h3>
    </div>
  );
};

export default DomainCard;
