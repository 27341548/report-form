document.getElementById("healthForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const form = e.target;
  const data = {};
  Array.from(form.elements).forEach((el) => {
    if (el.name) data[el.name] = el.value;
  });

  const lines = Object.keys(data).map((key) => `${key},${data[key]}`);
  const csvContent = lines.join("\n");

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  const filename = `${data["姓名"] || "体检"}${data["日期"] || "日期"}.csv`;
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
});
const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");
const bmiInput = document.getElementById("bmi");
const idealInput = document.getElementById("ideal");

function updateBMI() {
  const h = parseFloat(heightInput.value);
  const w = parseFloat(weightInput.value);
  if (!isNaN(h) && !isNaN(w) && h > 0) {
    const hM = h / 100;
    const bmi = w / (hM * hM);
    const ideal = 22 * (hM * hM);
    bmiInput.value = bmi.toFixed(1);
    idealInput.value = ideal.toFixed(1);
  } else {
    bmiInput.value = "";
    idealInput.value = "";
  }
}

heightInput.addEventListener("input", updateBMI);
weightInput.addEventListener("input", updateBMI);
