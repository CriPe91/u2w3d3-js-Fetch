const fetchBook = () => {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((responseBook) => {
      console.log(responseBook);
      if (responseBook.ok) {
        return responseBook.json();
      }
    })
    .then((responseBook) => {
      const row = document.getElementById("card-container");
      console.log(responseBook);

      responseBook.forEach((books) => {
        const col = document.createElement("div");
        col.className = "col border border-success mx-3 my-3";
        const img = document.createElement("img");
        img.className = "ms-2 my-3";
        img.style.width = "60%";
        img.src = books.img;
        const p = document.createElement("p");
        p.innerText = books.title;
        p.className = "ms-2 my-3";
        const btnDelete = document.createElement("button");
        btnDelete.innerText = "Scarta";
        btnDelete.className = "btn btn-secondary my-3 ms-0";
        const btnBuy = document.createElement("button");
        btnBuy.innerText = "Acquista";
        btnBuy.className = "btn btn-danger my-3 mx-2";
        const price = document.createElement("p");
        price.innerText = "$" + books.price;

        col.appendChild(img);
        row.appendChild(col);
        col.appendChild(p);
        col.appendChild(btnBuy);
        col.appendChild(btnDelete);
        p.appendChild(price);

        btnDelete.addEventListener("click", function () {
          row.removeChild(col);
        });
      });
    })

    .catch((err) => console.log(err));
};
window.onload = () => {
  fetchBook();
};
