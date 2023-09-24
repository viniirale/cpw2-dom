 // Função para carregar imagens aleatórias
 function loadRandomImage() {
    const randomImageNumber = Math.floor(Math.random() * 15) + 1;
    const imageURL = `pudim_${randomImageNumber}.jpg`;
    const img = document.createElement("img");
    img.src = imageURL;
    img.classList.add("img-thumbnail", "m-2", "image-pudim");
    document.getElementById("image-container").appendChild(img);
}

// Carregue as primeiras imagens
for (let i = 0; i < 5; i++) {
    loadRandomImage();
}

// Carregue mais imagens à medida que a página é rolada
$(window).on("scroll", function () {
    if ($(window).scrollTop() + $(window).height() >= $(document).height() - 100) {
        for (let i = 0; i < 5; i++) {
            loadRandomImage();
        }
    }
});