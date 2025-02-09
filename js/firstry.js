const toggleButton = document.getElementById("toggle-btn");
const sidebar = document.getElementById("sidebar");

function toggleSidebar() {
  sidebar.classList.toggle("close");
  toggleButton.classList.toggle("rotate");

  closeAllSubMenus();
}

function toggleSubMenu(button) {
  if (!button.nextElementSibling.classList.contains("show")) {
    closeAllSubMenus();
  }

  button.nextElementSibling.classList.toggle("show");
  button.classList.toggle("rotate");

  if (sidebar.classList.contains("close")) {
    sidebar.classList.toggle("close");
    toggleButton.classList.toggle("rotate");
  }
}

function closeAllSubMenus() {
  Array.from(sidebar.getElementsByClassName("show")).forEach((ul) => {
    ul.classList.remove("show");
    ul.previousElementSibling.classList.remove("rotate");
  });
}
// Required Entry for Teachers and Students
document.getElementById("teacherForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent default form submission

  if (this.checkValidity()) {
    // Replace with your actual redirect URL
    window.location.href = "next-page.html";
  }
});

// MainBody of Manage Students
function initializeInputMasking() {
  try {
    // Date input masking
    const dateInput = document.getElementById("examDate");
    const timeInputs = {
      start: document.getElementById("startTime"),
      end: document.getElementById("endTime"),
    };

    if (!dateInput || !timeInputs.start || !timeInputs.end) {
      throw new Error("One or more form elements not found");
    }

    // Date input handler
    dateInput.addEventListener("input", (e) => {
      let value = e.target.value.replace(/\D/g, "");
      if (value.length > 8) value = value.substring(0, 8);
      e.target.value = value.replace(
        /(\d{2})(\d{0,2})(\d{0,4})/,
        (_, dd, mm, yyyy) => {
          return [dd, mm, yyyy].filter(Boolean).join("/");
        }
      );
    });

    // Time input handler for both start and end times
    function handleTimeInput(e) {
      let value = e.target.value.replace(/\D/g, "");
      if (value.length > 4) value = value.substring(0, 4);
      e.target.value = value.replace(/(\d{0,2})(\d{0,2})/, (_, hh, mm) => {
        return mm ? `${hh}:${mm}` : hh;
      });
    }

    // Add event listeners to both time inputs
    timeInputs.start.addEventListener("input", handleTimeInput);
    timeInputs.end.addEventListener("input", handleTimeInput);

    // Navigation and validation logic
    function handleKeyNavigation(e) {
      const isDateField = e.target.id === "examDate";
      const isTimeField = ["startTime", "endTime"].includes(e.target.id);
      const value = e.target.value;
      const cursorPos = e.target.selectionStart;

      // Handle backspace navigation
      if (e.key === "Backspace") {
        if (isDateField && value[cursorPos - 1] === "/") {
          e.target.value =
            value.slice(0, cursorPos - 1) + value.slice(cursorPos);
          e.target.setSelectionRange(cursorPos - 1, cursorPos - 1);
          e.preventDefault();
        }
        if (isTimeField && value[cursorPos - 1] === ":") {
          e.target.value =
            value.slice(0, cursorPos - 1) + value.slice(cursorPos);
          e.target.setSelectionRange(cursorPos - 1, cursorPos - 1);
          e.preventDefault();
        }
      }

      // Handle arrow key navigation
      if (e.key === "ArrowLeft" && cursorPos === (isTimeField ? 3 : 2)) {
        e.target.setSelectionRange(cursorPos - 1, cursorPos - 1);
        e.preventDefault();
      }
      if (e.key === "ArrowRight" && cursorPos === (isTimeField ? 2 : 3)) {
        e.target.setSelectionRange(cursorPos + 1, cursorPos + 1);
        e.preventDefault();
      }
    }

    // Add keydown listeners
    dateInput.addEventListener("keydown", handleKeyNavigation);
    timeInputs.start.addEventListener("keydown", handleKeyNavigation);
    timeInputs.end.addEventListener("keydown", handleKeyNavigation);

    console.log("Input masking initialized successfully");
  } catch (error) {
    console.error("Input masking initialization failed:", error);
  }
}

// Initialize when document is ready
document.addEventListener("DOMContentLoaded", initializeInputMasking);
