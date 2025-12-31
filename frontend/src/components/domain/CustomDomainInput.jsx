const CustomDomainInput = ({ value, onChange }) => {
  return (
    <div style={{ marginTop: 30 }}>
      <p>Or enter a custom domain</p>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="e.g. FinTech, Smart Cities"
        style={{ width: "100%", padding: 10 }}
      />
    </div>
  );
};

export default CustomDomainInput;
