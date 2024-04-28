//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
  const textInput = document.getElementById("text");
  const delayInput = document.getElementById("delay");
  const btn = document.getElementById("btn");
  const output = document.getElementById("output");

  btn.addEventListener("click", async () => {
    const text = textInput.value.trim();
    const delay = parseInt(delayInput.value, 10);

    if (!text || isNaN(delay) || delay <= 0) {
      alert("Please enter valid values.");
      return;
    }

    try {
      output.textContent = "Waiting...";
      await delayAsync(delay);
      output.textContent = text;
    } catch (error) {
      console.error(error);
    }
  });

  function delayAsync(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
});
