function DashboardCard({ titulo, valor, color = '#3b82f6', icono }) {
  return (
    <div className="academic-card">
      {/* Barra lateral de acento de color */}
      <div 
        className="card-accent-bar" 
        style={{ backgroundColor: color }} 
      />
      
      <div className="card-content">
        <div className="card-header">
          <span className="card-title">{titulo}</span>
          {icono && <span className="card-icon" style={{ color: color }}>{icono}</span>}
        </div>
        <div className="card-value">{valor}</div>
      </div>
    </div>
  );
}

export default DashboardCard;