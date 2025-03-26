import matplotlib.pyplot as plt
from model import rf_model
from server import input_data

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
    plt.show()

# Example: Plot a 85% confidence circle
plot_confidence_circle(int(confidence_score))



