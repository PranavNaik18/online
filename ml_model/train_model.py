import numpy as np
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense
from tensorflow.keras.optimizers import Adam
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
import joblib

# Generate synthetic data (replace with real data)
def generate_data():
    np.random.seed(42)
    X = np.random.rand(1000, 5)  # Features: 5 dimensions
    y = (np.sum(X, axis=1) > 2.5).astype(int)  # Binary classification
    return X, y

# Build the model
def create_model(input_shape):
    model = Sequential([
        Dense(64, input_dim=input_shape, activation='relu'),
        Dense(32, activation='relu'),
        Dense(1, activation='sigmoid')  # Binary classification
    ])
    model.compile(optimizer=Adam(learning_rate=0.001), loss='binary_crossentropy', metrics=['accuracy'])
    return model

# Main function
if __name__ == '__main__':
    # Load data
    X, y = generate_data()
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    
    # Standardize data
    scaler = StandardScaler()
    X_train = scaler.fit_transform(X_train)
    X_test = scaler.transform(X_test)
    
    # Save the scaler for inference
    joblib.dump(scaler, 'scaler.pkl')
    
    # Train the model
    model = create_model(X_train.shape[1])
    model.fit(X_train, y_train, validation_data=(X_test, y_test), epochs=50, batch_size=16)
    
    # Save the trained model
    model.save('model.h5')
    print("Model training complete and saved as 'model.h5'.")
