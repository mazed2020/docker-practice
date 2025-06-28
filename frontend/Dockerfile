FROM node:22-alpine

# Install dependencies
WORKDIR /app
COPY package*.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Set environment variables for Vite
ENV HOST=0.0.0.0
ENV PORT=5173

# Expose port to host
EXPOSE 5173

# Run Vite with proper host and port
CMD ["npm", "run", "dev"]
