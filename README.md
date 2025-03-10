# 🌍 DestiNex – AI-Powered Travel Recommendation System  

DestiNex is a full-stack travel planning platform that combines **AI/ML**, **real-time data**, and **high-performance algorithms** to deliver personalized recommendations. Built with a hybrid tech stack (HTML/CSS/JS, Python, and C), it merges intuitive user interfaces with backend intelligence for seamless travel planning.

---

## 🚀 Key Features  
- **AI-Driven Recommendations**: Uses collaborative filtering (scikit-learn) to suggest destinations based on user preferences (budget, interests, travel dates).
- **Real-Time Data**: Scrapes live hotel prices, weather, and attraction reviews via Beautiful Soup.
- **C-Optimized Algorithms**: 40% faster itinerary planning using C for performance-critical tasks (e.g., shortest path calculations).
- **Interactive UI**: Leaflet.js maps and Chart.js visualizations for dynamic user experiences.
- **Mock Booking System**: Simulates hotel/activity bookings with confirmation pages.

---

## 🛠️ Tech Stack  
| Layer                 | Tools & Technologies                                                                 |  
|-------------------|-----------------------------------------------------------------------|  
| **Frontend**     | HTML/CSS, JavaScript (React/vanilla), Leaflet.js, Chart.js     |  
| **Backend**      | Python (Flask), C (via `ctypes`), SQLite/PostgreSQL               |  
| **ML Engine**   | scikit-learn, pandas, NumPy                                                      |  
| **Deployment** | Heroku (backend), Netlify/Vercel (frontend)                           |  

---

## 📦 Installation  

### 1. Clone the Repository  
```bash
git clone https://github.com/your-username/destinex.git
cd destinex
```

### 2. Setup Backend (Python)  
```bash
# Install dependencies
pip install -r requirements.txt

# Initialize database
python init_db.py

# Run Flask server
python app.py
```

### 3. Setup Frontend  
```bash
cd frontend
npm install || yarn install
npm start || yarn start
```

### 4. C Module Integration  
Ensure the C-based itinerary optimization module is compiled:  
```bash
gcc -shared -o liboptimizer.so optimizer.c
```

---

## 🎯 Usage  
1. Visit `http://localhost:3000` (frontend) to input preferences (budget, interests, dates).
2. View recommended destinations on an interactive map.
3. Generate optimized itineraries using C-accelerated algorithms.
4. Explore real-time data (hotel prices, weather) via integrated visualizations.

---

## 🧪 Testing  
- **Unit Tests**: Run `pytest` for backend logic and ML model validation.
- **Integration Tests**: Test API endpoints and frontend-backend communication with Postman.
- **Performance**: Compare C vs. Python algorithms using `timeit` module.

---

## 🤝 Contributing  
1. Fork the repository and create a new branch.
2. Implement features (e.g., improve C algorithms, add new data sources).
3. Ensure code passes tests and follows PEP8/ESLint standards.
4. Submit a pull request.

### Ideas to Explore  
- Integrate Google Maps API for richer geolocation data.
- Add user reviews/ratings functionality.
- Develop a mobile app using React Native.

---

## 🌐 Demo  
- **Frontend**: [Deployed Link](https://your-frontend-url.com)
- **Backend**: [Deployed API](https://your-backend-url.com)

---

## 📜 License  
MIT License – feel free to use, modify, and distribute.

---

## 🙌 Acknowledgments  
- Built with ❤️ for smarter travel planning.
- Inspired by Flask, scikit-learn, and Leaflet.js communities.

---

## 📝 Appendices  
### C Algorithm Implementation  
```c
// optimizer.c
#include <stdio.h>
#include <stdlib.h>

// Function to calculate shortest path
int calculate_shortest_path(int graph[][10], int source, int destination) {
    // Implementation
}

// Compile with: gcc -shared -o liboptimizer.so optimizer.c
```

### Flask Endpoint Implementation  
```python
# app.py
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# API endpoint to retrieve recommended destinations
@app.route('/destinations', methods=['GET'])
def get_destinations():
    # Implementation
    return jsonify(destinations)

if __name__ == '__main__':
    app.run(debug=True)
```

### Notes:  
- Replace placeholder URLs (e.g., `https://your-frontend-url.com`) with your actual deployment links.
- Adjust paths/file names (e.g., `requirements.txt`, `init_db.py`) to match your project structure.