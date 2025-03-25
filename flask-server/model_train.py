import pandas as pd
import numpy as np
import pickle
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import accuracy_score

# Load the Cleveland heart disease dataset
dataset_url = "https://archive.ics.uci.edu/ml/machine-learning-databases/heart-disease/processed.cleveland.data"
columns = ["age", "sex", "cp", "trestbps", "chol", "fbs", "restecg", "thalach", "exang", "oldpeak", "slope", "ca", "thal", "target"]

df = pd.read_csv(dataset_url, names=columns, na_values="?")
df = df.dropna()

# Convert categorical values
df["target"] = df["target"].apply(lambda x: 1 if x > 0 else 0)  # Binary classification (0: No Disease, 1: Disease)
X = df.drop(columns=["target"])
y = df["target"]


X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)


rf_model = RandomForestClassifier(n_estimators=100, random_state=42)
rf_model.fit(X_train, y_train)
rf_probs = rf_model.predict_proba(X_train)[:, 1]


X_train_hybrid = np.column_stack((X_train, rf_probs))
dt_model = DecisionTreeClassifier(random_state=42)
dt_model.fit(X_train_hybrid, y_train)


rf_test_probs = rf_model.predict_proba(X_test)[:, 1]
X_test_hybrid = np.column_stack((X_test, rf_test_probs))
y_pred = dt_model.predict(X_test_hybrid)


accuracy = accuracy_score(y_test, y_pred)
print(f"Hybrid Model Accuracy: {accuracy * 100:.2f}%")


with open("hybrid_model.pkl", "wb") as model_file:
    pickle.dump((rf_model, dt_model), model_file)

print("Hybrid model saved as 'hybrid_model.pkl'")
