
    document.addEventListener('DOMContentLoaded', function() {
        var form = document.getElementById('calculator-form');
        var totalDisplay = document.getElementById('total');
        var buttons = document.querySelectorAll('.item');

        // Ajoutez un écouteur d'événement pour chaque bouton
        buttons.forEach(function(button) {
            button.addEventListener('click', function() {
                handleButtonPress(button.textContent);
            });
        });

        // Écoutez les événements clavier
        document.addEventListener('keydown', function(event) {
            var key = event.key;

     // Ignorez les touches qui ne sont pas des chiffres ou des opérateurs
            if (/[\d\.+\-*/%=]|Enter|Backspace|Escape/.test(key)) {
                event.preventDefault();
                handleButtonPress(key);
            }
        });

        function handleButtonPress(value) {
            if (value === '=') {
                form.submit();
    // Soumet le formulaire pour le calcul côté serveur
            } else if (value === 'C ') {
                clearDisplay();
            } else if (value === '+/-') {
                negate();
            } else {
                appendToDisplay(value);
            }
        }
        function clearDisplay() {
            totalDisplay.textContent = '0';
        }
        function negate() {
            var total = totalDisplay.textContent;
            if (!isNaN(total)) {
                totalDisplay.textContent = -parseFloat(total);
            }
        }
        function appendToDisplay(value) {
            var total = totalDisplay.textContent;
            if (total === '0' && value !== '.') {
                totalDisplay.textContent = value;
            } else {
                totalDisplay.textContent += value;
            }
        }
    });

