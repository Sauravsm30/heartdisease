import pickle
import pandas as pd
import warnings
import numpy as np

warnings.simplefilter(action='ignore', category=UserWarning)


rf_model, dt_model = pickle.load(open('./hybrid_model.pkl', 'rb'))


data = {'age': 67, 'sex': 1, 'cp': 3, 'trestbps': 160, 'chol': 286, 'fbs': 0, 
        'restecg': 2, 'thalach': 108, 'exang': 1, 'oldpeak': 1.5, 'slope': 1, 
        'ca': 3, 'thal': 1}


input_data = pd.DataFrame([data])


rf_prob = rf_model.predict_proba(input_data)[:, 1]


input_hybrid = np.column_stack((input_data, rf_prob))


prediction = dt_model.predict(input_hybrid)

print("Prediction is", prediction)
