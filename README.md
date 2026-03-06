# SafeCampus - AI-Powered Emergency Preparedness System

## 🚀 New Features Overview

### 1. **Real-Time Monitoring Dashboard**
- **4 Detection Systems** with live accuracy metrics:
  - 🔥 Fire Detection (98.5% accuracy)
  - 🏚️ Seismic Activity Monitoring (96.2% accuracy)
  - 🌊 Flood Detection (94.7% accuracy)
  - 🌀 Storm Tracking (97.1% accuracy)

### 2. **Intelligent Alert System**
- **Three Severity Levels**:
  - 🔴 **Critical**: Immediate danger requiring evacuation
  - 🟠 **Warning**: Potential threat requiring attention
  - 🔵 **Info**: System updates and status messages

- **Smart Features**:
  - Real-time alert generation based on detection
  - Auto-dismiss for info alerts (10 seconds)
  - Manual dismiss for critical/warning alerts
  - Alert history (last 5 alerts)
  - Timestamped notifications

### 3. **Dataset Upload System**
Upload JSON datasets to improve detection accuracy:

#### How to Upload:
1. Click **"Choose JSON File"** button in the Dataset Upload section
2. Select a `.json` file from your computer
3. System automatically:
   - Validates JSON format
   - Counts records
   - Displays file information
   - Updates detection models
   - Improves accuracy metrics

#### Sample Dataset Included:
Use `sample-dataset.json` (located in the project folder) to test the upload feature.

**Dataset Structure:**
```json
{
  "dataset_info": {...},
  "fire_detection": [...],
  "seismic_activity": [...],
  "flood_monitoring": [...],
  "storm_tracking": [...],
  "training_metrics": {...},
  "sensor_network": {...}
}
```

### 4. **Detection Simulation**
- Automatic event simulation every 8 seconds
- Randomly triggers fire, earthquake, flood, or cyclone alerts
- Real-time status updates on monitoring cards
- Accuracy fluctuations (realistic sensor behavior)
- Auto-recovery after 15 seconds

## 🎯 Key Features

### Monitoring Cards
Each card displays:
- **Live Status**: Monitoring / Alert / Warning
- **Accuracy Percentage**: Updated in real-time
- **Visual Progress Bar**: Animated gradient fill
- **Pulsing Animations**: Indicates active monitoring

### Alert Notifications
- **Color-Coded Borders**:
  - Red border: Critical alerts
  - Orange border: Warning alerts
  - Blue border: Info messages
- **Animated Slide-In**: Smooth entry animation
- **Pulse Effects**: Icon animations for attention
- **Dismissible**: Click X to remove

### JSON Dataset Info Panel
After upload, displays:
- 📊 **Records**: Total number of data points
- 💾 **File Size**: Dataset size in KB
- ⏰ **Last Updated**: Upload timestamp

## 🧪 Testing the System

### Test Alert Generation:
1. Wait 8 seconds for automatic detection simulation
2. Observe alert appearing in "Active Alerts" section
3. Watch monitoring card status change to "ALERT!"
4. Alert auto-resolves after 15 seconds

### Test Dataset Upload:
1. Scroll to "Upload Detection Dataset" section
2. Click "Choose JSON File"
3. Select `sample-dataset.json`
4. Watch accuracy improvements across all detection systems
5. View dataset information panel

### Test Manual Interactions:
- Toggle dark mode (moon/sun icon)
- Change disaster types in dropdown
- Check/uncheck preparedness items
- Click "View JSON Code" to see live data
- Copy JSON to clipboard

## 📊 Accuracy Metrics

The system simulates realistic detection accuracy:
- **Fire Detection**: 98.5% (±0.5% variance)
- **Earthquake Detection**: 96.2% (±0.5% variance)
- **Flood Detection**: 94.7% (±0.5% variance)
- **Cyclone Detection**: 97.1% (±0.5% variance)

Accuracy improves when datasets are uploaded!

## 🔧 Technical Implementation

### HTML Structure
- Monitoring dashboard with 4 detection cards
- Active alerts container (dynamic rendering)
- File upload input with status display
- Dataset information panel

### CSS Features
- Gradient animations on monitoring cards
- Pulsing glow effects for active status
- Shimmer animation on progress bars
- Smooth hover transitions
- Responsive design for all screen sizes

### JavaScript Logic
- `startMonitoringSystem()`: Initializes monitoring
- `simulateDetection()`: Generates random events
- `generateAlert()`: Creates and displays alerts
- `handleDatasetUpload()`: Processes JSON files
- `updateAccuracyDisplay()`: Updates real-time metrics

## 📱 Responsive Design

All features work perfectly on:
- 💻 Desktop (1920px+)
- 💻 Laptop (1366px - 1920px)
- 📱 Tablet (768px - 1366px)
- 📱 Mobile (320px - 768px)

## 🎨 Visual Enhancements

- **Glassmorphism Effects**: Modern UI design
- **Gradient Backgrounds**: Purple/blue themed
- **Animated Icons**: Bounce and pulse effects
- **Color-Coded Status**: Green (safe), Red (alert), Orange (warning)
- **Dark Mode Support**: Complete theme switching

## 🚀 Future Enhancements (Simulation Only)

*Note: Current implementation is a simulation for demonstration purposes. Actual sensor integration would require:*
- Real IoT sensor hardware (temperature, smoke, seismic)
- Backend API for data processing
- Machine learning model deployment
- WebSocket for real-time updates
- Database for alert history

## 📄 Files Structure

```
null point/
├── index.html              # Main HTML structure
├── styles.css              # Complete CSS styling
├── script.js               # JavaScript logic & simulation
├── sample-dataset.json     # Example dataset for testing
└── README.md              # This file
```

## 💡 Tips for Best Experience

1. **Keep browser console open (F12)** to see detailed logs
2. **Wait for automatic alerts** - simulation runs every 8 seconds
3. **Upload the sample dataset** to see accuracy improvements
4. **Try dark mode** for better visibility
5. **Test on mobile** to see responsive design

---

**Built with:** HTML5 • TailwindCSS • Vanilla JavaScript
**Purpose:** Campus Emergency Preparedness & Real-Time Monitoring
**Version:** 2.0 (Enhanced with AI Detection)
