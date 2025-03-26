from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import pandas as pd
import warnings
from model import rf_model,dt_model
import numpy as np
import matplotlib.pyplot as plt

warnings.simplefilter(action='ignore', category=UserWarning)

model = pickle.load(open('./model.pkl','rb'))
app = Flask(__name__)
CORS(app)  # Allows cross-origin requests from React
input_data = pd.DataFrame()

@app.route("/predict", methods=["POST"])
def predict():
    try:
        # Get the JSON data from React
        data1 = request.json
        print("Received data:", data1)
        data = {'age': data1['Age'], 'sex': data1['Sex'], 'cp': data1['cp'], 'trestbps': data1['trestbps'], 'chol': data1['chol'], 'fbs': data1['fbs'], 'restecg': data1['restecg'], 'thalach': data1['thalach'], 'exang': data1['exang'], 'oldpeak': data1['oldpeak'], 'slope': data1['slope'], 'ca': data1['ca'], 'thal': data1['thal']}
        # Convert input data to DataFrame (ensure order matches training data)
        print("Received data:",data)
        input_data = pd.DataFrame([data])

        rf_prob = rf_model.predict_proba(input_data)[:, 1]


        input_hybrid = np.column_stack((input_data, rf_prob))


        prediction = dt_model.predict(input_hybrid)

        # Make a prediction
        # prediction = model.predict(input_data)
        print(prediction)
        # Return the prediction as a JSON response



        ####

# Get feature importance
        feature_importance = rf_model.feature_importances_
        features = list(input_data.columns)

        final_proba = rf_model.predict_proba(input_data)[:, 1]  # Probability of heart disease
        confidence_score = final_proba * 100  # Convert to percentage
        print(f"Confidence Score: {confidence_score[0]:.2f}%")

        def plot_confidence_circle(confidence_score, save_path="../src/assets/confidence_circle.png"):
            fig, ax = plt.subplots(figsize=(4, 4))

    # Define colors
            colors = ["#4CAF50", "#D3D3D3"]  # Green for confidence, Gray for remaining part

    # Create pie chart to visualize confidence as a circle
            ax.pie(
                [confidence_score, 100 - confidence_score],  
                colors=colors, 
                startangle=90, 
                counterclock=False, 
                wedgeprops={"edgecolor": "black", "linewidth": 1}
            )

    # Add text in the center of the circle
            plt.text(0, 0, f"{confidence_score:.1f}%", fontsize=16, ha="center", va="center", fontweight="bold")

    # Remove axis for a cleaner look
            plt.axis("equal")

    # Save the image for display in React
            plt.savefig(save_path, transparent=True)
    # plt.show()

# Example: Plot a 85% confidence circle
        plot_confidence_circle(int(confidence_score))




        ####




        return jsonify({"prediction": int(prediction[0])})

    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == "__main__":
    app.run(debug=True, port=5000)
