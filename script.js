const button = document.getElementById("generate");
const img = document.getElementById("result");

button.addEventListener("click", async () => {
  const prompt = document.getElementById("prompt").value;

  if (!prompt) {
    alert("Please enter some text!");
    return;
  }

  img.src = "";

  const response = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer YOUR_OPENAI_API_KEY",
    },
    body: JSON.stringify({
      model: "gpt-image-1",
      prompt: prompt,
      size: "512x512",
    }),
  });

  const data = await response.json();
  img.src = data.data[0].url;
});
