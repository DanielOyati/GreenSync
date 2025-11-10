// dashboard.js
window.onload = () => {
  // ✅ Load AI insights from localStorage
  const aiAdvice = localStorage.getItem("greensyncAdvice");
  const aiOutput = document.getElementById("aiResponse");

  if (aiOutput) {
    aiOutput.innerText = aiAdvice?.trim() || "No insights available yet. Submit sustainability metrics to get AI-powered recommendations.";
  }

  // ✅ Load live sustainability metrics (static demo)
  const metrics = [
    { metric: "Carbon Footprint", value: "2.4 tCO₂e", trend: "↓ 15%" },
    { metric: "Renewable Energy", value: "68%", trend: "↑ 12%" },
    { metric: "Waste Reduction", value: "45%", trend: "↑ 8%" },
    { metric: "Water Conservation", value: "52%", trend: "↑ 10%" },
    { metric: "Eco Score", value: "82/100", trend: "↑ 5pts" }
  ];

  const metricsContainer = document.getElementById("price-list");
  metricsContainer.innerHTML = ""; // Clear previous content

  metrics.forEach(item => {
    const card = document.createElement("div");
    card.className = "bg-green-800 px-4 py-3 rounded-md flex justify-between items-center mb-2";
    card.innerHTML = `
      <div class="flex flex-col">
        <span class="font-semibold text-white">${item.metric}</span>
        <span class="text-green-200 text-xs">${item.trend}</span>
      </div>
      <span class="text-green-100 font-bold">${item.value}</span>
    `;
    metricsContainer.appendChild(card);
  });
};
