Welcome to Focus Timer

⏳ Hi! I'm Lucas and this is a modular productivity timer application inspired by the Pomodoro technique, enhanced with ambient themes and responsive design.

🛠 About the Project
Focus Timer is an interactive and customizable timer built using HTML, CSS, and modular JavaScript.
It allows users to control their focus sessions with play/pause/reset features and personalize their ambiance with background themes and matching sounds.

📄 Project Structure
Timer Interface
Countdown display (minutes:seconds)

Buttons:

▶️ Play

⏹ Stop

➕ Add 5 min

➖ Remove 5 min

Ambient Selector
🌲 Forest

🌧 Rain

☕ Coffee Shop

🔥 Fireplace
Each theme applies a unique background gradient, button styling, and looping audio.

🧱 Modular JavaScript Architecture
main.js – Entry point; calls play() and ambientSelected()

timer.js – Countdown logic with end alert (RunTimer())

actions.js – Handles play/pause/add/remove interactions (not yet shown, assumed logic is present)

elements.js – Central export of DOM references (e.g., buttons, timer text)

ending-timer.js – Visual warning color changes when the timer is about to end

stop-sound.js – Stops all ambient sounds and resets their playback

sounds.js – Loads and loops ambient sound files

select.js – Manages ambient button events, styling, sound playback, and theme classes

theme.js – Applies consistent visual styling (colors) for timer text/buttons according to the selected theme

🧰 Technologies Used
HTML5

CSS3 (responsive layout, theming, grid/flexbox, gradients)

JavaScript ES Modules

Phosphor Icons

Google Fonts: Roboto

🎨 Design & Accessibility
CSS variables (:root) for theme colors and sizing

Responsive typography using clamp() and rem units

Accessible labels via .sr-only for screen readers

Visual feedback: active themes are highlighted (.clicked), buttons animate on hover, and the timer color changes when time is nearly over.

