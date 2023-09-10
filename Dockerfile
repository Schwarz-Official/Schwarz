# Stage 1: Build React Frontend
FROM node:18 as frontend-builder
WORKDIR /app/frontend

# Copy frontend source code to the container
COPY frontend/ .

# Install dependencies and build the React app
RUN npm install
RUN npm run build

# Stage 2: Build Django Backend
FROM python:3.11 as backend-builder
WORKDIR /app/backend

# Copy backend source code to the container
COPY backend/ .

# Install Python dependencies
RUN pip install -r requirements.txt

# Stage 3: Final Image
FROM python:3.11
WORKDIR /app

# Copy the built React app from the frontend builder stage
COPY --from=frontend-builder /app/frontend/build/ /app/frontend/build/

# Copy the built Django backend from the backend builder stage
COPY --from=backend-builder /app/backend/ /app/backend/

# Expose any necessary ports
EXPOSE 8000

# Set environment variables if needed
# ENV DJANGO_SECRET_KEY=<your_secret_key>
# ENV DEBUG=False

# Install any additional dependencies if needed
# RUN apt-get update && apt-get install -y ...

# Start your Django application
CMD ["python", "backend/manage.py", "runserver", "0.0.0.0:8000"]