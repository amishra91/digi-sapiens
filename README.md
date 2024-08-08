# IPA to SAMPA Converter

This is a web application built with Next.js (TypeScript) and FastAPI that converts IPA (International Phonetic Alphabet) text into SAMPA (Speech Assessment Methods Phonetic Alphabet) text. The application also supports batch conversion and audio pronunciation of SAMPA text.

## Features

- **Batch Conversion**: Convert multiple lines of IPA text at once.
- **Audio Pronunciation**: Hear the pronunciation of the SAMPA text using the Web Speech API.

## Backend

### FastAPI Setup

You have two options to run the backend: either directly on your local machine or using Docker.

#### Option 1: Run Locally

1. **Navigate to the backend directory:**

   ```bash
   cd backend
   ```

2. **Create and activate a virtual environment:**

   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies:**

   ```bash
   pip install -r requirements.txt
   ```

4. **Run the FastAPI application:**

   ```bash
   uvicorn app.main:app --reload
   ```

#### Option 2: Run with Docker

1. **Build the Docker image:**

   Make sure you are in the `backend` directory:

   ```bash
   cd backend
   docker build -t ipa-to-sampa .
   ```

2. **Run the Docker container:**

   ```bash
   docker run -p 8000:8000 ipa-to-sampa
   ```

   This command will start the FastAPI server inside a Docker container, and it will be accessible at [http://localhost:8000/docs](http://localhost:8000).

### API Endpoints

#### Convert IPA to SAMPA

- **Endpoint**: `POST /convert`
- **Request Body**: JSON object containing the IPA text to be converted.

  ```json
  {
    "ipa_text": "\u0061"
  }
  ```

- **Response**: JSON object containing the converted SAMPA text.

  ```json
  {
    "sampa": "a"
  }
  ```

## Frontend

### Next.js Setup

1. **Navigate to the frontend directory:**

   ```bash
   cd frontend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the Next.js development server:**

   ```bash
   npm run dev
   ```

### Using Next.js API Routes

- **API Route File**: `app/api/convert.ts`

  - This file proxies requests from the frontend to the FastAPI backend.

- **Frontend Page**: `app/page.tsx`
  - This file provides a user interface for inputting IPA text and displaying the SAMPA conversion.

## Running the Project

### Start the FastAPI Backend

You can run the backend using either of the two methods:

1. **Locally:**

   ```bash
   cd backend
   uvicorn app.main:app --reload
   ```

2. **Docker:**

   ```bash
   cd backend
   docker run -p 8000:8000 ipa-to-sampa
   ```

### Start the Next.js Frontend:

```bash
cd frontend
npm run dev
```
