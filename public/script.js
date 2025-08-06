
document.addEventListener("DOMContentLoaded", () => {
  const svgObject = document.getElementById("svg-object");
  svgObject.addEventListener("load", () => {
    const svgDoc = svgObject.contentDocument;
    const elements = [
      { id: "produccion", title: "Permiso de Producción", text: "El Permiso de Producción de Biocombustibles es otorgado para realizar actividades y procesos de acondicionamiento y transformación necesarios para el aprovechamiento de la biomasa...", color: "#D48232" },
      { id: "almacenamiento", title: "Permiso de Almacenamiento", text: "Permite recibir, resguardar y devolver biocombustibles en condiciones reguladas, sin alterarlos ni adulterarlos...", color: "#418A64" },
      { id: "transporte", title: "Permiso de Transporte", text: "Regula el transporte de biocombustibles por ducto o vehículos, asegurando calidad y trazabilidad...", color: "#003366" }
    ];

    elements.forEach(({id, title, text, color}) => {
      const el = svgDoc.getElementById(id);
      if (el) {
        el.style.cursor = "pointer";
        el.addEventListener("click", (e) => {
          const tooltip = document.createElement("div");
          tooltip.className = "tooltip";
          tooltip.style.left = e.clientX + 10 + "px";
          tooltip.style.top = e.clientY + 10 + "px";
          tooltip.style.backgroundColor = color;
          tooltip.innerHTML = `<h4>${title}</h4><p>${text}</p>`;
          document.body.appendChild(tooltip);
          setTimeout(() => tooltip.remove(), 10000);
        });
      }
    });
  });
});
