   alert("was geht leute")

   

      // =================================================================
      // 2. GLOBALE VARIABLEN & DOM
      // =================================================================
      const questionElement = document.getElementById("question-text");
      const optionsGrid = document.getElementById("options-grid");
      const nextButton = document.getElementById("next-button");
      const hintText = document.getElementById("hint-text");

      let currentQuizData = null; // Speichert die aktuelle Frage
      let solutionShown = false; // Flag, um zu wissen, ob die Lösung angezeigt wurde
      let availableQuestionIndices = []; // Indizes der Fragen, die noch nicht dran waren

      // =================================================================
      // 3. LOGIK
      // =================================================================

      /**
       * Wählt eine zufällige Frage aus der Liste aus (ohne Wiederholung, bis alle durch sind) und aktualisiert die UI.
       */
      function loadNextQuestion() {
        // Wenn alle Fragen durch sind, starte von vorn
        if (availableQuestionIndices.length === 0) {
          availableQuestionIndices = Array.from(
            { length: allQuestions.length },
            (_, i) => i
          );

          // Mische die Fragen-Indizes
          for (let i = availableQuestionIndices.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [availableQuestionIndices[i], availableQuestionIndices[j]] = [
              availableQuestionIndices[j],
              availableQuestionIndices[i],
            ];
          }

          if (allQuestions.length === 0) {
            questionElement.textContent =
              "Fehler: Keine Fragen im Code gefunden!";
            return;
          }
        }

        // 1. Logik zurücksetzen
        solutionShown = false;
        hideNextButton();
        optionsGrid.innerHTML = ""; // Optionen leeren
        hintText.textContent =
          "Wähle eine Antwort oder drücke die **Leertaste** (Space), um die **Lösung** anzuzeigen.";

        // 2. Zufällige Frage wählen (ohne Wiederholung)
        const questionIndex = availableQuestionIndices.pop(); // Nehme den letzten Index aus der gemischten Liste

        currentQuizData = allQuestions[questionIndex];

        // 3. UI laden
        loadQuizUI(currentQuizData);
      }

      /**
       * Behandelt den Klick auf eine Antwort-Option.
       */
      function handleOptionClick(event) {
        if (solutionShown) return; // Ignoriere Klicks, wenn die Lösung schon gezeigt wurde

        const clickedOption = event.target;
        const isCorrect = clickedOption.getAttribute("data-correct") === "true";

        // Zeige Feedback für die gewählte Option
        if (isCorrect) {
          clickedOption.classList.add("correct-answer");

          fetch()

          hintText.textContent = "Richtig! Gut gemacht!";
        } else {
          clickedOption.classList.add("incorrect-answer");
          hintText.textContent =
            "Falsch. Die richtige Antwort ist nun grün markiert.";

          // Markiere die korrekte Antwort
          const correctOption = document.querySelector('[data-correct="true"]');
          if (correctOption) {
            correctOption.classList.add("correct-answer");
          }
        }

        // Deaktiviere alle Antwortfelder und zeige den Weiter-Button
        solutionShown = true;
        disableOptions();
        showNextButton();
      }

      /**
       * Aktualisiert die HTML-Elemente mit den Daten der geladenen Frage.
       */
      function loadQuizUI(quizData) {
        // 1. Frage aktualisieren
        questionElement.textContent = quizData.frage;

        // 2. Antwort-Kästchen neu erstellen
        optionsGrid.innerHTML = "";

        quizData.antworten.forEach((answerText, index) => {
          const optionDiv = document.createElement("div");
          optionDiv.classList.add("option");
          optionDiv.textContent = answerText;

          // Füge das Attribut für die Lösungs-Logik hinzu
          if (index === quizData.korrekterIndex) {
            optionDiv.setAttribute("data-correct", "true");
          }

          // Füge den Klick-Listener hinzu
          optionDiv.addEventListener("click", handleOptionClick);

          optionsGrid.appendChild(optionDiv);
        });

        optionsGrid.classList.remove("hidden");
      }

      /**
       * Zeigt die korrekte Lösung an (wird durch Leertaste ausgelöst)
       */
      function showSolution() {
        if (solutionShown) return;

        solutionShown = true;

        const correctOption = document.querySelector('[data-correct="true"]');

        if (correctOption) {
          correctOption.classList.add("correct-answer");
        }

        hintText.textContent =
          "Drücke **Enter**, um die nächste Frage zu laden.";
        disableOptions();
        showNextButton();
      }

      /**
       * Deaktiviert Klick-Events auf allen Optionen.
       */
      function disableOptions() {
        const options = document.querySelectorAll(".option");
        options.forEach((option) => {
          option.classList.add("disabled-option");
        });
      }

      function showNextButton() {
        nextButton.classList.remove("hidden");
      }

      function hideNextButton() {
        nextButton.classList.add("hidden");
      }

      // Event-Listener für Tastatureingaben
      document.addEventListener("keydown", function (event) {
        if (!currentQuizData) return;

        // 1. Leertaste: Lösung anzeigen
        if ((event.key === " " || event.keyCode === 32) && !solutionShown) {
          event.preventDefault(); // Verhindert Scrollen
          showSolution();
        }

        // 2. Enter-Taste: Nächste Frage laden (wenn Lösung gezeigt wurde)
        if ((event.key === "Enter" || event.keyCode === 13) && solutionShown) {
          event.preventDefault(); // Verhindert Formular-Aktionen
          loadNextQuestion();
        }
      });

      // Event-Listener für Button-Klick
      nextButton.addEventListener("click", loadNextQuestion);

      // Beim Laden der Seite starten
      window.addEventListener("load", loadNextQuestion);