import React from "react";
import "./aboutpage.css"
import Navbar from "./navbar";

function Aboutpage(){
    return <> <Navbar/><div className="aboutpagebody">
        
        <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">💓 About This System</h1>
      <p className="text-lg mb-6">
        This is a Heart Disease Prediction System built using Machine Learning models. It allows you
        to input some basic health and medical information and predicts whether you may be at risk of
        heart disease. Please note that this tool is for awareness purposes only and not a replacement
        for medical diagnosis.
      </p>

      <h2 className="text-2xl font-semibold mb-3">🔍 How It Works</h2>
      <p className="mb-6">
        The system uses trained models like Decision Tree, Random Forest, and a Hybrid Model to
        analyze your inputs and predict the possibility of heart disease.
      </p>

      <h2 className="text-2xl font-semibold mb-3">🧩 Input Parameters & Meanings</h2>
      <ul className="list-disc ml-6 space-y-4 text-lg">
        <li>
          <strong>Age:</strong> Your age in years.
        </li>
        <li>
          <strong>Sex:</strong> Your gender.
          <br />
          <span className="text-gray-600">Options: Male or Female</span>
        </li>
        <li>
          <strong>Chest Pain Type:</strong> Describes the type of chest pain you may feel.
          <br />
          <span className="text-gray-600">
            Options:
            <ul className="list-disc ml-6">
              <li><strong>Typical Angina:</strong> Chest pain related to physical activity or stress.</li>
              <li><strong>Atypical Angina:</strong> Chest pain not clearly related to physical activity.</li>
              <li><strong>Non-Anginal Pain:</strong> Chest pain not related to the heart.</li>
              <li><strong>Asymptomatic:</strong> No chest pain, but may still have heart issues.</li>
            </ul>
          </span>
        </li>
        <li>
          <strong>Resting Blood Pressure:</strong> Your blood pressure when resting (in mm Hg).
        </li>
        <li>
          <strong>Cholesterol:</strong> Your cholesterol level in the blood (in mg/dl).
        </li>
        <li>
          <strong>Fasting Blood Sugar:</strong> Whether your blood sugar level is above 120 mg/dl after fasting.
          <br />
          <span className="text-gray-600">Options: Yes (above 120 mg/dl) or No</span>
        </li>
        <li>
          <strong>Resting ECG:</strong> Your heart's electrical activity recorded at rest.
          <br />
          <span className="text-gray-600">
            Options:
            <ul className="list-disc ml-6">
              <li><strong>Normal:</strong> No abnormalities.</li>
              <li><strong>ST-T Abnormality:</strong> Minor issues in heartbeat rhythm.</li>
              <li><strong>Left Ventricular Hypertrophy:</strong> Thickening of heart wall, possible heart strain.</li>
            </ul>
          </span>
        </li>
        <li>
          <strong>Max Heart Rate Achieved:</strong> The highest heart rate you can reach during exercise.
        </li>
        <li>
          <strong>Exercise-Induced Angina:</strong> Chest pain caused by physical exercise.
          <br />
          <span className="text-gray-600">Options: Yes or No</span>
        </li>
        <li>
          <strong>Oldpeak:</strong> The difference in your ST segment during exercise and rest. Higher values may indicate risk.
        </li>
        <li>
          <strong>Slope of ST Segment:</strong> Shape of your ST segment during exercise.
          <br />
          <span className="text-gray-600">
            Options:
            <ul className="list-disc ml-6">
              <li><strong>Upsloping:</strong> Heart rate increasing normally during exercise.</li>
              <li><strong>Flat:</strong> No significant change in heart rate — may indicate concern.</li>
              <li><strong>Downsloping:</strong> Heart rate decreases or drops — could be a warning sign.</li>
            </ul>
          </span>
        </li>
        <li>
          <strong>Number of Major Vessels:</strong> Number of major blood vessels observed under imaging (0 to 3).
        </li>
        <li>
          <strong>Thalassemia:</strong> A hereditary blood disorder.
          <br />
          <span className="text-gray-600">
            Options:
            <ul className="list-disc ml-6">
              <li><strong>Normal:</strong> No defect.</li>
              <li><strong>Fixed Defect:</strong> Permanent damage in blood flow to heart muscle.</li>
              <li><strong>Reversible Defect:</strong> Temporary reduction in blood flow during stress.</li>
            </ul>
          </span>
        </li>
      </ul>

      <p className="text-sm text-gray-600 mt-6">
        ⚠️ This system is for informational purposes only. Always consult a healthcare professional
        for actual medical advice.
      </p>
    </div>
    </div></>
}

export default Aboutpage