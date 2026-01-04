const DomainCard = ({ title, onSelect }) => {
  return (
    <div
      onClick={onSelect}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "#7b9cdeff";
        e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.08)";
        e.currentTarget.style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "#fff";
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.transform = "translateY(0)";
      }}
      style={{
        border: "1px solid #ddd",
        padding: 25,
        width: 200,
        cursor: "pointer",
        borderRadius: 8,
        textAlign: "center",
        transition: "all 0.3s ease",
      }}
    >
      <h3>{title}</h3>
    </div>
  );
};

export default DomainCard;
