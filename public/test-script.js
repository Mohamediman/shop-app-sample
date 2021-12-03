const header = $("#shopify-section-announcement-bar").parent();
header.css({ "background-color": "orange", "text-align": "center" });

const makeApp = (data) => {
  console.log(header);
};
fetch(
  `https://d7af-2001-56a-f88e-3600-dc28-1c72-8ca6-d6ea.ngrok.io/api/products?shop=${shop}`
)
  .then((res) => res.json())
  .then((data) => {
    makeApp(data.data);
    console.log(data);
  })
  .catch((error) => console.log(error));
