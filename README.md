# MemeTrap (Cybersecurity Mini-Project)

A simple front-end honeypot disguised as a harmless meme page. This project was developed as a mini-task to demonstrate how user interactions can trigger hidden background scripts to collect and exfiltrate data. 

**Features**
* **Deceptive UI:** Uses standard HTML/CSS to present an innocent-looking meme interface.
* **Background Logging:** Utilizes a custom `logger.js` script to capture user details when interacting with the page elements.
* **Awareness Training:** Built to illustrate the mechanics of basic phishing and front-end data harvesting.

**Disclaimer**
This code was created strictly for educational purposes and cybersecurity training. It should not be deployed or used for unauthorized data collection or malicious activities.

**Getting Started**
1. Clone the repository to your local machine.
2. Ensure both `index.html` and `logger.js` are in the same directory.
3. Open `index.html` in any modern web browser.
4. Open your browser's Developer Tools (F12) to observe the data logging behavior in the Console and Network tabs when interacting with the page.
