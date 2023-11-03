// JavaScript
       
        function mostrarModalDespuesDeTiempo() {
            const miModal = document.getElementById("miModal");
            miModal.classList.add("mostrando");
			miModal.showModal();
        }

        setTimeout(mostrarModalDespuesDeTiempo, 2000);
        
        const cerrarModalBtn = document.getElementById("cerrarModal");
        cerrarModalBtn.addEventListener("click", () => {
        miModal.close();
        });