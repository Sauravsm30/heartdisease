import pickle,pandas
import warnings
warnings.simplefilter(action='ignore', category=UserWarning)

model = pickle.load(open('./model.pkl','rb'))
data = {'age': 67, 'sex': 1, 'cp': 3, 'trestbps': 160, 'chol': 286, 'fbs': 0, 'restecg': 2, 'thalach': 108, 'exang': 1, 'oldpeak': 1.5, 'slope': 1, 'ca': 3, 'thal': 1}
input_data = pandas.DataFrame([data])
prediction = model.predict(input_data)
print("prediction is",prediction)