document.addEventListener("DOMContentLoaded", function() {

    fetch("components/header.html")
        .then(response => response.text())
        .then(data => { document.getElementById("header").innerHTML = data; 
            //Récupère la page active
            let urlActuelle = window.location.pathname;
            //Récupère tous les liens de la nav-bar
            const navLinks = document.querySelectorAll(".nav-link");
            navLinks.forEach(navLink => {
                //Suppression de la classe 'active' si présente
                navLink.classList.remove("active");
                //Récupération du lien
                let link = navLink.getAttribute("href");
                //Vérifie si link et urlActuelle ont la même valeur et le même type
                if (link === urlActuelle){
                    navLink.classList.add("active");
                }
            });
        })
        .catch(error => console.error("Erreur avec le header :", error));

    fetch("components/footer.html")
        .then(response => response.text())
        .then(data => { document.getElementById("footer").innerHTML = data; 
            document.getElementById("annee").innerHTML = new Date().getFullYear();
        })
        .catch(error => console.error("Erreur avec le footer :", error));
});