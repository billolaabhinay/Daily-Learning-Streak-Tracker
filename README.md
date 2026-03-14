# 📚 Daily Learning Streak Tracker

A modern full-stack web application that helps students maintain *daily study consistency* by tracking learning streaks.

This project was developed as part of the *KALNET Full Stack Task* and demonstrates full-stack development using *Next.js, TypeScript, and Tailwind CSS*.

---

## 🚀 Live Demo

Deployed on *Vercel*

https://daily-learning-streak-tracker-two.vercel.app/

---

## 🎯 Project Objective

Students often lose consistency in studying.
This application motivates students to maintain *daily learning habits* by tracking their study streak.

Users can:

* Mark *"I Studied Today"*
* Track their *current study streak*
* View *total study days*
* See their *last study date*
* Check *study history*
* View study dates in a *calendar*

---

## 🛠 Tech Stack

* *Next.js (App Router)*
* *TypeScript*
* *Tailwind CSS*
* *Next.js API Routes*
* *LocalStorage for data storage*
* *Vercel for deployment*

---

## ✨ Features

### 📊 Dashboard

* Displays *current streak*
* Shows *total study days*
* Shows *last study date*

### 📅 Calendar View

* Highlights all study days
* Helps visualize learning consistency

### 🔥 Streak Tracking

* Automatically calculates study streak
* Resets streak if a day is missed

### 📈 Progress Bar

* Displays monthly learning progress

### 🌙 Dark Mode

* Toggle between light and dark themes

### 📜 Study History

* Shows all previous study dates
* Newest entries appear first

---

## 🧠 Streak Logic

The streak follows these rules:

1. If the user studies *today and yesterday*, streak continues.
2. If the user *misses a day*, the streak resets.
3. Users *cannot mark study twice in one day*.

Example:

| Date     | Studied |
| -------- | ------- |
| 10 March | ✅       |
| 11 March | ✅       |
| 12 March | ✅       |

Streak = *3*

If the user skips *13 March* and studies on *14 March, the streak resets to **1*.

---

## 📂 Project Structure


app
 ├ api
 │   ├ study
 │   ├ streak
 │   └ history
 ├ history
 │   └ page.tsx
 └ page.tsx

components
 ├ Sidebar
 ├ StatsCard
 ├ StudyButton
 ├ ProgressBar
 ├ StudyCalendar
 ├ DarkModeToggle

lib
 └ streakLogic


---

## ⚙️ Installation & Setup

Clone the repository:


git clone https://github.com/billolaabhinay/Daily-Learning-Streak-Tracker.git


Navigate to the project folder:


cd daily-learning-streak-tracker


Install dependencies:


npm install


Run the development server:


npm run dev


Open in browser:


http://localhost:3000


---

## 🚀 Deployment

The project is deployed using *Vercel*.

Steps:

1. Push project to GitHub
2. Connect repository to Vercel
3. Deploy automatically

---

## 📸 Screenshots

Dashboard
Calendar View
Study History

(Add screenshots here after deployment)

---

## 📌 Future Improvements

* GitHub-style streak heatmap
* Study reminders
* Study statistics charts
* User authentication
* Leaderboard for students

---



⭐ If you like this project, feel free to star the repository!
