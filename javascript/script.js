

    function radioCheck(radioChecked) {
        document.getElementById("continueBtn").disabled = !radioChecked.checked;
    }

    var cancel = document.querySelector(".btn-cancel");
    var continueBtn = document.querySelector(".btn-continue");
    var checkBoxes = document.querySelectorAll(".radios-holder input[type=radio]");
    cancel.addEventListener("click", (event) => {
        checkBoxes.forEach(function (radio) {
            radio.checked = false;
        });
        continueBtn.disabled = true;
    })
