// JavaSc

        const miModal = document.getElementById("miModal");
        miModal.showModal();

        const cerrarModalBtn = document.getElementById("cerrarModal");
        cerrarModalBtn.addEventListener("click", () => {
            miModal.close();
        });