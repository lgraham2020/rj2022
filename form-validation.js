// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  "use strict";

  console.log("validated?");
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        console.log("submit pressed");
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add("was-validated");

        if (form.checkValidity()) {
          // event.preventDefault();
          let confirm = (document.querySelector(
            ".submit-confirmation"
          ).style.display = "block");
          setTimeout(() => {
            form.classList.remove("was-validated");
            document.querySelector(".submit-confirmation").style.display =
              "none";
            console.log("removed?");
            const inputs = form.querySelectorAll("input");
            Array.from(inputs).forEach((input) => {
              input.value = "";
              input.checked = false;
            });

            const selects = form.querySelectorAll("select");
            Array.from(selects).forEach((select) => {
              select.value = 0;
            });
          }, 5000);
        }
      },
      false
    );
  });
})();
