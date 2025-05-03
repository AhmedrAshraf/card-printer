# 🧾 Auto Card Generator from Google Sheets

This project connects to a Google Sheet to fetch user data and automatically generate printable cards with a single click. It simplifies the process of creating personalized cards for multiple users without manual entry, saving time and reducing errors.

## 📌 Features
- 🔗 Connects directly to a Google Sheet via API

- 📤 Fetches all user data in real-time

- 🖨️ Automatically generates styled user cards

- 🖱️ One-click to print all cards

- 🎨 Customizable card design

## 🛠️ Tech Stack
- **Frontend**: HTML, CSS, JavaScript

- **Google Sheets API**: For data fetching

- **Print Handling**: window.print() and custom CSS

## 🚀 Getting Started
### 1. Clone the Repository
Copy
Edit
```bash
git clone https://github.com/AhmedrAshraf/card-printer.git
cd card-printer
```

### 2. Setup Google Sheet
- Create a new Google Sheet with the following columns: `Name`, `Email`, `Phone`, `ID`, etc.

- Go to `File > Share > Publish to web`

- Then go to `Extensions > Apps Script` and use Google Apps Script to create a web API, or use a third-party tool like **Sheet.best**, **SheetDB**, or [**Google Visualization API**].

### 3. Configure API Endpoint
In `script.js` (or wherever your fetch call is made), update the API URL:

Copy
Edit

```javascript
const SHEET_API_URL = "https://api.sheet.best/api/sheets/your-endpoint-id";
```

## 🧾 How It Works
1. Click the "**Generate Cards**" button.

2. The app fetches all data from the connected Google Sheet.

3. Each user’s information is used to generate a custom card.

4. Cards are displayed on screen with a **Print** button.

5. Print the cards directly or save them as PDF.



## 🖼️ Sample Card Preview

## 📄 Example Google Sheet Structure
```bash
Name	    Email	            Phone	    ID
John Doe	john@example.com	1234567890	A001
Jane Roe	jane@example.com	9876543210	A002
```
## ✅ To-Do / Future Features
 - Add QR code on each card

 - Export cards to PDF instead of direct print

 - Add support for custom fields

 - Authentication for accessing the sheet

## 📬 Contact
If you like the project or have suggestions:

- 📧 Email: your.email@example.com

- 💼 LinkedIn: [Asha Ram](https://linkedin.com/in/asha-ram)

## 📜 License
This project is licensed under the MIT License.