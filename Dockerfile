# Етап збірки
FROM node:18-alpine as build

# Встановлюємо робочу директорію
WORKDIR /app

# Копіюємо package.json та package-lock.json
COPY package*.json ./

# Встановлюємо залежності
RUN npm install

# Копіюємо всі файли проекту
COPY . .

# Збираємо проект
RUN npm run build

# Етап продакшену
FROM nginx:alpine

# Копіюємо збудований проект в директорію nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Копіюємо конфігурацію nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Відкриваємо порт 80
EXPOSE 80

# Запускаємо nginx
CMD ["nginx", "-g", "daemon off;"] 