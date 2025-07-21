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
